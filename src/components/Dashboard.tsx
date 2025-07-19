import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Widget({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-marble rounded-2xl border border-burgundy shadow-md p-6 flex-1 min-w-[250px]">
      <h3 className="text-lg font-bold text-burgundy mb-3 font-roman">{title}</h3>
      {children}
    </section>
  );
}

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    fetch('/api/auth/me', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.json())
      .then(data => {
        if (data.user) setUser(data.user);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-8 text-burgundy font-roman">Loading dashboard...</div>;

  return (
    <div className="max-w-6xl mx-auto mt-12 px-6">
      <h1 className="text-3xl font-bold text-burgundy mb-8 font-roman">Dashboard</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Widget title="Quick Actions">
          <div className="space-y-3">
            <Link to="/chat" className="block text-burgundy hover:underline font-medium">Start Chat</Link>
            <Link to="/lifestyle" className="block text-burgundy hover:underline font-medium">View Lifestyle Tips</Link>
            <Link to="/nutrition" className="block text-burgundy hover:underline font-medium">Nutrition Guide</Link>
            <Link to="/physical-activity" className="block text-burgundy hover:underline font-medium">Exercise Plans</Link>
          </div>
        </Widget>

        <Widget title="Health Score">
          <div className="text-center">
            <div className="text-3xl font-bold text-burgundy mb-2">{user?.healthScore || 0}</div>
            <div className="text-sm text-stone-600">Based on your recent activity</div>
          </div>
        </Widget>

        <Widget title="Recent Activity">
          <div className="text-sm text-stone-600">
            {user ? 'Welcome back!' : 'Sign in to track your progress'}
          </div>
        </Widget>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Widget title="Resources">
          <div className="space-y-2 text-sm">
            <a href="/privacy.html" className="block text-burgundy hover:underline">Privacy Policy</a>
            <a href="/terms.html" className="block text-burgundy hover:underline">Terms of Service</a>
            <a href="https://github.com/nickconnelly10/muscadine.box" className="block text-burgundy hover:underline" target="_blank" rel="noopener noreferrer">Source Code</a>
          </div>
        </Widget>
        <Widget title="Research Repository">
          <div className="space-y-2 text-sm">
            <a href="https://github.com/nickconnelly10/muscadine.box/tree/main/src/protocols" className="block text-burgundy hover:underline" target="_blank" rel="noopener noreferrer">View Research Papers</a>
            <a href="https://github.com/nickconnelly10/muscadine.box/issues/new?template=add-research-paper.md" className="block text-burgundy hover:underline" target="_blank" rel="noopener noreferrer">Submit Paper Request</a>
          </div>
        </Widget>
      </div>
    </div>
  );
} 