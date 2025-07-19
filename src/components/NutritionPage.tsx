import React from 'react';

export default function NutritionPage() {
  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto mt-12 gap-8">
      {/* Main Content */}
      <div className="flex-1 bg-marble rounded-3xl shadow-2xl border-2 border-burgundy p-10 font-roman">
        <h2 className="text-3xl font-bold text-burgundy mb-4 font-roman">Nutrition</h2>
        <p className="mb-6 text-lg text-stone-700 font-semibold">
          Inspired by <span className="italic">The Paleo Cure</span> by Chris Kresser, these whole‑foods principles will boost your energy and health:
        </p>
        <h3 className="text-2xl font-bold text-burgundy mb-2 font-roman">Shopping</h3>
        <ul className="space-y-5 text-base text-stone-800 mb-6">
          <li>
            <span className="font-bold">Shop the Perimeter</span><br />
            Focus on whole foods—fresh produce, pasture‑raised meats, wild‑caught fish, nuts, and seeds—found around the edges of the store.<br />
            Avoid the middle aisles where added sugars, refined oils, preservatives, and chemicals hide.
          </li>
          <li>
            <span className="font-bold">Nothing with Added Sugar or Chemicals</span><br />
            Read labels carefully: if you can't pronounce it or it lists artificial flavors, dyes, or sweeteners, leave it behind.<br />
            Prioritize single‑ingredient or minimally processed foods.
          </li>
        </ul>
        <ul className="space-y-5 text-base text-stone-800">
          <li>
            <span className="font-bold">Build Your Plate, Paleo‑Style</span>
            <ul className="ml-5 list-disc">
              <li><span className="font-semibold">Carbohydrates:</span> Choose colorful, nutrient‑dense plant foods—dark leafy greens, cruciferous vegetables, berries, sweet potatoes, plantains, and winter squash.</li>
              <li><span className="font-semibold">Protein:</span> Opt for pasture‑raised chicken, grass‑fed beef, wild salmon, free‑range eggs, and other animal sources.</li>
              <li><span className="font-semibold">Healthy Fats:</span> Include avocados, olive oil, coconut oil, nuts, and seeds for sustained energy and brain health.</li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Timing Matters</span><br />
            Try an 8‑hour eating window (e.g., 10 AM to 6 PM) to give your digestive system a rest and support metabolic health. This approach can improve energy levels, reduce inflammation, and support healthy weight management.
          </li>
          <li>
            <span className="font-bold">Hydration</span><br />
            Drink filtered water throughout the day. Aim for half your body weight in ounces daily. Add lemon, cucumber, or mint for flavor without artificial sweeteners.
          </li>
        </ul>
      </div>

      {/* Supplement Sidebar */}
      <aside className="w-full md:w-80 flex-shrink-0 bg-marble rounded-3xl shadow-xl border-2 border-burgundy p-8 font-roman h-fit">
        <h3 className="text-2xl font-bold text-burgundy mb-4">Supplements</h3>
        <ul className="space-y-3 text-base text-stone-800">
          <li><span className="font-bold">Whole Foods First:</span> Prioritize nutrients from real food before considering supplements.</li>
          <li><span className="font-bold">Research Quality:</span> Choose reputable brands and check for third-party testing.</li>
          <li><span className="font-bold">Personal Needs:</span> Consider vitamin D, magnesium, or omega-3s if you have a known deficiency or dietary gap.</li>
          <li><span className="font-bold">Consult a Professional:</span> Talk to a healthcare provider before starting new supplements, especially if you take medications.</li>
          <li><span className="font-bold">Consistency:</span> Take supplements as directed and monitor for any side effects.</li>
        </ul>
      </aside>
    </div>
  );
}
