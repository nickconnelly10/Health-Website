'use client'

import React, { useMemo, useState } from 'react';
import PageHero from './PageHero';
import ContentCard from './ContentCard';
import PersonalDisclaimer from './PersonalDisclaimer';

type Category = 'lifestyle' | 'nutrition' | 'physical-activity';

type Resource = {
  id: string;
  category: Category;
  title: string;
  description: string;
  url: string;
  linkLabel: string;
};

const categories: { id: 'all' | Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'lifestyle', label: 'Lifestyle' },
  { id: 'nutrition', label: 'Nutrition' },
  { id: 'physical-activity', label: 'Physical Activity' },
];

const categoryStyles: Record<
  Category,
  { badge: string; icon: React.ReactNode }
> = {
  lifestyle: {
    badge: 'bg-purple-100 text-purple-800',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  nutrition: {
    badge: 'bg-emerald-100 text-emerald-800',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  'physical-activity': {
    badge: 'bg-blue-100 text-blue-800',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
};

const resources: Resource[] = [
  {
    id: 'ray-peat',
    category: 'lifestyle',
    title: 'Ray Peat Research',
    description:
      "Dr. Ray Peat's research on nutrition, hormones, and aging. Explores environmental influences on health and therapeutic uses of progesterone, thyroid hormone, and coconut oil.",
    url: 'https://www.raypeat.com/',
    linkLabel: 'RayPeat.com',
  },
  {
    id: 'huberman',
    category: 'lifestyle',
    title: 'Andrew Huberman',
    description:
      'Stanford neuroscientist sharing science-based tools for optimizing sleep, stress, learning, and performance through neural regeneration and neuroplasticity research.',
    url: 'https://hubermanlab.com/',
    linkLabel: 'HubermanLab.com',
  },
  {
    id: 'kresser',
    category: 'nutrition',
    title: 'Functional Medicine',
    description:
      "Chris Kresser's functional medicine approach emphasizes whole foods and personalized nutrition through research-based dietary and lifestyle interventions.",
    url: 'https://chriskresser.com/',
    linkLabel: 'ChrisKresser.com',
  },
  {
    id: 'brecka',
    category: 'nutrition',
    title: 'Gary Brecka',
    description:
      'Human biologist specializing in genetic testing and health optimization — methylation, detoxification pathways, and targeted genetic insights.',
    url: 'https://www.garybrecka.com/',
    linkLabel: 'GaryBrecka.com',
  },
  {
    id: 'sports-injury',
    category: 'physical-activity',
    title: 'Sports Injury Clinic',
    description:
      'Comprehensive database for body injuries and healing — self-recovery information, rehabilitation exercises, and advice for sports injuries.',
    url: 'https://www.sportsinjuryclinic.net/',
    linkLabel: 'Sports Injury Clinic',
  },
];

const categoryLabels: Record<Category, string> = {
  lifestyle: 'Lifestyle',
  nutrition: 'Nutrition',
  'physical-activity': 'Physical Activity',
};

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | Category>('all');

  const filteredResources = useMemo(
    () =>
      activeFilter === 'all'
        ? resources
        : resources.filter((resource) => resource.category === activeFilter),
    [activeFilter],
  );

  return (
    <div className="page-shell">
      <PageHero
        title="Health Resources"
        description="Trusted sources I reference for lifestyle, nutrition, and physical activity — organized so you can find what you need quickly."
      />

      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="flex gap-2 py-3 overflow-x-auto" role="group" aria-label="Filter resources">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                aria-pressed={activeFilter === category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeFilter === category.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
            {filteredResources.map((resource) => {
              const styles = categoryStyles[resource.category];

              return (
                <ContentCard key={resource.id} hover className="group">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mb-4 ${styles.badge}`}
                  >
                    {styles.icon}
                    {categoryLabels[resource.category]}
                  </span>

                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-burgundy-800 transition-colors duration-200">
                    {resource.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {resource.description}
                  </p>

                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-burgundy-700 transition-colors duration-200"
                  >
                    Visit {resource.linkLabel}
                    <ExternalLinkIcon />
                  </a>
                </ContentCard>
              );
            })}
          </div>

          {filteredResources.length === 0 && (
            <p className="text-center text-gray-500 py-12">No resources in this category yet.</p>
          )}

          <div className="mt-12 max-w-3xl mx-auto">
            <PersonalDisclaimer />
          </div>
        </div>
      </section>
    </div>
  );
}
