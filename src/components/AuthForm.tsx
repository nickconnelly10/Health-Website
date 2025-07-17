import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export function LoginForm() {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(emailOrUsername, password);
      navigate('/chat');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-16 bg-marble rounded-2xl shadow-lg border border-burgundy p-8 font-roman flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-burgundy mb-2">Login</h2>
      <input
        type="text"
        className="rounded-lg border border-burgundy px-4 py-2 bg-white text-burgundy font-serif"
        placeholder="Email or Username"
        value={emailOrUsername}
        onChange={e => setEmailOrUsername(e.target.value)}
        required
      />
      <input
        type="password"
        className="rounded-lg border border-burgundy px-4 py-2 bg-white text-burgundy font-serif"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      {error && <div className="text-red-600 text-center font-semibold">{error}</div>}
      <button
        type="submit"
        className="bg-burgundy text-marble font-bold px-6 py-2 rounded-lg shadow-md border border-burgundy hover:bg-marble hover:text-burgundy transition-colors disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Logging in…' : 'Login'}
      </button>
      <div className="text-center mt-2">
        <a href="/register" className="text-burgundy underline">Need an account? Register</a>
      </div>
    </form>
  );
}

export function RegisterForm() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await register(email, username, password);
      navigate('/chat');
    } catch (err: any) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-16 bg-marble rounded-2xl shadow-lg border border-burgundy p-8 font-roman flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-burgundy mb-2">Register</h2>
      <input
        type="email"
        className="rounded-lg border border-burgundy px-4 py-2 bg-white text-burgundy font-serif"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        className="rounded-lg border border-burgundy px-4 py-2 bg-white text-burgundy font-serif"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        className="rounded-lg border border-burgundy px-4 py-2 bg-white text-burgundy font-serif"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      {error && <div className="text-red-600 text-center font-semibold">{error}</div>}
      <button
        type="submit"
        className="bg-burgundy text-marble font-bold px-6 py-2 rounded-lg shadow-md border border-burgundy hover:bg-marble hover:text-burgundy transition-colors disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Registering…' : 'Register'}
      </button>
      <div className="text-center mt-2">
        <a href="/login" className="text-burgundy underline">Already have an account? Login</a>
      </div>
    </form>
  );
} 