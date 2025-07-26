import React from 'react';
import { Link } from 'react-router-dom';

export default function MuscadineFooter() {
  return (
    <footer className="w-full bg-stone-800 text-stone-300 py-16 mt-12 transition-colors">
      <div className="px-4 max-w-full">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-serif">Muscadine</h4>
            <p className="text-sm text-stone-400 font-sans">Health and Financial self-sovereignty.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-serif">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://defi.muscadine.box" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Launch DeFi</a></li>
              <li><Link to="/chat" className="text-stone-400 hover:text-white transition-colors">Launch Health</Link></li>
              <li><a href="https://nicholasconnelly.substack.com/" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Articles</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-serif">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy.html" className="text-stone-400 hover:text-white transition-colors" target="_blank">Privacy Policy</a></li>
              <li><a href="/terms.html" className="text-stone-400 hover:text-white transition-colors" target="_blank">Terms of Service</a></li>
              <li><a href="https://github.com/nickconnelly10/muscadine.box" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Open Source</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-serif">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://twitter.com/nicklutk" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://nicholasconnelly.substack.com/" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Substack</a></li>
              <li><a href="mailto:nickconnelly10@gmail.com?subject=Muscadine%20Inquiry" className="text-stone-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="https://www.strava.com/clubs/1284036" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Strava Club</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-700 pt-8 text-center">
          <p className="text-sm text-stone-400 mb-2">© 2024 Muscadine. All rights reserved.</p>
          <p className="text-xs text-stone-400">Built on BITCOIN • Secure • Transparent • Professional</p>
        </div>
      </div>
    </footer>
  );
} 