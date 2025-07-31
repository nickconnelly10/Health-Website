import React, { useRef } from 'react';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  isDarkMode?: boolean;
  placeholder?: string;
}

export default function ChatInput({ 
  value, 
  onChange, 
  onSend, 
  onKeyPress, 
  disabled, 
  isDarkMode = false,
  placeholder = "Ask HealthAI anything..." 
}: ChatInputProps) {
  const lastSendTime = useRef<number>(0);
  const DEBOUNCE_DELAY = 1000; // 1 second debounce

  const handleSend = () => {
    const now = Date.now();
    if (now - lastSendTime.current < DEBOUNCE_DELAY || disabled) {
      return; // Prevent rapid double submissions or disabled state
    }
    lastSendTime.current = now;
    onSend();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
    // Only call onKeyPress for non-Enter keys to avoid double submission
    if (e.key !== 'Enter') {
      onKeyPress?.(e);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-end space-x-3">
        <div className="flex-1 relative">
          <textarea
            className={`w-full resize-none rounded-xl border px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[52px] max-h-32 transition-all duration-200 ${
              isDarkMode
                ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            disabled={disabled}
            style={{
              resize: 'none',
              overflow: 'hidden'
            }}
          />
        </div>
        
        <button
          className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
            disabled || !value.trim()
              ? isDarkMode
                ? 'bg-gray-600 text-gray-500 cursor-not-allowed'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm'
          }`}
          onClick={handleSend}
          disabled={disabled || !value.trim()}
          title={disabled ? "Processing..." : "Send message"}
        >
          {disabled ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
              />
            </svg>
          )}
        </button>
      </div>
      
      <div className={`text-xs mt-2 text-center transition-colors ${
        isDarkMode ? 'text-gray-500' : 'text-gray-400'
      }`}>
        Press Enter to send, Shift+Enter for new line
      </div>
    </div>
  );
} 