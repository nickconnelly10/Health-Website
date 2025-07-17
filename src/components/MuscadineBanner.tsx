import React from 'react';
import { useNavigate } from 'react-router-dom';

interface MuscadineBannerProps {
  onOpenSettings?: () => void;
}

export default function MuscadineBanner({ onOpenSettings }: MuscadineBannerProps) {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLoginClick = () => {
    if (isLoggedIn) {
      // If logged in, go to profile
      navigate('/profile');
    } else {
      // If not logged in, go to login
      navigate('/login');
    }
  };

  const handleSettingsClick = () => {
    if (onOpenSettings) {
      onOpenSettings();
    } else {
      // Default behavior: navigate to settings page
      navigate('/settings');
    }
  };

  const handleHomeClick = () => {
    // Navigate to chat page (main functionality)
    navigate('/chat');
  };

  return (
    <nav className="w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-b border-stone-200/50 dark:border-stone-700 sticky top-0 z-50 transition-colors">
      <div className="flex flex-col items-center px-6 py-4 max-w-full">
        <div className="flex justify-between items-center w-full mb-2">
          <a href="https://www.muscadine.box" className="font-serif text-2xl font-bold text-neutral-900 dark:text-gold-400 hover:underline" target="_blank" rel="noopener noreferrer">Muscadine</a>
          <div className="flex items-center gap-4">
            <button
              onClick={handleLoginClick}
              className="px-4 py-2 rounded-lg bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-gold-400 hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors font-medium shadow border border-stone-300 dark:border-stone-700"
              aria-label={isLoggedIn ? "Go to profile" : "Login"}
            >
              {isLoggedIn ? 'Profile' : 'Login'}
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-gold-400 hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors font-medium shadow border border-stone-300 dark:border-stone-700"
              onClick={handleSettingsClick}
              aria-label="Open settings"
            >
              Settings
            </button>
          </div>
        </div>
        {/* Tab Navigation */}
        <div className="flex gap-6 w-full justify-center border-b border-stone-300 dark:border-stone-700 pb-2">
          <button
            onClick={() => navigate('/nutrition')}
            className="text-lg font-medium px-4 py-2 rounded-t-lg hover:bg-stone-100 dark:hover:bg-stone-900 focus:outline-none transition-colors"
          >
            Nutrition
          </button>
          <button
            onClick={() => navigate('/physical-activity')}
            className="text-lg font-medium px-4 py-2 rounded-t-lg hover:bg-stone-100 dark:hover:bg-stone-900 focus:outline-none transition-colors"
          >
            Physical Activity
          </button>
          <button
            onClick={() => navigate('/chat')}
            className="text-lg font-medium px-4 py-2 rounded-t-lg hover:bg-stone-100 dark:hover:bg-stone-900 focus:outline-none transition-colors"
          >
            AI Chat
          </button>
        </div>
      </div>
    </nav>
  );
} 