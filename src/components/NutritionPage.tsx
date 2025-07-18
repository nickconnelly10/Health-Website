import React from 'react';

export default function NutritionPage() {
  return (
    <div className="max-w-2xl mx-auto mt-12 bg-marble dark:bg-charcoal rounded-3xl shadow-2xl border-2 border-burgundy p-10 font-roman">
      <h2 className="text-3xl font-bold text-burgundy mb-4 font-roman">Nutrition</h2>
      <p className="mb-6 text-lg text-stone-700 dark:text-stone-200 font-semibold">
        Inspired by <span className="italic">The Paleo Cure</span> by Chris Kresser, these whole‑foods principles will boost your energy and health:
      </p>
      <h3 className="text-2xl font-bold text-burgundy mb-2 font-roman">Shopping</h3>
      <ul className="space-y-5 text-base text-stone-800 dark:text-stone-100 mb-6">
        <li>
          <span className="font-bold">Shop the Perimeter</span><br />
          Focus on whole foods—fresh produce, pasture‑raised meats, wild‑caught fish, nuts, and seeds—found around the edges of the store.<br />
          Avoid the middle aisles where added sugars, refined oils, preservatives, and chemicals hide.
        </li>
        <li>
          <span className="font-bold">Nothing with Added Sugar or Chemicals</span><br />
          Read labels carefully: if you can’t pronounce it or it lists artificial flavors, dyes, or sweeteners, leave it behind.<br />
          Prioritize single‑ingredient or minimally processed foods.
        </li>
      </ul>
      <ul className="space-y-5 text-base text-stone-800 dark:text-stone-100">
        <li>
          <span className="font-bold">Build Your Plate, Paleo‑Style</span>
          <ul className="ml-5 list-disc">
            <li><span className="font-semibold">Carbohydrates:</span> Choose colorful, nutrient‑dense plant foods—dark leafy greens, cruciferous vegetables, berries, sweet potatoes, plantains, and winter squash.</li>
            <li><span className="font-semibold">Protein:</span> Opt for pasture‑raised chicken, grass‑fed beef, wild salmon, free‑range eggs, and other animal sources.</li>
            <li><span className="font-semibold">Fats:</span> Include healthy fats such as avocado, olives, coconut oil, and animal fats such as beef tallow, lard., ghee and bone marrow.</li>
            <li><span className="font-semibold">Micronutrients (Vitamins & Minerals):</span> Whole foods provide a spectrum of vitamins, minerals, and phytochemicals that support countless bodily functions and promote overall health.</li>
          </ul>
        </li>
        <li>
          <span className="font-bold">Hydration First</span><br />
          Sip plain water throughout the day—don’t wait until you’re thirsty.<br />
          Herbal teas, mineral‑infused water, and coconut water; avoid drinks with sweeteners or artificial ingredients.
        </li>
        <li>
          <span className="font-bold">Supplements Only When Needed</span><br />
          Whole foods deliver natural vitamins, minerals, and phytochemicals—use supplements (e.g., vitamin D in winter, magnesium glycinate for sleep).<br />
          Research any supplement’s sourcing, bioavailability, and dosing before taking. For detailed guidance on specific micronutrients, see the Supplements page. Remember, whole foods should always be your primary nutrient source; if you choose to use supplements, thoroughly research each product’s sourcing, bioavailability, half‑life, and metabolic effects.
        </li>
        <li>
          <span className="font-bold">Mindful Eating</span><br />
          Chew slowly, pause between bites, and tune into hunger/fullness cues—this supports digestion, hormone balance, and risk of choking. This also makes you eat less and become for full.
        </li>
        <li>
          <span className="font-bold">Meal Timing & Fasting</span><br />
          Eat within an 8–12 hour window each day and finish your last meal at least two hours before bedtime to support metabolic health and digestion.
        </li>
        <li>
          <span className="font-bold">Batch‑Cooking</span><br />
          Cook large batches on weekends—roast proteins and veggies or prepare soups so you have nourishing meals ready to heat and eat.
        </li>
      </ul>
    </div>
  );
}
