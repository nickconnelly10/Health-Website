import * as React from 'react';
import { useEffect, useState } from 'react';

export default function Sidebar() {
  const [chats, setChats] = useState<any[]>([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    fetch('/api/userChat', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.json())
      .then(data => {
        if (data.chats) setChats(data.chats.slice(0, 10).reverse());
      });
  }, []);
  return (
    <aside className="w-64 h-full bg-gradient-to-b from-white to-stone-200 border-r border-stone-300 flex flex-col items-center py-8 shadow-lg">
      <div className="mb-10 flex flex-col items-center">
        {/* Removed grape emoji for a cleaner look */}
        <h1 className="mt-4 text-2xl font-serif font-bold text-burgundy-800 tracking-wide">Health AI</h1>
      </div>
      <nav className="flex flex-col gap-4 w-full px-6">
        <a href="#" className="text-lg font-medium text-burgundy-700 hover:text-yellow-700 transition-colors">Chat</a>
        <a href="#" className="text-lg font-medium text-burgundy-700 hover:text-yellow-700 transition-colors">Settings</a>
      </nav>
      <div className="mt-10 w-full px-6">
        <h2 className="text-burgundy font-bold mb-2 text-lg">Your Chat History</h2>
        <ul className="space-y-2 max-h-48 overflow-y-auto">
          {chats.length === 0 && <li className="text-stone-400">No chat history</li>}
          {chats.map((c, i) => (
            <li key={i} className="text-burgundy text-sm bg-marble rounded px-2 py-1 shadow-sm">{c.message}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
} 