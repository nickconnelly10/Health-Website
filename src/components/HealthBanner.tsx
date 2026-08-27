'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/nicks-journey', label: "Nick's Journey" },
  { href: '/healthy-living', label: 'Healthy Living' },
  { href: '/resources', label: 'Resources' },
];

export default function HealthBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-white shadow-sm">
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-xl font-medium text-gray-800">
          <Link href="/">
            Health & Wellness
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-gray-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100"
          onClick={() => setIsOpen((v) => !v)}
        >
          <svg className="h-6 w-6 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>
      
      {isOpen && (
        <div id="mobile-navigation" className="md:hidden mt-3 border-t border-gray-200 bg-white/95 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
