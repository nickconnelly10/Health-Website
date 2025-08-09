import React from 'react';
import { Link } from 'react-router-dom';

export default function MuscadineFooter() {
  return (
    <footer className="w-full py-16 mt-12 bg-stone-800 text-stone-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-serif">Muscadine</h4>
            <p className="text-sm font-sans text-stone-400">Health and Financial self-sovereignty.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-serif">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://defi.muscadine.box" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Launch DeFi</a></li>
              <li><Link to="/" className="text-stone-400 hover:text-white transition-colors">Launch Health</Link></li>
              <li><a href="https://nicholasconnelly.substack.com/" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Articles</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-serif">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/nickconnelly10/muscadine.box/blob/main/privacy.html" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><a href="https://github.com/nickconnelly10/muscadine.box/blob/main/terms.html" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
              <li><a href="https://github.com/nickconnelly10/health.muscadine.box" className="text-stone-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Open Source</a></li>
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
          <p className="text-sm mb-4">© 2024 Muscadine. All rights reserved.</p>
          <p className="text-xs text-stone-400">Built on BITCOIN • Secure • Transparent • Professional</p>
        </div>
      </div>
    </footer>
  );
}