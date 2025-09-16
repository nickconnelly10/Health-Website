import React from 'react';
import { Link } from 'react-router-dom';

export default function MuscadineFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Health Platform</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building technology solutions for health and wellness, leading medical missions, and personal health initiatives that empower individuals and communities.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Navigation</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link to="/healthy-living" className="block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Healthy Living
              </Link>
              <Link to="/resources" className="block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Resources
              </Link>
              <Link to="/health-protocols" className="block text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Health Protocols
              </Link>
            </nav>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Connect</h4>
            <div className="space-y-2">
              <a 
                href="https://www.nicholasconnelly.box/contact/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
              <a 
                href="https://linkedin.com/in/nicholasconnelly" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a 
                href="https://nicholasconnelly.substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Substack
              </a>
            </div>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4 uppercase tracking-wide">Resources</h4>
            <div className="space-y-2">
              <a 
                href="https://www.nicholasconnelly.box" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Nicholas Connelly
              </a>
              <a 
                href="https://muscadine.box" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                DeFi - Muscadine
              </a>
              <a 
                href="https://github.com/nickconnelly10/health.nicholasconnelly.box" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Open Source
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Nicholas Connelly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}