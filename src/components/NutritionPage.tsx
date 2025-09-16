import React from 'react';

export default function NutritionPage() {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      {/* Main Content */}
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 p-6">
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
              <li><span className="font-semibold">Supplements:</span> Supplement based on deficiency or physician's advice. Eating whole foods is the best way to gain all nutrition, but supplements are more commonly needed based on the modern lifestyle such as minerals, vitamins, and sunlight-induced hormones.</li>
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
    </div>
  );
}
