import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function MuscadineBanner() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300 ${
      isHomePage 
        ? (isScrolled ? 'bg-white shadow-sm' : 'bg-transparent')
        : 'bg-white shadow-sm'
    }`}>
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className={`text-xl font-medium transition-colors duration-300 ${
          isHomePage 
            ? (isScrolled ? 'text-gray-800' : 'text-white')
            : 'text-gray-800'
        }`}>
          <a href="https://health.nicholasconnelly.box" target="_blank" rel="noopener noreferrer">
            Health
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => navigate('/')}
            className={`nav-link ${
              isHomePage 
                ? (isScrolled ? 'text-gray-600' : 'text-white hover:text-gray-200')
                : 'text-gray-600'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => navigate('/lifestyle')}
            className={`nav-link ${
              isHomePage 
                ? (isScrolled ? 'text-gray-600' : 'text-white hover:text-gray-200')
                : 'text-gray-600'
            }`}
          >
            Lifestyle
          </button>
          <button
            onClick={() => navigate('/nutrition')}
            className={`nav-link ${
              isHomePage 
                ? (isScrolled ? 'text-gray-600' : 'text-white hover:text-gray-200')
                : 'text-gray-600'
            }`}
          >
            Nutrition
          </button>
          <button
            onClick={() => navigate('/physical-activity')}
            className={`nav-link ${
              isHomePage 
                ? (isScrolled ? 'text-gray-600' : 'text-white hover:text-gray-200')
                : 'text-gray-600'
            }`}
          >
            Physical Activity
          </button>
          <button
            onClick={() => navigate('/resources')}
            className={`nav-link ${
              isHomePage 
                ? (isScrolled ? 'text-gray-600' : 'text-white hover:text-gray-200')
                : 'text-gray-600'
            }`}
          >
            Resources
          </button>
          <button
            onClick={() => navigate('/health-protocols')}
            className={`nav-link ${
              isHomePage 
                ? (isScrolled ? 'text-gray-600' : 'text-white hover:text-gray-200')
                : 'text-gray-600'
            }`}
          >
            Health Protocols
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className={`md:hidden inline-flex items-center justify-center rounded-lg p-2 transition-all duration-200 ${
            isHomePage 
              ? (isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10')
              : 'text-gray-700 hover:bg-gray-100'
          }`}
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
              onClick={() => { navigate('/'); setIsOpen(false); }}
              className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => { navigate('/lifestyle'); setIsOpen(false); }}
              className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Lifestyle
            </button>
            <button
              onClick={() => { navigate('/nutrition'); setIsOpen(false); }}
              className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Nutrition
            </button>
            <button
              onClick={() => { navigate('/physical-activity'); setIsOpen(false); }}
              className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Physical Activity
            </button>
            <button
              onClick={() => { navigate('/resources'); setIsOpen(false); }}
              className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Resources
            </button>
            <button
              onClick={() => { navigate('/health-protocols'); setIsOpen(false); }}
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