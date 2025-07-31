import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import ChatInput from './ChatInput';
import Message from './Message';
import { healthAIService } from '../api/healthAI';

export interface ChatMessage {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
  summary?: string[];
  model?: string;
  response_time?: number;
  protocol_hint?: string;
  source?: string;
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'disconnected' | 'checking'>('checking');
  const [aurraStatus, setAurraStatus] = useState<{ isAurra: boolean; status: string } | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Check for dark mode on mount and listen for changes
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    // Listen for dark mode changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    // Only scroll to bottom when new messages are added, not on initial load
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages, scrollToBottom]);

  // Check backend connection and AurraCloud status on component mount
  useEffect(() => {
    const checkConnection = async () => {
      try {
        setConnectionStatus('checking');
        const isConnected = await healthAIService.checkConnection();
        setConnectionStatus(isConnected ? 'connected' : 'disconnected');
        
        // Check if backend is AurraCloud-powered
        if (isConnected) {
          const aurraInfo = await healthAIService.checkAurraCloudStatus();
          setAurraStatus(aurraInfo);
        }
      } catch {
        setConnectionStatus('disconnected');
        setAurraStatus(null);
      }
    };

    void checkConnection();
    
    // Set up periodic connection check every 30 seconds
    const interval = setInterval(() => {
      void checkConnection();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleSend = useCallback(async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Cancel any existing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create new abort controller for this request
    abortControllerRef.current = new AbortController();

    try {
      const aiResponse = await healthAIService.getHealthAdvice(inputValue.trim());
      
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: aiResponse.response,
        timestamp: aiResponse.timestamp,
        model: aiResponse.model,
        response_time: aiResponse.response_time,
        protocol_hint: aiResponse.protocol_hint,
        source: aiResponse.source,
      };

      setMessages(prev => [...prev, aiMessage]);
      setConnectionStatus('connected');
    } catch (error) {
      console.error('Error sending message:', error);
      
      let errorMessage = 'I apologize, but I encountered an error. Please try again.';
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          errorMessage = 'Request was cancelled. Please try again.';
        } else if (error.message.includes('timeout')) {
          errorMessage = 'The request took too long. Please try again.';
        } else if (error.message.includes('network')) {
          errorMessage = 'Network error. Please check your connection and try again.';
        } else {
          errorMessage = `Error: ${error.message}`;
        }
      }

      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: errorMessage,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMsg]);
      setConnectionStatus('disconnected');
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  }, [inputValue, isLoading]);

  const handleSendWrapper = useCallback(() => {
    void handleSend();
  }, [handleSend]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void handleSend();
    }
  }, [handleSend]);

  const clearChat = useCallback(() => {
    setMessages([]);
  }, []);

  const connectionStatusDisplay = useMemo(() => {
    const statusConfig = {
      connected: { color: 'bg-green-500', text: 'Connected', icon: '🟢' },
      disconnected: { color: 'bg-red-500', text: 'Disconnected', icon: '🔴' },
      checking: { color: 'bg-yellow-500', text: 'Checking...', icon: '🟡' }
    };
    
    const config = statusConfig[connectionStatus];
    return { ...config, color: config.color };
  }, [connectionStatus]);

  return (
    <div className={`flex flex-col h-screen relative transition-colors ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Connection Status Corner */}
      <div className={`absolute top-4 right-4 z-10 flex items-center space-x-2 backdrop-blur-sm px-3 py-2 rounded-lg border shadow-sm transition-colors ${
        isDarkMode 
          ? 'bg-gray-800/90 border-gray-600' 
          : 'bg-white/90 border-gray-200'
      }`}>
        <div className={`w-2 h-2 rounded-full ${connectionStatusDisplay.color}`}></div>
        <span className={`text-xs font-medium transition-colors ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {connectionStatusDisplay.text}
        </span>
        {aurraStatus?.isAurra && (
          <span className="text-xs text-blue-400 font-medium ml-2">
            AurraCloud
          </span>
        )}
        {messages.length > 0 && (
          <button
            onClick={clearChat}
            className={`text-xs px-2 py-1 rounded transition-colors ml-2 ${
              isDarkMode 
                ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
            title="Clear chat history"
          >
            Clear
          </button>
        )}
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-4 py-16">
              <div className="text-center max-w-2xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🏥</span>
                </div>
                <h2 className={`text-2xl font-semibold mb-4 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Welcome to your Health AI Advisor
                </h2>
                <p className={`mb-8 text-lg transition-colors ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  I'm your evidence-based health advisor. Ask me anything about nutrition, exercise, wellness, or general health topics.
                </p>
                
                <div className={`border rounded-lg p-4 transition-colors ${
                  isDarkMode 
                    ? 'bg-blue-900/20 border-blue-700' 
                    : 'bg-blue-50 border-blue-200'
                }`}>
                  <p className={`text-sm transition-colors ${
                    isDarkMode ? 'text-blue-200' : 'text-blue-800'
                  }`}>
                    <strong>Note:</strong> I provide general guidance only. Always consult healthcare professionals for medical advice.
                  </p>
                </div>
                
                {connectionStatus === 'disconnected' && (
                  <div className={`mt-6 border rounded-lg p-4 transition-colors ${
                    isDarkMode 
                      ? 'bg-yellow-900/20 border-yellow-700' 
                      : 'bg-yellow-50 border-yellow-200'
                  }`}>
                    <p className={`text-sm transition-colors ${
                      isDarkMode ? 'text-yellow-200' : 'text-yellow-800'
                    }`}>
                      ⚠️ Backend connection issue detected. You can still type messages, but AI responses may not work.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-6 py-6">
              {messages.map((message) => (
                <Message key={message.id} message={message} />
              ))}
              
              {isLoading && (
                <div className="flex justify-start px-4">
                  <div className={`border rounded-2xl px-6 py-4 max-w-3xl shadow-sm transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-600' 
                      : 'bg-white border-gray-200'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-1">
                        <div className={`w-2 h-2 rounded-full animate-bounce ${
                          isDarkMode ? 'bg-gray-400' : 'bg-gray-400'
                        }`}></div>
                        <div className={`w-2 h-2 rounded-full animate-bounce ${
                          isDarkMode ? 'bg-gray-400' : 'bg-gray-400'
                        }`} style={{ animationDelay: '0.1s' }}></div>
                        <div className={`w-2 h-2 rounded-full animate-bounce ${
                          isDarkMode ? 'bg-gray-400' : 'bg-gray-400'
                        }`} style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className={`text-sm transition-colors ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {aurraStatus?.isAurra ? 'AurraCloud Grok-4 is thinking...' : 'AI is thinking...'}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat Input */}
      <div className={`border-t px-4 py-4 transition-colors ${
        isDarkMode 
          ? 'bg-gray-800 border-gray-600' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="max-w-4xl mx-auto">
          <ChatInput
            value={inputValue}
            onChange={setInputValue}
            onSend={handleSendWrapper}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            isDarkMode={isDarkMode}
            placeholder="Ask about nutrition, exercise, wellness, or any health topic..."
          />
        </div>
      </div>
    </div>
  );
} 