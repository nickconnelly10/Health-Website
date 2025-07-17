import React from 'react';

export default function ChatWindow() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] min-w-[320px] max-w-3xl mx-auto px-6 py-12 bg-marble font-roman">
      <div className="mb-8 text-center text-burgundy text-2xl font-serif">
        <span>Chat (In Development)</span>
      </div>
      <div className="w-full max-w-2xl bg-marble rounded-lg shadow-md overflow-hidden border border-burgundy flex flex-col items-center justify-center min-h-[400px]">
        <p className="text-lg text-burgundy font-semibold p-8 text-center">
          The chat feature is currently in development.<br />AI responses are temporarily disabled.<br />Check back soon for updates!
        </p>
      </div>
    </div>
  );
} 