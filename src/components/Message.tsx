import * as React from 'react';
import type { ChatMessage } from './ChatWindow';

export default function Message({ message }: { message: ChatMessage }) {
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
          <div className={`inline-block rounded-2xl px-4 py-3 max-w-2xl ${
            isUser 
              ? 'bg-blue-600 text-white' 
              : 'bg-white border border-gray-200 text-gray-900 shadow-sm'
          }`}>
            <div className="text-sm leading-relaxed whitespace-pre-line">
              {String(message.content)}
            </div>
            
            {message.role === 'ai' && message.summary && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <ul className="text-xs text-gray-600 space-y-1">
                  {message.summary.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-gray-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Timestamp */}
          <div className={`text-xs text-gray-400 mt-2 ${isUser ? 'text-right' : 'text-left'}`}>
            {timestamp}
          </div>
        </div>
      </div>
    </div>
  );
} 