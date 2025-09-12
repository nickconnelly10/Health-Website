import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MuscadineBanner() {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50">
      <div className="flex flex-col items-center px-6 py-2 max-w-full">
        <div className="flex justify-between items-center w-full mb-1">
          <a
            href="https://www.nicholasconnelly.box"
            className="font-serif text-xl font-bold hover:underline text-stone-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nicholas Connelly
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://www.nicholasconnelly.box"
              className="px-4 py-2 rounded-lg font-medium shadow border bg-stone-100 text-stone-700 hover:bg-stone-200 border-stone-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Home"
            >
              Home
            </a>
          </div>
        </div>
        {/* Tab Navigation (hidden on mobile, shown on md+) */}
        <div className="hidden md:flex gap-6 w-full justify-center border-b border-stone-200 pb-1">
          <button
            onClick={() => navigate('/')}
            className="text-base font-medium px-3 py-1 rounded-t-lg hover:bg-stone-100 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => navigate('/lifestyle')}
            className="text-base font-medium px-3 py-1 rounded-t-lg hover:bg-stone-100 transition-colors"
          >
            Lifestyle
          </button>
          <button
            onClick={() => navigate('/nutrition')}
            className="text-base font-medium px-3 py-1 rounded-t-lg hover:bg-stone-100 transition-colors"
          >
            Nutrition
          </button>
          <button
            onClick={() => navigate('/physical-activity')}
            className="text-base font-medium px-3 py-1 rounded-t-lg hover:bg-stone-100 transition-colors"
          >
            Physical Activity
          </button>
          <button
            onClick={() => navigate('/resources')}
            className="text-base font-medium px-3 py-1 rounded-t-lg hover:bg-stone-100 transition-colors"
          >
            Resources
          </button>
          <button
            onClick={() => navigate('/health-protocols')}
            className="text-base font-medium px-3 py-1 rounded-t-lg hover:bg-stone-100 transition-colors"
          >
            Health Protocols
          </button>
        </div>
      </div>
    </nav>
  );
}