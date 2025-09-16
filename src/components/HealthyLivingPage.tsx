import React, { useState } from 'react';
import LifestylePage from './LifestylePage';
import NutritionPage from './NutritionPage';
import PhysicalActivityPage from './PhysicalActivityPage';

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
    <div className="min-h-screen">
      {/* Tab Navigation */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors duration-200 border-b-2 ${
                  activeTab === tab.id
                    ? 'text-burgundy border-burgundy bg-stone-50'
                    : 'text-stone-600 border-transparent hover:text-stone-900 hover:border-stone-300'
                }`}
              >
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="pt-4">
        {renderContent()}
      </div>
    </div>
  );
}
