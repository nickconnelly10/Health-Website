import React from 'react';
import { PERSONAL_DISCLAIMER } from '../constants/disclaimer';

export default function PersonalDisclaimer({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-amber-50 border border-amber-200 p-4 rounded-lg ${className}`}>
      <p className="text-sm text-amber-900 leading-relaxed">
        {PERSONAL_DISCLAIMER}
      </p>
    </div>
  );
}
