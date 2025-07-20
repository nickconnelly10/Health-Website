import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MuscadineBanner() {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md border-b border-stone-200/50 sticky top-0 z-50 transition-colors">
      <div className="flex flex-col items-center px-6 py-4 max-w-full">
        <div className="flex justify-between items-center w-full mb-2">
          <a href="https://www.muscadine.box" className="font-serif text-2xl font-bold text-neutral-900 hover:underline" target="_blank" rel="noopener noreferrer">Muscadine</a>
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
          </div>
        </div>
        {/* Tab Navigation */}
        <div className="flex gap-6 w-full justify-center border-b border-stone-300 pb-2">
          <button
            onClick={() => navigate('/lifestyle')}
            className="text-lg font-medium px-4 py-2 rounded-t-lg hover:bg-stone-100 focus:outline-none transition-colors"
          >
            Lifestyle
          </button>
          <button
            onClick={() => navigate('/nutrition')}
            className="text-lg font-medium px-4 py-2 rounded-t-lg hover:bg-stone-100 focus:outline-none transition-colors"
          >
            Nutrition
          </button>
          <button
            onClick={() => navigate('/physical-activity')}
            className="text-lg font-medium px-4 py-2 rounded-t-lg hover:bg-stone-100 focus:outline-none transition-colors"
          >
            Physical Activity
          </button>
          <button
            onClick={() => navigate('/chat')}
            className="text-lg font-medium px-4 py-2 rounded-t-lg hover:bg-stone-100 focus:outline-none transition-colors"
          >
            AI Chat
          </button>
        </div>
      </div>
    </nav>
  );
} 