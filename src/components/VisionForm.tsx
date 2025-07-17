import React, { useState } from 'react';

export default function VisionForm() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    setFile(selected);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');
    setError('');
    if (!file) return;
    setStatus('Uploading…');
    try {
      const token = localStorage.getItem('token');
      // In a real app, use FormData and send file
      const res = await fetch('/api/vision', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Vision failed');
      }
      setStatus('Vision analysis complete (stub).');
    } catch (err: any) {
      setError(err.message);
      setStatus('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-marble dark:bg-charcoal rounded-2xl border border-burgundy shadow-md p-6 mb-8 font-roman max-w-xl mx-auto flex flex-col gap-4">
      <h3 className="text-xl font-bold text-burgundy mb-2">Vision Endpoint (Stub)</h3>
      <input
        type="file"
        accept="image/*,application/pdf"
        className="rounded-lg border border-burgundy px-4 py-2 bg-white dark:bg-gray-800 text-burgundy font-serif"
        onChange={handleChange}
      />
      {error && <div className="text-red-600 text-center font-semibold">{error}</div>}
      {status && <div className="text-green-700 text-center font-semibold">{status}</div>}
      <button
        type="submit"
        className="bg-burgundy text-marble font-bold px-6 py-2 rounded-lg shadow-md border border-burgundy hover:bg-marble hover:text-burgundy transition-colors disabled:opacity-50"
        disabled={!file}
      >
        Analyze
      </button>
    </form>
  );
} 