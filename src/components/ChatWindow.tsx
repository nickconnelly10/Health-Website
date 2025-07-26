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
      connected: { color: 'bg-green-400', text: 'Connected', icon: '🟢' },
      disconnected: { color: 'bg-red-400', text: 'Disconnected', icon: '🔴' },
      checking: { color: 'bg-yellow-400', text: 'Checking...', icon: '🟡' }
    };
    
    const config = statusConfig[connectionStatus];
    return { ...config, color: config.color };
  }, [connectionStatus]);

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] max-w-4xl mx-auto bg-white">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-burgundy to-burgundy-800 text-white px-6 py-4 border-b border-burgundy-700">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-serif font-bold">Health AI Advisor</h1>
            <p className="text-burgundy-100 text-sm mt-1">Evidence-based health guidance powered by Mistral AI</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${connectionStatusDisplay.color}`}></div>
              <span className="text-xs text-burgundy-100">
                {connectionStatusDisplay.text}
              </span>
            </div>
            {messages.length > 0 && (
              <button
                onClick={clearChat}
                className="text-xs text-burgundy-100 hover:text-white transition-colors px-2 py-1 rounded border border-burgundy-300 hover:border-burgundy-100"
                title="Clear chat history"
              >
                Clear Chat
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-stone-50 to-white">
        {messages.length === 0 ? (
          <div className="text-center text-stone-500 py-12">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-semibold text-burgundy mb-2">Welcome to Health AI Advisor</h3>
            <p className="text-stone-600 max-w-md mx-auto mb-4">
              I'm your evidence-based health advisor, powered by advanced AI. I can help you with:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-lg mx-auto text-sm">
              <div className="bg-white p-3 rounded-lg border border-stone-200 shadow-sm">
                <span className="font-semibold text-burgundy">💪 Exercise Science</span>
                <p className="text-stone-600 text-xs mt-1">Workout plans, fitness advice</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-stone-200 shadow-sm">
                <span className="font-semibold text-burgundy">🥗 Nutrition</span>
                <p className="text-stone-600 text-xs mt-1">Dietary guidance, meal planning</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-stone-200 shadow-sm">
                <span className="font-semibold text-burgundy">🧘 Wellness</span>
                <p className="text-stone-600 text-xs mt-1">Lifestyle, stress management</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-stone-200 shadow-sm">
                <span className="font-semibold text-burgundy">📚 Education</span>
                <p className="text-stone-600 text-xs mt-1">Health knowledge, research</p>
              </div>
            </div>
            <p className="text-xs text-stone-500 mt-4">
              Note: I provide general guidance only. Always consult healthcare professionals for medical advice.
            </p>
            {connectionStatus === 'disconnected' && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  ⚠️ Backend connection issue detected. You can still type messages, but AI responses may not work.
                </p>
              </div>
            )}
          </div>
        ) : (
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))
        )}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-marble text-burgundy border-marble rounded-xl px-5 py-4 max-w-lg shadow-md border">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-burgundy"></div>
                <div>
                  <span className="text-sm font-medium">AI is thinking...</span>
                  <p className="text-xs text-burgundy/70 mt-1">Processing your health question</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <ChatInput
        value={inputValue}
        onChange={setInputValue}
        onSend={handleSendWrapper}
        onKeyPress={handleKeyPress}
        disabled={isLoading}
        placeholder="Ask about nutrition, exercise, wellness, or any health topic..."
      />
    </div>
  );
} 