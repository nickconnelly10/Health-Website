import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NotificationsWidget from './NotificationsWidget';

function Widget({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-marble dark:bg-charcoal rounded-2xl border border-burgundy shadow-md p-6 flex-1 min-w-[250px]">
      <h3 className="text-lg font-bold text-burgundy mb-3 font-roman">{title}</h3>
      {children}
    </section>
  );
}

export default function Dashboard() {
  const [contributors, setContributors] = useState<any[]>([]);
  const [research, setResearch] = useState<any[]>([]);
  const [uploads, setUploads] = useState<any[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    setLoading(true);
    Promise.all([
      fetch('/api/research', { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json()),
      fetch('/api/uploads', { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json()),
      fetch('/api/notifications', { headers: { Authorization: `Bearer ${token}` } }).then(r => r.json()),
    ]).then(([researchRes, uploadsRes, notifRes]) => {
      setResearch(researchRes.research || []);
      setUploads(uploadsRes.uploads || []);
      setNotifications(notifRes.notifications || []);
      // Top contributors: aggregate from uploads and research authors
      const userScores: Record<string, number> = {};
      (uploadsRes.uploads || []).forEach((u: any) => {
        const user = u.user?.username || 'unknown';
        userScores[user] = (userScores[user] || 0) + 1;
      });
      (researchRes.research || []).forEach((r: any) => {
        const user = r.author?.username || 'unknown';
        userScores[user] = (userScores[user] || 0) + 2;
      });
      const sorted = Object.entries(userScores).sort((a, b) => b[1] - a[1]);
      setContributors(sorted.map(([username, score]) => ({ username, score })));
      setLoading(false);
    }).catch(e => {
      setError('Failed to load dashboard data');
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-center py-12 text-burgundy font-roman">Loading dashboard…</div>;
  if (error) return <div className="text-center py-12 text-burgundy font-roman">{error}</div>;

  return (
    <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 font-roman">
      <div className="flex flex-col gap-8">
        <Widget title="Top Contributors">
          <ol className="list-decimal pl-5 space-y-1">
            {contributors.length === 0 && <li className="text-stone-400">No contributors yet</li>}
            {contributors.map((c, i) => (
              <li key={i} className="text-burgundy font-semibold">{c.username} <span className="text-stone-500 font-normal">({c.score})</span></li>
            ))}
          </ol>
        </Widget>
        <Widget title="Recent Research">
          <ul className="space-y-1">
            {research.length === 0 && <li className="text-stone-400">No research yet</li>}
            {research.map((r, i) => (
              <li key={i} className="text-burgundy">{r.title} <span className="text-stone-500">by {r.author?.username || 'unknown'}</span></li>
            ))}
          </ul>
        </Widget>
        <Widget title="Recent Uploads">
          <ul className="space-y-1">
            {uploads.length === 0 && <li className="text-stone-400">No uploads yet</li>}
            {uploads.map((u, i) => (
              <li key={i} className="text-burgundy">
                <a href={u.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-burgundy font-semibold">{u.filename}</a>
                <span className="text-stone-500 text-xs ml-2">by {u.user?.username || 'unknown'} on {new Date(u.createdAt).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
        </Widget>
      </div>
      <div className="flex flex-col gap-8">
        <Widget title="Community Chat Preview">
          <div className="space-y-2">
            {/* For now, just link to /community */}
            <div className="mt-2 text-right">
              <Link to="/community" className="text-burgundy underline">Open Community Chat</Link>
            </div>
          </div>
        </Widget>
        <Widget title="Notifications">
          <NotificationsWidget />
        </Widget>
      </div>
    </div>
  );
} 