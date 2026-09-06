'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import PageHero from './PageHero';

const LifestylePage = dynamic(() => import('./LifestylePage'));
const NutritionPage = dynamic(() => import('./NutritionPage'));
const PhysicalActivityPage = dynamic(() => import('./PhysicalActivityPage'));

type TabId = 'lifestyle' | 'nutrition' | 'physical-activity';

const tabs: { id: TabId; label: string }[] = [
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'nutrition', label: 'Nutrition' },
  { id: 'physical-activity', label: 'Physical Activity' },
];

function parseTab(value: string | null): TabId {
  if (value === 'nutrition' || value === 'physical-activity' || value === 'lifestyle') {
    return value;
  }
  return 'lifestyle';
}

export default function HealthyLivingPage() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState<TabId>(() => parseTab(tabParam));
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    setActiveTab(parseTab(tabParam));
  }, [tabParam]);

  const focusTab = useCallback((index: number) => {
    tabRefs.current[index]?.focus();
  }, []);

  const selectTab = useCallback((tabId: TabId, index: number) => {
    setActiveTab(tabId);
    focusTab(index);
  }, [focusTab]);

  const onTabKeyDown = (event: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (event.key === 'ArrowRight') {
      nextIndex = (index + 1) % tabs.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }
    event.preventDefault();
    selectTab(tabs[nextIndex].id, nextIndex);
  };

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
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                tabIndex={activeTab === tab.id ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
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
