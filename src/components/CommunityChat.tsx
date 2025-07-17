import React, { useEffect, useState, useRef } from 'react';

export default function CommunityChat() {
  const [messages, setMessages] = useState<{ user: string; message: string; time: string }[]>([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const fetchMessages = async () => {
    const res = await fetch('/api/communityChat');
    const data = await res.json();
    setMessages(data.messages || []);
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('Not authenticated');
      const res = await fetch('/api/communityChat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ message: input }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to send');
      }
      setInput('');
      fetchMessages();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-marble dark:bg-charcoal rounded-3xl shadow-2xl border-2 border-burgundy p-8 font-roman flex flex-col h-[600px]">
      <h2 className="text-2xl font-bold text-burgundy mb-4">Community Chat</h2>
      <div className="flex-1 overflow-y-auto mb-4 space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className="flex flex-col">
            <span className="font-bold text-burgundy">{msg.user}</span>
            <span className="bg-burgundy/10 rounded px-3 py-2 text-burgundy">{msg.message}</span>
            <span className="text-xs text-stone-500 self-end">{new Date(msg.time).toLocaleTimeString()}</span>
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <form onSubmit={sendMessage} className="flex gap-3 mt-2">
        <input
          type="text"
          className="flex-1 rounded-lg border border-burgundy px-4 py-2 bg-white dark:bg-gray-800 text-burgundy font-serif focus:outline-none focus:ring-2 focus:ring-burgundy"
          placeholder="Type your message…"
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={loading}
          maxLength={300}
          required
        />
        <button
          type="submit"
          className="bg-burgundy text-marble font-bold px-6 py-2 rounded-lg shadow-md border border-burgundy hover:bg-marble hover:text-burgundy transition-colors disabled:opacity-50"
          disabled={loading || !input.trim()}
        >
          Send
        </button>
      </form>
      {error && <div className="text-red-600 text-center font-semibold mt-2">{error}</div>}
    </div>
  );
} 