import React from 'react';

export default function ProfilePage() {
  const user = {
    username: 'Demo User',
    email: 'demo@example.com',
    avatar: null,
    createdAt: new Date().toISOString(),
    badges: '[]',
    healthScore: 75
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-marble rounded-3xl shadow-2xl border-2 border-burgundy p-10 font-roman">
      <div className="flex items-center gap-6 mb-8">
        <img
          src={user.avatar || '/favicon.svg'}
          alt="Avatar"
          className="w-24 h-24 rounded-full border-4 border-burgundy bg-white object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold text-burgundy mb-1">{user.username}</h2>
          <div className="text-stone-700">{user.email}</div>
          <div className="text-stone-500 text-sm mt-1">Joined: {new Date(user.createdAt).toLocaleDateString()}</div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-burgundy mb-2">Badges</h3>
        <div className="flex gap-3 flex-wrap">
          {user.badges ? JSON.parse(user.badges).map((badge: string, i: number) => (
            <span key={i} className="px-3 py-1 rounded-full bg-burgundy text-marble text-sm font-semibold shadow">{badge}</span>
          )) : <span className="text-stone-400">No badges yet</span>}
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-burgundy mb-2">Health Score</h3>
        <div className="w-full bg-charcoal/10 rounded-lg h-8 flex items-center">
          <div
            className="bg-burgundy h-8 rounded-lg flex items-center justify-center text-marble font-bold text-lg px-4 transition-all"
            style={{ width: `${Math.min(user.healthScore, 100)}%` }}
          >
            {user.healthScore}
          </div>
        </div>
        <div className="text-stone-500 text-xs mt-2">Summary of recent AI interactions and habits.</div>
      </div>

      <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6">
        <h3 className="text-xl font-bold text-burgundy mb-4">Research Repository</h3>
        <p className="text-stone-700 mb-4">
          Contribute to our research collection by submitting papers or requesting new additions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://github.com/nickconnelly10/muscadine.box/tree/main/src/protocols"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-burgundy text-marble font-bold px-6 py-3 rounded-lg shadow-md border border-burgundy hover:bg-marble hover:text-burgundy transition-colors text-center"
          >
            View Repository
          </a>
          <a
            href="https://github.com/nickconnelly10/muscadine.box/issues/new?template=add-research-paper.md"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-stone-200 text-stone-700 font-bold px-6 py-3 rounded-lg shadow-md border border-stone-300 hover:bg-stone-300 transition-colors text-center"
          >
            Submit Paper Request
          </a>
        </div>
      </div>
    </div>
  );
} 