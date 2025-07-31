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
    <nav className={`w-full backdrop-blur-md border-b sticky top-0 z-50 transition-colors ${
      isDarkMode 
        ? 'bg-gray-900/95 border-gray-700' 
        : 'bg-white/95 border-gray-200'
    }`}>
      <div className="flex flex-col items-center px-6 py-2 max-w-full">
        <div className="flex justify-between items-center w-full mb-1">
          <a 
            href="https://www.muscadine.box" 
            className={`font-serif text-xl font-bold hover:underline transition-colors ${
              isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-900'
            }`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Muscadine
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://www.muscadine.box"
              className={`px-4 py-2 rounded-lg transition-colors font-medium shadow border ${
                isDarkMode 
                  ? 'bg-gray-700 text-gray-200 hover:bg-gray-600 border-gray-600' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-300'
              }`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Home"
            >
              Home
            </a>
            <div className="relative" ref={settingsRef}>
              <button
                onClick={toggleSettings}
                className={`px-4 py-2 rounded-lg transition-colors font-medium shadow border flex items-center gap-2 ${
                  isDarkMode 
                    ? 'bg-gray-700 text-gray-200 hover:bg-gray-600 border-gray-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-300'
                }`}
                aria-label="Settings"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
              </button>
              
              {isSettingsOpen && (
                <div className={`absolute right-0 mt-2 w-64 rounded-lg shadow-lg border py-2 z-50 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-600' 
                    : 'bg-white border-stone-200'
                }`}>
                  <div className={`px-4 py-2 border-b ${
                    isDarkMode ? 'border-gray-600' : 'border-gray-100'
                  }`}>
                    <h3 className={`text-sm font-semibold ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-700'
                    }`}>Settings</h3>
                  </div>
                  
                  <div className="px-4 py-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>Dark Mode</span>
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
                  

                </div>
              )}
            </div>
          </div>
        </div>
        {/* Tab Navigation */}
        <div className={`flex gap-6 w-full justify-center border-b pb-1 ${
          isDarkMode ? 'border-gray-600' : 'border-gray-300'
        }`}>
                      <button
              onClick={() => navigate('/')}
              className={`text-base font-medium px-3 py-1 rounded-t-lg focus:outline-none transition-colors ${
                isDarkMode 
                  ? 'hover:bg-gray-700 text-gray-200' 
                  : 'hover:bg-gray-100'
              }`}
            >
              AI Chat
            </button>
          <button
            onClick={() => navigate('/lifestyle')}
            className={`text-base font-medium px-3 py-1 rounded-t-lg focus:outline-none transition-colors ${
              isDarkMode 
                ? 'hover:bg-gray-700 text-gray-200' 
                : 'hover:bg-gray-100'
            }`}
          >
            Lifestyle
          </button>
          <button
            onClick={() => navigate('/nutrition')}
            className={`text-base font-medium px-3 py-1 rounded-t-lg focus:outline-none transition-colors ${
              isDarkMode 
                ? 'hover:bg-gray-700 text-gray-200' 
                : 'hover:bg-gray-100'
            }`}
          >
            Nutrition
          </button>
          <button
            onClick={() => navigate('/physical-activity')}
            className={`text-base font-medium px-3 py-1 rounded-t-lg focus:outline-none transition-colors ${
              isDarkMode 
                ? 'hover:bg-gray-700 text-gray-200' 
                : 'hover:bg-gray-100'
            }`}
          >
            Physical Activity
          </button>
          <button
            onClick={() => navigate('/resources')}
            className={`text-base font-medium px-3 py-1 rounded-t-lg focus:outline-none transition-colors ${
              isDarkMode 
                ? 'hover:bg-gray-700 text-gray-200' 
                : 'hover:bg-gray-100'
            }`}
          >
            Resources
          </button>
        </div>
      </div>
    </nav>
  );
} 