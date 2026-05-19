import React from 'react';
import PersonalDisclaimer from './PersonalDisclaimer';

export default function NutritionPage() {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 p-6">
        <h2 className="text-2xl font-bold text-stone-900 mb-4">How I Eat</h2>
        <div className="space-y-4 text-sm text-stone-800">
          <p>
            Nutrition is foundational to quality of life. I cook in weekly bulk for time convenience, some people call this the "paleo diet", which is eating mostly whole and least unproccessed foods. What follows isn&apos;t advice; it&apos;s a snapshot of the principles I personally follow.
          </p>

          <section>
            <h3 className="text-lg font-bold text-burgundy mb-2">Food Quality</h3>
            <p>
              I shop the perimeter of the store — fresh produce, pasture-raised meats, wild-caught fish, free-range eggs, nuts, and seeds. I try to avoid refined sugars, industrial seed oils, and most preservatives, and I lean toward certified organic when it&apos;s available.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-burgundy mb-2">Plate Composition</h3>
            <p>
              I build meals around carbs — non-starchy vegetables, starchy plants (sweet potatoes, squash, plantains), and fruit (especially berries) — plus quality protein (grass-fed beef, poultry, wild salmon, eggs, occasionally organ meats), and healthy fats like avocado, olive oil, ghee, or organic butters. These whole foods are naturally rich in vitamins and minerals.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-burgundy mb-2">Meal Timing</h3>
            <p>
              I generally eat within an 8–12 hour daily window and try to space meals a few hours apart.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-burgundy mb-2">Hydration</h3>
            <p>
              Water throughout the day, with a pinch of unrefined sea salt or herbal teas mixed in. Lemon, cucumber, or mint when I want flavor without sugar.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-burgundy mb-2">Flexibility</h3>
            <p>
              I aim for this style of eating most of the time (whole foods only) and stay flexible the rest — the goal is sustainability, not perfection. Such as eating eggs in the morning, always have to have it with sourdough bread.
            </p>
          </section>

          <PersonalDisclaimer className="mt-6" />
        </div>
      </div>
    </div>
  );
}
