import React from 'react';
import Link from 'next/link';
import ContentCard from './ContentCard';
import PersonalDisclaimer from './PersonalDisclaimer';

const sections = [
  {
    title: 'Morning Light',
    body: "I try to get outside shortly after waking — a quick walk, breakfast on the patio, or just reading by a sunny window. It's how I start the day clear-headed.",
  },
  {
    title: 'Nutrition',
    body: (
      <>
        Covered on the{' '}
        <Link href="/healthy-living?tab=nutrition" className="text-burgundy hover:underline">
          Nutrition
        </Link>{' '}
        tab — a whole-foods approach with a daily eating window that works for me.
      </>
    ),
  },
  {
    title: 'Movement',
    body: (
      <>
        Covered on the{' '}
        <Link href="/healthy-living?tab=physical-activity" className="text-burgundy hover:underline">
          Physical Activity
        </Link>{' '}
        tab — I follow the CDC&apos;s general guidance on weekly activity such as lifting or running and build in daily walks.
      </>
    ),
  },
  {
    title: 'Connection',
    body: 'I make space for at least one real interaction a day — a walk with a friend, a call home, a shared meal. It matters more than people give it credit for.',
  },
  {
    title: 'Focused Work',
    body: 'I work in deep blocks with short breaks in between — usually a walk, water, or some stretching. It\'s what keeps me sharp through long study sessions.',
  },
  {
    title: 'Environment',
    body: 'I lean toward non-toxic personal-care and cleaning products, store food in glass or stainless steel, and choose natural fabrics where I can.',
  },
  {
    title: 'Evening Wind-Down',
    body: 'I stop eating a couple of hours before bed, dim the lights, and put my phone away well before sleep. Journaling, reading, or a few minutes of stretching closes the day out. High quality sleep is essential for a healthy life.',
  },
];

export default function LifestylePage() {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <ContentCard>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How I Live</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            The habits below are the ones I&apos;ve built for myself. They keep me grounded, focused, and ready for the demands of everyday life.
          </p>

          <div className="space-y-6">
            {sections.map((section) => (
              <section key={section.title}>
                <h3 className="text-lg font-semibold text-burgundy mb-2">{section.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>

          <PersonalDisclaimer className="mt-8" />
        </ContentCard>
      </div>

      <ContentCard className="h-fit">
        <p className="italic text-gray-600 mb-4 text-sm leading-relaxed">
          &ldquo;Very little is needed to make a happy life; it is all within yourself, in your way of thinking.&rdquo;
          <span className="block mt-2 text-right text-xs text-gray-500 not-italic">— Marcus Aurelius</span>
        </p>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Life Balance</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>Physical</li>
          <li>Mental/Emotional</li>
          <li>Spiritual/Purpose</li>
          <li>Career</li>
          <li>Financial</li>
          <li>Environment</li>
          <li>Family/Social</li>
        </ul>
        <p className="text-sm text-gray-600 mt-4 leading-relaxed">
          Take time weekly to reflect on your thoughts—away from distractions. Think, walk, or write to identify which life areas you may be under-giving to during this season.
        </p>
      </ContentCard>
    </div>
  );
}
