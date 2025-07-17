import React, { useRef, useState, useEffect } from 'react';

const ACCEPTED_TYPES = ['application/pdf', 'text/markdown', 'text/plain'];

export default function ProtocolUploader() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (file) {
      interval = setInterval(async () => {
        setProgress((p) => (p < 100 ? p + 10 : 100));
      }, 150);
    }
    return () => clearInterval(interval);
  }, [file]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    const dropped = e.dataTransfer.files[0];
    if (!dropped) return;
    if (!ACCEPTED_TYPES.includes(dropped.type)) {
      setError('Unsupported file type.');
      return;
    }
    setFile(dropped);
    uploadFile(dropped);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    if (!ACCEPTED_TYPES.includes(selected.type)) {
      setError('Unsupported file type.');
      return;
    }
    setFile(selected);
    uploadFile(selected);
  };

  const uploadFile = async (file: File) => {
    setError('');
    setSuccess('');
    setProgress(0);
    setStatus('Uploading...');
    try {
      // For demo, just fake upload and persist metadata
      const token = localStorage.getItem('token');
      // In a real app, upload to S3 or server, get URL
      const url = URL.createObjectURL(file); // Not persistent, for demo only
      const res = await fetch('/api/uploads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ filename: file.name, url }),
      });
      if (!res.ok) throw new Error('Upload failed');
      setStatus('Upload complete!');
      setSuccess('File uploaded and attributed to your account.');
      setProgress(100);
    } catch (err: any) {
      setError('Upload failed.');
      setStatus('');
    }
  };

  return (
    <section className="w-full max-w-xl mx-auto my-8 p-8 bg-marble rounded-2xl shadow-lg border border-burgundy font-roman">
      <h2 className="text-2xl font-bold text-burgundy mb-4">Upload Protocol File</h2>
      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${dragActive ? 'border-burgundy bg-burgundy/10' : 'border-charcoal bg-marble'}`}
        onDragOver={e => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={e => { e.preventDefault(); setDragActive(false); }}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        tabIndex={0}
        aria-label="Drag and drop or click to upload a protocol file"
      >
        <input
          type="file"
          accept=".pdf,.md,.txt"
          className="hidden"
          ref={inputRef}
          onChange={handleChange}
        />
        <span className="text-burgundy text-lg">Drag & drop a PDF, Markdown, or Text file here, or click to select.</span>
      </div>
      {file && (
        <div className="mt-4">
          <div className="text-charcoal mb-2">{file.name}</div>
          <div className="w-full bg-charcoal/10 rounded-full h-3">
            <div
              className="bg-burgundy h-3 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-sm text-burgundy mt-2">{status}</div>
        </div>
      )}
      {error && <div className="text-red-600 text-center font-semibold mt-2">{error}</div>}
      {success && <div className="text-green-700 text-center font-semibold mt-2">{success}</div>}
    </section>
  );
} 