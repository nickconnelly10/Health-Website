'use client'

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/nicks-journey', label: "Nick's Journey" },
  { href: '/healthy-living', label: 'Healthy Living' },
  { href: '/resources', label: 'Resources' },
];

const extraLinks = [
  { href: 'https://www.nickconnelly.com', label: 'nickconnelly.com', external: true },
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' },
];

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

export default function HealthBanner() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const brandRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsBrandOpen(false);
      }
    };
    const onPointerDown = (event: MouseEvent) => {
      if (brandRef.current && !brandRef.current.contains(event.target as Node)) {
        setIsBrandOpen(false);
      }
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    const onResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <nav ref={navRef} aria-label="Primary" className="fixed top-0 left-0 w-full z-50 p-4 bg-white shadow-sm">
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto gap-4">
        <div ref={brandRef} className="relative shrink-0">
          <button
            type="button"
            aria-label="Health & Wellness menu"
            aria-expanded={isBrandOpen}
            aria-controls="brand-menu"
            aria-haspopup="menu"
            onClick={() => {
              setIsBrandOpen((open) => !open);
              setIsMenuOpen(false);
            }}
            className="inline-flex items-center gap-1.5 text-xl font-medium text-gray-800 hover:text-gray-900 cursor-pointer select-none"
          >
            Health & Wellness
            <svg
              className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${isBrandOpen ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isBrandOpen && (
            <div
              id="brand-menu"
              role="menu"
              className="absolute left-0 top-full mt-3 w-56 rounded-lg border border-gray-200 bg-white py-2 shadow-lg"
            >
              {extraLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsBrandOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    onClick={() => setIsBrandOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          )}
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(pathname, link.href) ? 'nav-link-active' : 'text-gray-600'}`}
              aria-current={isActive(pathname, link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            setIsMenuOpen((open) => !open);
            setIsBrandOpen(false);
          }}
        >
          <svg className="h-6 w-6 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>
      
      {isMenuOpen && (
        <div id="mobile-navigation" className="md:hidden mt-3 border-t border-gray-200 bg-white/95 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm transition-colors duration-200 ${
                  isActive(pathname, link.href)
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-current={isActive(pathname, link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-200 pt-3 space-y-3">
              {extraLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
