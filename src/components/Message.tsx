import * as React from 'react';
import type { ChatMessage } from './ChatWindow';

export default function Message({ message }: { message: ChatMessage }) {
  const isUser = message.role === 'user';
  const timestamp = message.timestamp
    ? new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`} aria-label={isUser ? 'User message' : 'AI message'}>
      <div
        className={`rounded-xl px-5 py-4 max-w-lg shadow-md border text-base whitespace-pre-line font-roman transition-colors flex flex-col gap-2
          ${isUser
            ? 'bg-burgundy text-marble border-burgundy self-end'
            : 'bg-marble text-burgundy border-marble self-start'}
        `}
      >
        <div className={message.role === 'ai' ? 'ai-message-content' : ''}>{String(message.content)}</div>
        {message.role === 'ai' && message.summary && (
          <ul className="mt-3 pl-5 list-disc text-sm text-burgundy">
            {message.summary.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
        <span className={`text-xs mt-2 px-2 py-1 rounded bg-charcoal/10 text-charcoal self-end w-fit`} aria-label="Timestamp">{timestamp}</span>
      </div>
    </div>
  );
} 