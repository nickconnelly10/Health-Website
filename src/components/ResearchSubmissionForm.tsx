import React, { useState } from 'react';

export default function ResearchSubmissionForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ title, content }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Submission failed');
      }
      setSuccess('Research submitted!');
      setTitle('');
      setContent('');
      if (onSubmitted) onSubmitted();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-marble dark:bg-charcoal rounded-2xl border border-burgundy shadow-md p-6 mb-8 font-roman max-w-xl mx-auto flex flex-col gap-4">
      <h3 className="text-xl font-bold text-burgundy mb-2">Submit New Research</h3>
      <input
        type="text"
        placeholder="Title"
        className="rounded-lg border border-burgundy px-4 py-2 bg-white dark:bg-gray-800 text-burgundy font-serif focus:outline-none focus:ring-2 focus:ring-burgundy"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        className="rounded-lg border border-burgundy px-4 py-2 bg-white dark:bg-gray-800 text-burgundy font-serif focus:outline-none focus:ring-2 focus:ring-burgundy min-h-[100px]"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />
      {error && <div className="text-red-600 text-center font-semibold">{error}</div>}
      {success && <div className="text-green-700 text-center font-semibold">{success}</div>}
      <button
        type="submit"
        className="bg-burgundy text-marble font-bold px-6 py-2 rounded-lg shadow-md border border-burgundy hover:bg-marble hover:text-burgundy transition-colors disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Submitting…' : 'Submit'}
      </button>
    </form>
  );
} 