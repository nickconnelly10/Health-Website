import React from 'react';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  placeholder?: string;
}

export default function ChatInput({ 
  value, 
  onChange, 
  onSend, 
  onKeyPress, 
  disabled, 
  placeholder = "Ask HealthAI anything..." 
}: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
    onKeyPress?.(e);
  };

  return (
    <div className="w-full bg-gradient-to-t from-stone-100 to-white border-t border-stone-300 p-4 flex items-end gap-3 transition-colors">
      <textarea
        className="flex-1 resize-none rounded-lg border border-stone-300 bg-white px-4 py-2 text-stone-900 font-serif shadow-inner focus:outline-none focus:ring-2 focus:ring-gold-400 min-h-[48px] max-h-32 transition-colors"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1}
        disabled={disabled}
      />
      <button
        className="bg-gradient-to-tr from-gold-500 to-gold-600 text-white font-bold px-5 py-2 rounded-lg shadow-md border border-gold-600 hover:from-gold-600 hover:to-gold-700 transition-colors disabled:opacity-50"
        onClick={() => onSend()}
        disabled={disabled || !value.trim()}
      >
        Send
      </button>
    </div>
  );
} 