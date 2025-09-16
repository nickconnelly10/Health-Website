import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HealthBanner() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-white shadow-sm">
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-xl font-medium text-gray-800">
          <a href="https://nicholasconnelly.box" target="_blank" rel="noopener noreferrer">
            Health
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => void navigate('/')}
            className="nav-link text-gray-600"
          >
            Home
          </button>
          <button
            onClick={() => void navigate('/nicks-journey')}
            className="nav-link text-gray-600"
          >
            Nick's Journey
          </button>
          <button
            onClick={() => void navigate('/healthy-living')}
            className="nav-link text-gray-600"
          >
            Healthy Living
          </button>
          <button
            onClick={() => void navigate('/resources')}
            className="nav-link text-gray-600"
          >
            Resources
          </button>
          <button
            onClick={() => void navigate('/health-protocols')}
            className="nav-link text-gray-600"
          >
            Health Protocols
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100"
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg className="h-6 w-6 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-3 border-t border-gray-200 bg-white/95 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-3">
            <button
              onClick={() => { void navigate('/'); setIsOpen(false); }}
              className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => { void navigate('/nicks-journey'); setIsOpen(false); }}
              className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Nick's Journey
            </button>
            <button
              onClick={() => { void navigate('/healthy-living'); setIsOpen(false); }}
              className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Healthy Living
            </button>
            <button
              onClick={() => { void navigate('/resources'); setIsOpen(false); }}
              className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Resources
            </button>
            <button
              onClick={() => { void navigate('/health-protocols'); setIsOpen(false); }}
              className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Health Protocols
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}