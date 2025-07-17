import React from 'react';

export default function ChatWindow() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] min-w-[320px] max-w-3xl mx-auto px-6 py-12 bg-marble font-roman">
      <div className="mb-8 text-center text-burgundy text-2xl font-serif">
        <span>Welcome to your own Health AI</span>
      </div>
      <div className="w-full max-w-2xl bg-marble rounded-lg shadow-md overflow-hidden border border-burgundy">
        <iframe
          src="https://aurracloud.com/embed?agentId=1a1caab0-a136-40fe-b323-d56d4f2683f2"
          width="100%"
          height="600px"
          frameBorder="0"
          className="w-full rounded-lg"
          title="Aurracloud Health AI Agent"
          allow="clipboard-write; clipboard-read"
        />
      </div>
    </div>
  );
} 