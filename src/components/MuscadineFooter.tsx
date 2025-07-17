import React from 'react';

export default function MuscadineFooter() {
  return (
    <footer className="w-full bg-stone-800 dark:bg-gray-900 text-stone-300 dark:text-gold-200 py-16 mt-12 transition-colors">
      <div className="px-4 max-w-full">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold text-white dark:text-gold-400 mb-4 font-serif">Muscadine</h4>
            <p className="text-sm text-stone-400 dark:text-gold-200 font-sans">Health and Financial self-sovereignty.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white dark:text-gold-400 mb-4 font-serif">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://defi.muscadine.box" className="text-stone-400 dark:text-gold-200 hover:text-white dark:hover:text-gold-400 transition-colors" target="_blank" rel="noopener noreferrer">Launch DeFi</a></li>
              <li><a href="/chat" className="text-stone-400 dark:text-gold-200 hover:text-white dark:hover:text-gold-400 transition-colors">Health AI</a></li>
              <li><a href="https://nicholasconnelly.substack.com/" className="text-stone-400 dark:text-gold-200 hover:text-white dark:hover:text-gold-400 transition-colors" target="_blank" rel="noopener noreferrer">Articles</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white dark:text-gold-400 mb-4 font-serif">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy.html" className="text-stone-400 dark:text-gold-200 hover:text-white dark:hover:text-gold-400 transition-colors" target="_blank">Privacy Policy</a></li>
              <li><a href="/terms.html" className="text-stone-400 dark:text-gold-200 hover:text-white dark:hover:text-gold-400 transition-colors" target="_blank">Terms of Service</a></li>
              <li><a href="https://github.com/nickconnelly10/muscadine.box" className="text-stone-400 dark:text-gold-200 hover:text-white dark:hover:text-gold-400 transition-colors" target="_blank" rel="noopener noreferrer">Open Source</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white dark:text-gold-400 mb-4 font-serif">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://twitter.com/nicklutk" className="text-stone-400 dark:text-gold-200 hover:text-white dark:hover:text-gold-400 transition-colors" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://nicholasconnelly.substack.com/" className="text-stone-400 dark:text-gold-200 hover:text-white dark:hover:text-gold-400 transition-colors" target="_blank" rel="noopener noreferrer">Substack</a></li>
              <li><a href="mailto:nickconnelly10@gmail.com?subject=Muscadine%20Inquiry" className="text-stone-400 dark:text-gold-200 hover:text-white dark:hover:text-gold-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-700 dark:border-stone-600 pt-8 text-center">
          <p className="text-sm mb-4">&copy; 2025 Muscadine. All rights reserved.</p>
          <p className="text-xs text-stone-400 dark:text-gold-200">Built on BITCOIN • Secure • Transparent • Professional</p>
        </div>
      </div>
    </footer>
  );
} 