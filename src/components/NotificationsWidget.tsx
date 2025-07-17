import React, { useEffect, useState } from 'react';

export default function NotificationsWidget() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchNotifications = () => {
    const token = localStorage.getItem('token');
    fetch('/api/notifications', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.json())
      .then(data => {
        setNotifications(data.notifications || []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load notifications');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const markAsRead = async (id: string) => {
    // For demo, just remove from list
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
    // In real app, PATCH to backend
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  if (loading) return <div className="text-center py-4 text-burgundy font-roman">Loading notifications…</div>;
  if (error) return <div className="text-center py-4 text-burgundy font-roman">{error}</div>;

  return (
    <div className="bg-marble dark:bg-charcoal rounded-2xl border border-burgundy shadow-md p-6 font-roman">
      <h3 className="text-lg font-bold text-burgundy mb-3">Notifications {unreadCount > 0 && <span className="ml-2 bg-burgundy text-marble px-2 py-1 rounded-full text-xs">{unreadCount} unread</span>}</h3>
      <ul className="space-y-2">
        {notifications.length === 0 && <li className="text-stone-400">No notifications</li>}
        {notifications.map((n, i) => (
          <li key={n.id} className={`text-burgundy flex items-center gap-2 ${n.read ? 'opacity-60' : ''}`}>
            <span>{n.text}</span>
            <span className="text-stone-500 text-xs">{new Date(n.time).toLocaleString()}</span>
            {!n.read && <button onClick={() => markAsRead(n.id)} className="ml-2 text-xs underline">Mark as read</button>}
          </li>
        ))}
      </ul>
    </div>
  );
} 