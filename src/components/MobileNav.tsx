import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function MobileNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const items = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/lifestyle', label: 'Lifestyle', icon: '🧘' },
    { path: '/nutrition', label: 'Nutrition', icon: '🥗' },
    { path: '/physical-activity', label: 'Activity', icon: '💪' },
    { path: '/resources', label: 'Resources', icon: '📚' },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t backdrop-blur bg-white/95 border-stone-200"
      aria-label="Primary"
    >
      <ul className="flex justify-around items-stretch py-2">
        {items.map(({ path, label, icon }) => {
          const isActive = location.pathname === path;
          return (
            <li key={path} className="flex-1">
              <button
                onClick={() => navigate(path)}
                className={`mx-auto flex flex-col items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  isActive ? 'text-stone-900 bg-stone-100' : 'text-stone-700'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="text-base" aria-hidden>
                  {icon}
                </span>
                <span className="leading-none">{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}


