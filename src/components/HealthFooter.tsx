import React from 'react';
import Link from 'next/link';

export default function HealthFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Health Platform</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              My personal journey and resources for optimal health and longevity.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Navigation</h4>
            <nav className="space-y-2">
              <Link href="/" className="block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link href="/nicks-journey" className="block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Nick's Journey
              </Link>
              <Link href="/healthy-living" className="block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Healthy Living
              </Link>
              <Link href="/resources" className="block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Resources
              </Link>
            </nav>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Connect</h4>
            <div className="space-y-2">
              <a 
                href="https://www.nickconnelly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Nicholas Connelly
              </a>
              <a 
                href="https://www.nickconnelly.com/contact/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Legal</h4>
            <nav className="space-y-2">
              <Link href="/terms" className="block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Terms
              </Link>
              <Link href="/privacy" className="block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Privacy
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-400" suppressHydrationWarning>
              © {new Date().getFullYear()} Nicholas Connelly. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}