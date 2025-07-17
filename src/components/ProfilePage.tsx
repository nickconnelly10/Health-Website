import React, { useEffect, useState } from 'react';
import ResearchSubmissionForm from './ResearchSubmissionForm';

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [uploads, setUploads] = useState<any[]>([]);
  const [research, setResearch] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Not logged in');
      setLoading(false);
      return;
    }
    fetch('/api/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        if (data.user) setUser(data.user);
        else setError(data.error || 'Failed to load profile');
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load profile');
        setLoading(false);
      });
    // Fetch uploads for this user
    fetch('/api/uploads', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.json())
      .then(data => {
        if (data.uploads) setUploads(data.uploads.filter((u: any) => u.user?.id === user?.id));
      });
    // Fetch research for this user
    fetch('/api/research', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.json())
      .then(data => {
        if (data.research) setResearch(data.research.filter((r: any) => r.author?.id === user?.id));
      });
  }, [user?.id]);

  if (loading) return <div className="text-center py-12 text-burgundy font-roman">Loading profile…</div>;
  if (error) return <div className="text-center py-12 text-burgundy font-roman">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-marble dark:bg-charcoal rounded-3xl shadow-2xl border-2 border-burgundy p-10 font-roman">
      <div className="flex items-center gap-6 mb-8">
        <img
          src={user.avatar || '/favicon.svg'}
          alt="Avatar"
          className="w-24 h-24 rounded-full border-4 border-burgundy bg-white object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold text-burgundy mb-1">{user.username}</h2>
          <div className="text-stone-700 dark:text-stone-200">{user.email}</div>
          <div className="text-stone-500 text-sm mt-1">Joined: {new Date(user.createdAt).toLocaleDateString()}</div>
        </div>
      </div>
      <ResearchSubmissionForm onSubmitted={() => window.location.reload()} />
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
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-burgundy mb-2">Recent Uploads</h3>
        <ul className="space-y-1">
          {uploads.length === 0 && <li className="text-stone-400">No uploads yet</li>}
          {uploads.map((u, i) => (
            <li key={i} className="text-burgundy">
              <a href={u.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-burgundy font-semibold">{u.filename}</a>
              <span className="text-stone-500 text-xs ml-2">{new Date(u.createdAt).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-burgundy mb-2">Your Research Submissions</h3>
        <ul className="space-y-1">
          {research.length === 0 && <li className="text-stone-400">No research yet</li>}
          {research.map((r, i) => (
            <li key={i} className="text-burgundy">{r.title} <span className="text-stone-500 text-xs">{new Date(r.createdAt).toLocaleDateString()}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
} 