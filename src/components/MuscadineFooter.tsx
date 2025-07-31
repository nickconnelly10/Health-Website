import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MuscadineFooter() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for dark mode on mount and listen for changes
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    // Listen for dark mode changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  return (
    <footer className={`w-full py-16 mt-12 transition-colors ${
      isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-gray-300'
    }`}>
      <div className="px-4 max-w-full">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-serif">Muscadine</h4>
            <p className={`text-sm font-sans transition-colors ${
              isDarkMode ? 'text-gray-400' : 'text-gray-400'
            }`}>Health and Financial self-sovereignty.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-serif">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://defi.muscadine.box" className={`transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-white'
              }`} target="_blank" rel="noopener noreferrer">Launch DeFi</a></li>
              <li><Link to="/" className={`transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-white'
              }`}>Launch Health</Link></li>
              <li><a href="https://nicholasconnelly.substack.com/" className={`transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-white'
              }`} target="_blank" rel="noopener noreferrer">Articles</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-serif">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/nickconnelly10/muscadine.box/blob/main/privacy.html" className={`transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-white'
              }`} target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><a href="https://github.com/nickconnelly10/muscadine.box/blob/main/terms.html" className={`transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-white'
              }`} target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
              <li><a href="https://github.com/nickconnelly10/health.muscadine.box" className={`transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-white'
              }`} target="_blank" rel="noopener noreferrer">Open Source</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-serif">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://twitter.com/nicklutk" className={`transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-white'
              }`} target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://nicholasconnelly.substack.com/" className={`transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-white'
              }`} target="_blank" rel="noopener noreferrer">Substack</a></li>
              <li><a href="mailto:nickconnelly10@gmail.com?subject=Muscadine%20Inquiry" className={`transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-white'
              }`}>Contact</a></li>
              <li><a href="https://www.strava.com/clubs/1284036" className={`transition-colors ${
                isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-white'
              }`} target="_blank" rel="noopener noreferrer">Strava Club</a></li>
            </ul>
          </div>
        </div>
        <div className={`border-t pt-8 text-center transition-colors ${
          isDarkMode ? 'border-gray-700' : 'border-gray-700'
        }`}>
          <p className={`text-sm mb-2 transition-colors ${
            isDarkMode ? 'text-gray-400' : 'text-gray-400'
          }`}>© 2024 Muscadine. All rights reserved.</p>
          <p className={`text-xs transition-colors ${
            isDarkMode ? 'text-gray-400' : 'text-gray-400'
          }`}>Built on BITCOIN • Secure • Transparent • Professional</p>
        </div>
      </div>
    </footer>
  );
} 