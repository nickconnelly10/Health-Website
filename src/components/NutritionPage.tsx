import React from 'react';

export default function NutritionPage() {
  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto mt-12 gap-6">
      {/* Main Content */}
      <div className="w-full lg:w-3/5 bg-white rounded-3xl shadow-2xl border border-stone-200 p-6">
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Nutrition</h2>
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-bold text-burgundy mb-2 font-roman">1. Food Quality</h3>
              <ul className="list-disc ml-6 space-y-2 text-sm text-stone-800">
              <li><span className="font-semibold">Perimeter shopping.</span> Fresh produce, pasture-raised meats, wild-caught fish, free-range eggs, nuts, and seeds.</li>
              <li><span className="font-semibold">Zero additives.</span> Eliminate refined sugars, industrial seed oils, emulsifiers, artificial flavors, and preservatives.</li>
              <li><span className="font-semibold">Organic.</span> Choose certified organic foods to avoid pesticides and support higher nutrient density.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-burgundy mb-2 font-roman">2. Paleo Plate</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm text-stone-800">
              <li><span className="font-semibold">Veggies & Fruits:</span> Non-starchy veggies (leafy greens, broccoli, asparagus) plus berries and safe starches—sweet potatoes, winter squash, plantains.</li>
              <li><span className="font-semibold">Protein:</span>
                <ul className="ml-5 list-disc">
                  <li>Animal proteins: grass-fed beef, pasture-raised poultry, wild salmon, shellfish, organ meats.</li>
                  <li>Eggs: Pasture-raised for choline, vitamin D, and protein.</li>
                  <li>Plant proteins: Small servings of soaked nuts or seeds.</li>
                </ul>
              </li>
              <li><span className="font-semibold">Healthy Fats:</span> Avocado, olives, olive oil, coconut oil, ghee, fatty fish, and nut butters.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-burgundy mb-2 font-roman">3. Timing & Fasting</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm text-stone-800">
              <li><span className="font-semibold">Time-Restricted Eating:</span> 14–16-hour overnight fast with 8–10-hour eating window (e.g., 10 AM–6 PM).</li>
              <li>Build gradually. Start with 12/12 or 14/10 if 16/8 feels too harsh.</li>
              <li><span className="font-semibold">Meal spacing:</span> 3–4 hours between meals to allow insulin levels to fall.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-burgundy mb-2 font-roman">4. Hydration</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm text-stone-800">
              <li><span className="font-semibold">Half your body weight in ounces.</span> (e.g., 160 lb → 80 oz water daily)</li>
              <li><span className="font-semibold">Electrolytes.</span> Add unrefined sea salt or mineral broth if active or fasting.</li>
              <li><span className="font-semibold">Flavor without sugar.</span> Infuse water with lemon, cucumber, mint, or herbal teas.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-burgundy mb-2 font-roman">5. Meal Prep</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm text-stone-800">
              <li><span className="font-semibold">Batch cooking.</span> Roast veggies, grill meats, make stews for easy reheating.</li>
              <li><span className="font-semibold">Freezer meals.</span> Double recipes and freeze half in individual portions.</li>
              <li><span className="font-semibold">Tools:</span> Slow cookers, pressure cookers, sheet-pan dinners to minimize cooking time.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-burgundy mb-2 font-roman">6. Micronutrients</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm text-stone-800">
              <li><span className="font-semibold">Superfoods:</span> Fermented foods, organ meats, shellfish, and seaweeds.</li>
              <li><span className="font-semibold">Color diversity:</span> Eat the rainbow for broad spectrum of antioxidants.</li>
              <li><span className="font-semibold">Supplements:</span> Consider vitamin D3/K2, omega-3s, magnesium only when needed.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-burgundy mb-2 font-roman">7. Personalize</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm text-stone-800">
              <li><span className="font-semibold">30-day reset:</span> Remove grains, legumes, dairy, nightshades, then reintroduce one at a time.</li>
              <li><span className="font-semibold">Macro tuning:</span> Adjust carbs based on activity level and goals.</li>
              <li><span className="font-semibold">80/20 flexibility:</span> Paleo-style eating most of the time, with mindful indulgences.</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Supplement Sidebar */}
      <aside className="w-full lg:w-2/5 bg-white rounded-3xl shadow-xl border border-stone-200 p-6 h-fit">
        <h3 className="text-xl font-bold text-stone-900 mb-4">Supplements</h3>
        <div className="space-y-4">
          <section>
            <h4 className="text-lg font-bold text-burgundy mb-2">1. Whole Foods First</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm text-stone-800">
              <li><span className="font-semibold">Priority:</span> Meet nutrient needs through diverse, Paleo-style diet.</li>
              <li><span className="font-semibold">Why:</span> Whole foods deliver vitamins, minerals, fiber in balanced forms.</li>
              <li><span className="font-semibold">Supplements:</span> Fill specific gaps, not replace poor diet.</li>
            </ul>
          </section>

          <section>
            <h4 className="text-lg font-bold text-burgundy mb-2">2. Foundational</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm text-stone-800">
              <li><span className="font-semibold">Multivitamin:</span> 5-MTHF instead of folic acid, third-party tested brands.</li>
              <li><span className="font-semibold">Omega-3s:</span> 500–1,000 mg EPA+DHA daily or fatty fish 2×/week.</li>
              <li><span className="font-semibold">Vitamin D₃ + K₂:</span> 1,000–4,000 IU D₃ daily, MK-7 K₂ form.</li>
            </ul>
          </section>

          <section>
            <h4 className="text-lg font-bold text-burgundy mb-2">3. Micronutrients</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm text-stone-800">
              <li><span className="font-semibold">B-Complex:</span> Methylated forms for energy, mood, methylation.</li>
              <li><span className="font-semibold">Magnesium:</span> 200–400 mg glycinate at night for sleep support.</li>
              <li><span className="font-semibold">Zinc:</span> 10–30 mg/day for immune health.</li>
            </ul>
          </section>

          <section>
            <h4 className="text-lg font-bold text-burgundy mb-2">4. Condition-Specific</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm text-stone-800">
              <li><span className="font-semibold">Collagen:</span> 10 g/day with vitamin C for skin, joint repair.</li>
              <li><span className="font-semibold">Immune:</span> Vitamin C (1–3 g), elderberry, zinc during illness.</li>
              <li><span className="font-semibold">Sleep:</span> Magnesium glycinate, L-Theanine 100–200 mg.</li>
              <li><span className="font-semibold">Energy:</span> CoQ10 100–200 mg, creatine 3–5 g daily.</li>
            </ul>
          </section>

          <section>
            <h4 className="text-lg font-bold text-burgundy mb-2">5. Gut Health</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm text-stone-800">
              <li><span className="font-semibold">Fermented foods:</span> Yogurt, kefir, sauerkraut, kimchi.</li>
              <li><span className="font-semibold">Prebiotics:</span> Diverse fibers from onion, garlic, asparagus.</li>
              <li><span className="font-semibold">Glutamine:</span> 5 g/day on empty stomach for gut healing.</li>
            </ul>
          </section>

          <section>
            <h4 className="text-lg font-bold text-burgundy mb-2">6. Safety</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm text-stone-800">
              <li><span className="font-semibold">One at a time:</span> Introduce single supplement, monitor 2–4 weeks.</li>
              <li><span className="font-semibold">Check interactions:</span> Review with healthcare provider.</li>
              <li><span className="font-semibold">Quality:</span> Third-party tested brands with minimal fillers.</li>
            </ul>
          </section>

          <section>
            <h4 className="text-lg font-bold text-burgundy mb-2">Key Takeaway</h4>
            <p className="text-sm text-stone-800">
              Supplements are tools, not essentials. Ground nutrition in whole foods, then add targeted support for proven deficiencies or goals.
            </p>
          </section>
        </div>
      </aside>
    </div>
  );
}
