'use client'

import React, { useState } from 'react';
import LifestylePage from './LifestylePage';
import NutritionPage from './NutritionPage';
import PhysicalActivityPage from './PhysicalActivityPage';
import PageHero from './PageHero';

export default function HealthyLivingPage() {
  const [activeTab, setActiveTab] = useState<'lifestyle' | 'nutrition' | 'physical-activity'>('lifestyle');

  const tabs = [
    { id: 'lifestyle' as const, label: 'Lifestyle' },
    { id: 'nutrition' as const, label: 'Nutrition' },
    { id: 'physical-activity' as const, label: 'Physical Activity' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'lifestyle':
        return <LifestylePage />;
      case 'nutrition':
        return <NutritionPage />;
      case 'physical-activity':
        return <PhysicalActivityPage />;
      default:
        return <LifestylePage />;
    }
  };

  return (
    <div className="page-shell">
      <PageHero
        title="Healthy Living"
        description="How I approach lifestyle, nutrition, and movement — personal habits, not prescriptions."
      />

      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="flex gap-2 py-3 overflow-x-auto" role="tablist" aria-label="Healthy living topics">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="max-w-6xl mx-auto container-padding animate-slide-up"
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
