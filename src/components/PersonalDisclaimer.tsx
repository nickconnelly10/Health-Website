import React from 'react';

export default function PersonalDisclaimer({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg ${className}`}>
      <p className="text-sm text-amber-900 leading-relaxed">
        This site reflects my personal lifestyle and the practices that work for me. Nothing here is
        intended as medical, nutritional, fitness, or health advice. For guidance on your own health,
        please consult a qualified physician or licensed professional.
      </p>
    </div>
  );
}
