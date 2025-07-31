import * as React from 'react';
import type { ChatMessage } from './ChatWindow';

export default function Message({ message }: { message: ChatMessage }) {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  // Check for dark mode on mount and listen for changes
  React.useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    // Listen for dark mode changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);
  const isUser = message.role === 'user';
  const timestamp = message.timestamp
    ? new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} px-4`}>
      <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start space-x-3 max-w-3xl`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser 
            ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
            : 'bg-gradient-to-r from-gray-500 to-gray-600'
        }`}>
          <span className="text-white text-sm font-medium">
            {isUser ? 'U' : 'AI'}
          </span>
        </div>
        
        {/* Message Content */}
        <div className={`flex-1 ${isUser ? 'text-right' : 'text-left'}`}>
          <div className={`inline-block rounded-2xl px-4 py-3 max-w-2xl transition-colors ${
            isUser 
              ? 'bg-blue-600 text-white' 
              : isDarkMode
                ? 'bg-gray-800 border border-gray-600 text-gray-100 shadow-sm'
                : 'bg-white border border-gray-200 text-gray-900 shadow-sm'
          }`}>
            <div className="text-sm leading-relaxed whitespace-pre-line">
              {String(message.content)}
            </div>
            
            {message.role === 'ai' && message.summary && (
              <div className={`mt-3 pt-3 border-t transition-colors ${
                isDarkMode ? 'border-gray-600' : 'border-gray-100'
              }`}>
                <ul className={`text-xs space-y-1 transition-colors ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {message.summary.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className={`mt-1 transition-colors ${
                        isDarkMode ? 'text-gray-500' : 'text-gray-400'
                      }`}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Timestamp and Metadata */}
          <div className={`text-xs mt-2 transition-colors ${
            isDarkMode ? 'text-gray-500' : 'text-gray-400'
          } ${isUser ? 'text-right' : 'text-left'}`}>
            <div className="flex items-center space-x-2">
              <span>{timestamp}</span>
              
              {/* AurraCloud metadata for AI messages */}
              {message.role === 'ai' && (
                <>
                  {message.response_time && (
                    <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                      • {message.response_time}s
                    </span>
                  )}
                  
                  {message.source === 'aurra' && (
                    <span className="text-blue-400 font-medium">
                      • AurraCloud
                    </span>
                  )}
                  
                  {message.protocol_hint && (
                    <span className="text-green-400" title={`Protocol: ${message.protocol_hint}`}>
                      • 📄 Protocol
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 