import React from 'react';

export default function NutritionPage() {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-12 gap-8">
      {/* Main Content */}
      <div className="w-full md:w-1/2 bg-marble rounded-3xl shadow-2xl border-2 border-burgundy p-10 font-roman">
        <h2 className="text-3xl font-bold text-burgundy mb-4 font-roman">Nutrition</h2>
        <p className="mb-6 text-lg text-stone-700 font-semibold">
          Inspired by <span className="italic">The Paleo Cure</span> by Chris Kresser, these whole‑foods principles will boost your energy and health:
        </p>
        <h3 className="text-2xl font-bold text-burgundy mb-2 font-roman">Shopping</h3>
        <ul className="space-y-5 text-base text-stone-800 mb-6">
          <li>
            <span className="font-bold">Shop the Perimeter</span><br />
            Focus on whole foods—fresh produce, pasture‑raised meats, and wild‑caught fish —found around the edges of the store.<br />
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
              <li><span className="font-semibold">Carbohydrates:</span> Choose colorful, nutrient‑dense plant foods—dark leafy greens, cruciferous vegetables, berries, sweet potatoes, rice, plantains, and winter squash.</li>
              <li><span className="font-semibold">Protein:</span> Opt for pasture‑raised chicken, grass‑fed beef, wild salmon, free‑range eggs, and other animal sources.</li>
              <li><span className="font-semibold">Healthy Fats:</span> Include avocados, olive oil, coconut oil, and animal fats like beef tallow, glee and lard. Avoid seed oils. Nuts and beans are great too.</li>
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
          <li>
            <span className="font-bold">Batch-Cooking</span><br />
            To save time and avoid fast food, cook in bulk so you always have meals ready to heat and eat.
          </li>
        </ul>
      </div>

      {/* Supplement Sidebar */}
      <aside className="w-full md:w-1/2 bg-marble rounded-3xl shadow-xl border-2 border-burgundy p-8 font-roman h-fit">
        <h3 className="text-2xl font-bold text-burgundy mb-4">Supplements Only When Needed</h3>
        
        <div className="mb-4">
          <h4 className="text-lg font-bold text-burgundy mb-2">Micronutrients (Vitamins & Minerals)</h4>
          <p className="text-sm text-stone-800 mb-2">
            Since whole foods aren't processed, they come with natural micronutrients and phytochemicals in plants and animals, which have all sorts of benefits. Avoid gummies and anything with added sugar. Vitamins in pills have more bioavailability.
          </p>
          <p className="text-sm text-stone-800">
            Whole foods should be your first source of nutrients. Always research a supplement (how it's made, half-life, methylation, and its effects) before taking it.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-bold text-burgundy mb-2">Immune Support</h4>
            <ul className="text-sm text-stone-800 space-y-1">
              <li><span className="font-semibold">High-dose Vitamin C:</span> Good when sick, like elderberry. Do not take ascorbic acid for vitamin C.</li>
              <li><span className="font-semibold">Elderberry:</span> Natural immune support, especially helpful during cold and flu season.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-burgundy mb-2">Sleep Support</h4>
            <ul className="text-sm text-stone-800 space-y-1">
              <li><span className="font-semibold">Magnesium Glycinate:</span> Gentle on the stomach and promotes better sleep quality.</li>
              <li><span className="font-semibold">Melatonin:</span> Use with caution - can affect natural hormone production and cause dependency. Best for short-term use only.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-burgundy mb-2">Mitochondria Support</h4>
            <ul className="text-sm text-stone-800 space-y-1">
              <li>Supplements that support cellular energy production and mitochondrial function.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-burgundy mb-2">Energy Support</h4>
            <ul className="text-sm text-stone-800 space-y-1">
              <li>Natural supplements to boost energy levels and combat fatigue.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-burgundy mb-2">Essential Nutrients</h4>
            <ul className="text-sm text-stone-800 space-y-1">
              <li><span className="font-semibold">Multivitamins:</span> Do thorough research about what's in it and quality. Make sure it doesn't have folic acid (should have methylated folate instead). Avoid gummy versions which often contain added sugars and artificial ingredients.</li>
              <li><span className="font-semibold">Vitamin D:</span> Important for immune function and bone health, especially if you have limited sun exposure.</li>
              <li><span className="font-semibold">Omega-3s:</span> Support brain health, reduce inflammation, and promote heart health. Choose high-quality fish oil.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-burgundy mb-2">Methylation Support</h4>
            <ul className="text-sm text-stone-800 space-y-1">
              <li>Take niche supplements like methylation support when needed</li>
              <li><span className="font-semibold">Folate:</span> Find methylated folate, not folic acid for better absorption and utilization.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-burgundy mb-2">Gut Health</h4>
            <ul className="text-sm text-stone-800 space-y-1">
              <li><span className="font-semibold">Avoid Probiotic Gummies:</span> More natural solutions like fermented foods (yogurt, kombucha) are better.</li>
              <li><span className="font-semibold">Prebiotics:</span> Great for feeding beneficial gut bacteria and supporting digestive health.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-burgundy mb-2">Safety Guidelines</h4>
            <ul className="text-sm text-stone-800 space-y-1">
              <li>Start with one supplement at a time to monitor effects</li>
              <li>Consult healthcare provider before starting new supplements</li>
              <li>Be aware of potential interactions with medications</li>
              <li>Store supplements properly in a cool, dry place</li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
