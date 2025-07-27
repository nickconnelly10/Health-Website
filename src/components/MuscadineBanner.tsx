import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MuscadineBanner() {
  const navigate = useNavigate();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle dark mode class on document
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  // Close settings dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
    };

    if (isSettingsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSettingsOpen]);

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md border-b border-stone-200/50 sticky top-0 z-50 transition-colors">
      <div className="flex flex-col items-center px-6 py-2 max-w-full">
        <div className="flex justify-between items-center w-full mb-1">
          <a href="https://www.muscadine.box" className="font-serif text-xl font-bold text-neutral-900 hover:underline" target="_blank" rel="noopener noreferrer">Muscadine</a>
          <div className="flex items-center gap-4">
            <a
              href="https://www.muscadine.box"
              className="px-4 py-2 rounded-lg bg-stone-200 text-stone-700 hover:bg-stone-300 transition-colors font-medium shadow border border-stone-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Home"
            >
              Home
            </a>
            <div className="relative" ref={settingsRef}>
              <button
                onClick={toggleSettings}
                className="px-4 py-2 rounded-lg bg-stone-200 text-stone-700 hover:bg-stone-300 transition-colors font-medium shadow border border-stone-300 flex items-center gap-2"
                aria-label="Settings"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
              </button>
              
              {isSettingsOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-stone-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-stone-100">
                    <h3 className="text-sm font-semibold text-stone-700">Settings</h3>
                  </div>
                  
                  <div className="px-4 py-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-stone-600">Dark Mode</span>
                      <button
                        onClick={toggleTheme}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          isDarkMode ? 'bg-blue-600' : 'bg-stone-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            isDarkMode ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                  
                  <div className="px-4 py-2 border-t border-stone-100">
                    <a
                      href="https://github.com/nickmuscadine/health-protocols"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Health Protocols Repository
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Tab Navigation */}
        <div className="flex gap-6 w-full justify-center border-b border-stone-300 pb-1">
                      <button
              onClick={() => navigate('/')}
              className="text-base font-medium px-3 py-1 rounded-t-lg hover:bg-stone-100 focus:outline-none transition-colors"
            >
              AI Chat
            </button>
          <button
            onClick={() => navigate('/lifestyle')}
            className="text-base font-medium px-3 py-1 rounded-t-lg hover:bg-stone-100 focus:outline-none transition-colors"
          >
            Lifestyle
          </button>
          <button
            onClick={() => navigate('/nutrition')}
            className="text-base font-medium px-3 py-1 rounded-t-lg hover:bg-stone-100 focus:outline-none transition-colors"
          >
            Nutrition
          </button>
          <button
            onClick={() => navigate('/physical-activity')}
            className="text-base font-medium px-3 py-1 rounded-t-lg hover:bg-stone-100 focus:outline-none transition-colors"
          >
            Physical Activity
          </button>
          <button
            onClick={() => navigate('/resources')}
            className="text-base font-medium px-3 py-1 rounded-t-lg hover:bg-stone-100 focus:outline-none transition-colors"
          >
            Resources
          </button>
        </div>
      </div>
    </nav>
  );
} 