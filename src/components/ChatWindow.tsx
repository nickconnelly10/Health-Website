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
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'disconnected' | 'checking'>('checking');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Check backend connection on component mount
  useEffect(() => {
    const checkConnection = async () => {
      try {
        setConnectionStatus('checking');
        const isConnected = await healthAIService.checkConnection();
        setConnectionStatus(isConnected ? 'connected' : 'disconnected');
      } catch {
        setConnectionStatus('disconnected');
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
        timestamp: new Date(),
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
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">H</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Health AI Advisor</h1>
              <p className="text-sm text-gray-500">Powered by Mistral AI</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${connectionStatusDisplay.color}`}></div>
              <span className="text-xs text-gray-500">
                {connectionStatusDisplay.text}
              </span>
            </div>
            {messages.length > 0 && (
              <button
                onClick={clearChat}
                className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1 rounded-md hover:bg-gray-100 transition-colors"
                title="Clear chat history"
              >
                Clear chat
              </button>
            )}
          </div>
        </div>
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
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Welcome to Health AI Advisor
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  I'm your evidence-based health advisor. Ask me anything about nutrition, exercise, wellness, or general health topics.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 text-sm">💪</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Exercise Science</h3>
                        <p className="text-sm text-gray-500">Workout plans & fitness advice</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-green-600 text-sm">🥗</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Nutrition</h3>
                        <p className="text-sm text-gray-500">Dietary guidance & meal planning</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <span className="text-purple-600 text-sm">🧘</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Wellness</h3>
                        <p className="text-sm text-gray-500">Lifestyle & stress management</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <span className="text-orange-600 text-sm">📚</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Education</h3>
                        <p className="text-sm text-gray-500">Health knowledge & research</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> I provide general guidance only. Always consult healthcare professionals for medical advice.
                  </p>
                </div>
                
                {connectionStatus === 'disconnected' && (
                  <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
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
                  <div className="bg-white border border-gray-200 rounded-2xl px-6 py-4 max-w-3xl shadow-sm">
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">AI is thinking...</span>
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
      <div className="bg-white border-t border-gray-200 px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <ChatInput
            value={inputValue}
            onChange={setInputValue}
            onSend={handleSendWrapper}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            placeholder="Ask about nutrition, exercise, wellness, or any health topic..."
          />
        </div>
      </div>
    </div>
  );
} 