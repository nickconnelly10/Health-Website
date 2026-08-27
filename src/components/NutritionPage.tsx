import React from 'react';
import ContentCard from './ContentCard';
import PersonalDisclaimer from './PersonalDisclaimer';

const sections = [
  {
    title: 'Food Quality',
    body: 'I shop the perimeter of the store — fresh produce, pasture-raised meats, wild-caught fish, free-range eggs, nuts, and seeds. I try to avoid refined sugars, industrial seed oils, and most preservatives, and I lean toward certified organic when it\'s available.',
  },
  {
    title: 'Plate Composition',
    body: 'I build meals around carbs — non-starchy vegetables, starchy plants (sweet potatoes, squash, plantains), and fruit (especially berries) — plus quality protein (grass-fed beef, poultry, wild salmon, eggs, occasionally organ meats), and healthy fats like avocado, olive oil, ghee, or organic butters. These whole foods are naturally rich in vitamins and minerals.',
  },
  {
    title: 'Meal Timing',
    body: 'I generally eat within an 8–12 hour daily window and try to space meals a few hours apart.',
  },
  {
    title: 'Hydration',
    body: 'Water throughout the day, with a pinch of unrefined sea salt or herbal teas mixed in. Lemon, cucumber, or mint when I want flavor without sugar.',
  },
  {
    title: 'Flexibility',
    body: 'I aim for this style of eating most of the time (whole foods only) and stay flexible the rest — the goal is sustainability, not perfection. Such as eating eggs in the morning, always have to have it with sourdough bread.',
  },
];

export default function NutritionPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <ContentCard>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">How I Eat</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          Nutrition is foundational to quality of life. I cook in weekly bulk for time convenience, some people call this the &ldquo;paleo diet&rdquo;, which is eating mostly whole and least unprocessed foods. What follows isn&apos;t advice; it&apos;s a snapshot of the principles I personally follow.
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
  );
}
