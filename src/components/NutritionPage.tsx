import React from 'react';

export default function NutritionPage() {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-12 gap-8">
      {/* Main Content */}
      <div className="w-full md:w-1/2 bg-marble rounded-3xl shadow-2xl border-2 border-burgundy p-10 font-roman">
        <h2 className="text-3xl font-bold text-burgundy mb-4 font-roman">Nutrition</h2>
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold text-burgundy mb-2 font-roman">1. Prioritize Food Quality</h3>
            <ul className="list-disc ml-6 space-y-2 text-base text-stone-800">
              <li><span className="font-semibold">Perimeter shopping only.</span> Fresh produce, pasture‑raised meats, wild‑caught fish, free‑range eggs, nuts, and seeds are non‑negotiable.</li>
              <li><span className="font-semibold">Zero additives.</span> Eliminate refined sugars, industrial seed oils, emulsifiers, artificial flavors, and preservatives. If it has a multi‑syllable chemical name, leave it.</li>
              <li><span className="font-semibold">Regenerative & organic.</span> Whenever possible, choose certified organic or regenerative‑farm foods to avoid pesticides and to support higher nutrient density (more vitamins, antioxidants, and phytonutrients).</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-burgundy mb-2 font-roman">2. Supercharge Your Paleo Plate</h3>
            <ul className="list-disc ml-6 space-y-2 text-base text-stone-800">
              <li><span className="font-semibold">Veggies & Fruits:</span> Load up on non‑starchy veggies (leafy greens, broccoli, asparagus, peppers) plus handfuls of berries and safe starches—sweet potatoes, winter squash, plantains, or white rice (if well‑tolerated).</li>
              <li><span className="font-semibold">Protein (Quality Matters):</span>
                <ul className="ml-5 list-disc">
                  <li>Animal proteins are your first choice: grass‑fed beef, pasture‑raised poultry, wild salmon, shellfish, and organ meats (liver, heart) for concentrated micronutrients like B12, iron, zinc, and CoQ10.</li>
                  <li>Eggs: Pasture‑raised or omega‑3 enriched eggs deliver choline, vitamin D, and high‑quality protein.</li>
                  <li>Complementary plant proteins: A small serving of soaked nuts or seeds can add variety but shouldn’t replace animal sources.</li>
                </ul>
              </li>
              <li><span className="font-semibold">Healthy Fats to Satiety:</span> Avocado, olives, olive oil, coconut oil, ghee, tallow, fatty fish (mackerel, sardines), and nut butters. These fats support hormone production, brain health, and slow digestion to keep you full.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-burgundy mb-2 font-roman">3. Smart Timing & Fasting</h3>
            <ul className="list-disc ml-6 space-y-2 text-base text-stone-800">
              <li><span className="font-semibold">Time‑Restricted Eating (TRE):</span> Aim for a 14–16‑hour overnight fast with an 8–10‑hour eating window (e.g., 10 AM–6 PM). This supports metabolic flexibility, insulin sensitivity, and cellular repair (autophagy).</li>
              <li>Build up gradually. If 16/8 feels too harsh, start with 12/12 or 14/10 and tune based on energy, sleep quality, and stress levels.</li>
              <li><span className="font-semibold">Meal spacing:</span> Avoid constant grazing. Try at least 3–4 hours between meals to allow insulin levels to fall and digestion to complete.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-burgundy mb-2 font-roman">4. Hydration & Mineral Balance</h3>
            <ul className="list-disc ml-6 space-y-2 text-base text-stone-800">
              <li><span className="font-semibold">Half your body weight in ounces.</span> (e.g., 160 lb → 80 oz water daily)</li>
              <li><span className="font-semibold">Electrolytes matter.</span> If you’re active or fasting, supplement with a pinch of unrefined sea salt or drink mineral broth to maintain sodium, potassium, and magnesium balance.</li>
              <li><span className="font-semibold">Flavor without sugar.</span> Infuse water with lemon, cucumber, mint, or sip herbal teas (ginger, peppermint, rooibos) for variety and added phytonutrients.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-burgundy mb-2 font-roman">5. Batch Cooking & Strategic Prep</h3>
            <ul className="list-disc ml-6 space-y-2 text-base text-stone-800">
              <li><span className="font-semibold">Cook once, eat all week.</span> Roast or steam big trays of veggies; grill or bake meats and fish; make stews or chili for easy reheating.</li>
              <li><span className="font-semibold">Leverage your freezer.</span> Double recipes and freeze half in individual portions—great for soups, casseroles, and sauces.</li>
              <li><span className="font-semibold">Tools of the trade:</span> Use slow cookers, pressure cookers, or sheet‑pan dinners to minimize active cooking time. Pre‑chop veggies and pre‑marinate proteins for instant meal assembly.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-burgundy mb-2 font-roman">6. Micronutrient Optimization</h3>
            <ul className="list-disc ml-6 space-y-2 text-base text-stone-800">
              <li><span className="font-semibold">Superfood staples:</span> Fermented foods (sauerkraut, kimchi), organ meats, shellfish, and seaweeds. These provide iodine, B vitamins, vitamin K2, and beneficial probiotics.</li>
              <li><span className="font-semibold">Color diversity:</span> Eat the rainbow—red peppers, orange carrots, purple cabbage, green kale, yellow squash, and blue berries—to cover a broad spectrum of antioxidants and polyphenols.</li>
              <li><span className="font-semibold">Supplement thoughtfully:</span> Consider targeted supplements (vitamin D3/K2 in winter, omega‑3s, magnesium) only when blood tests show a need.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-burgundy mb-2 font-roman">7. Personalize & Experiment</h3>
            <ul className="list-disc ml-6 space-y-2 text-base text-stone-800">
              <li><span className="font-semibold">30‑day reset:</span> Remove common trigger foods—grains, legumes, dairy, nightshades—then reintroduce one at a time to gauge tolerance and inflammation.</li>
              <li><span className="font-semibold">Macro tuning:</span> Adjust carb intake up or down based on activity level and goals. Higher‑intensity exercisers may need more safe starches; sedentary individuals may thrive with lower carbs.</li>
              <li><span className="font-semibold">80/20 flexibility:</span> Strive for Paleo‑style eating most of the time, allowing mindful indulgences (e.g., a slice of sourdough at a special dinner) to reduce stress and support long‑term adherence.</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Supplement Sidebar */}
      <aside className="w-full md:w-1/2 bg-marble rounded-3xl shadow-xl border-2 border-burgundy p-8 font-roman h-fit">
        <h3 className="text-2xl font-bold text-burgundy mb-4">Guide Inspired by Chris Kresser's Functional Medicine Philosophy</h3>
        <div className="space-y-6">
          <section>
            <h4 className="text-lg font-bold text-burgundy mb-2">1. Whole Foods First</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm text-stone-800">
              <li><span className="font-semibold">Priority:</span> Aim to meet nutrient needs through a diverse, Paleo‑style diet.</li>
              <li><span className="font-semibold">Why:</span> Whole foods deliver vitamins, minerals, fiber, and phytochemicals in balanced, highly bioavailable forms.</li>
              <li><span className="font-semibold">Supplement Role:</span> Fill specific gaps (e.g., confirmed deficiencies), not replace poor diet.</li>
            </ul>
          </section>

          <section>
            <h4 className="text-lg font-bold text-burgundy mb-2">2. Foundational Supplements</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm text-stone-800">
              <li><span className="font-semibold">Multivitamin:</span> Look for 5‑MTHF (methylfolate) instead of folic acid, avoid gummy versions, and pick third‑party–tested brands with minimal fillers. Target ~100% Daily Value of most nutrients; avoid mega‑doses unless directed.</li>
              <li><span className="font-semibold">Omega‑3s:</span> EPA/DHA support heart, brain, and anti‑inflammatory pathways. Dose: 500–1,000 mg combined EPA+DHA daily (or eat fatty fish 2×/week).</li>
              <li><span className="font-semibold">Vitamin D₃ + K₂:</span> D₃: Crucial for bone health and immune regulation; supplement in winter or low‑sun contexts (1,000–4,000 IU/day). K₂: Directs calcium to bones, not arteries; look for MK‑7 form alongside D₃.</li>
            </ul>
          </section>

          <section>
            <h4 className="text-lg font-bold text-burgundy mb-2">3. Targeted Micronutrients</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm text-stone-800">
              <li><span className="font-semibold">Fat‑Soluble Vitamins:</span> A: From liver, eggs, orange/green produce; essential for vision, immunity. D + K₂: See above.</li>
              <li><span className="font-semibold">Water‑Soluble Vitamins:</span> B‑Complex (methylated): Methylfolate, methylcobalamin, P‑5‑P B6 for energy, mood, methylation. Vitamin C: 500 mg–1 g daily for antioxidant support; use liposomal form during illness for better absorption.</li>
              <li><span className="font-semibold">Major Minerals:</span> Magnesium (glycinate): 200–400 mg at night for muscle, nerve function, and sleep support. Calcium: Best from diet (leafy greens, dairy); supplement only if needed, ≤500 mg/dose with D and K₂. Potassium: Eat high‑K foods (avocado, banana); supplement sparingly under medical guidance.</li>
              <li><span className="font-semibold">Trace Minerals:</span> Iron: Only if deficient; heme sources preferred; dose per blood tests. Zinc: 10–30 mg/day for immune health; short‑term lozenges (≥25 mg/day) can shorten colds. Iodine: 150 μg/day from iodized salt or seaweed for thyroid; avoid excess. Selenium: ~55 μg/day via Brazil nuts or seafood; don’t exceed 200 μg.</li>
            </ul>
          </section>

          <section>
            <h4 className="text-lg font-bold text-burgundy mb-2">4. Condition‑Specific Support</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm text-stone-800">
              <li><span className="font-semibold">Collagen:</span> Supplies glycine/proline for skin, joint, tendon repair. Dose: ~10 g/day, ideally with vitamin C to boost collagen synthesis.</li>
              <li><span className="font-semibold">Immune Boosters:</span> Vitamin C (high‑dose liposomal): 1 g–3 g/day during illness. Elderberry extract: At onset of cold/flu, good to take during allergies also. Oil of oregano: good for allergies, very spicy. Zinc: Also great for colds and sicknesses.</li>
              <li><span className="font-semibold">Sleep Aids:</span> Magnesium glycinate: See above. L‑Theanine: 100–200 mg before bed for relaxation. Melatonin: Short‑term use (0.3–1 mg). This is a hormone your body naturally makes.</li>
              <li><span className="font-semibold">Energy & Cognition:</span> CoQ10: 100–200 mg ubiquinol daily for mitochondrial energy, heart health. Creatine: 3–5 g/day monohydrate for muscle strength and cognitive support.</li>
              <li><span className="font-semibold">Methylation Helpers:</span> 5‑MTHF (folate): 400 μg–1 mg if MTHFR variant or high homocysteine. P‑5‑P B6: 10–25 mg/day to assist neurotransmitter and homocysteine metabolism. Methylcobalamin B12: 1,000 μg sublingual 2–3×/week, especially for vegetarians or absorption issues.</li>
            </ul>
          </section>

          <section>
            <h4 className="text-lg font-bold text-burgundy mb-2">5. Gut Health Essentials</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm text-stone-800">
              <li><span className="font-semibold">Fermented Foods First:</span> Yogurt, kefir, sauerkraut, kimchi.</li>
              <li><span className="font-semibold">Prebiotics:</span> Eat diverse fibers (onion, garlic, asparagus, bananas) rather than relying on inulin powders.</li>
              <li><span className="font-semibold">Glutamine:</span> 5 g/day on an empty stomach if healing gut lining (e.g., leaky gut, IBD remission).</li>
            </ul>
          </section>

          <section>
            <h4 className="text-lg font-bold text-burgundy mb-2">6. Safety & Best Practices</h4>
            <ul className="list-disc ml-5 space-y-1 text-sm text-stone-800">
              <li><span className="font-semibold">One at a Time:</span> Introduce a single supplement and monitor effects for 2–4 weeks before adding another.</li>
              <li><span className="font-semibold">Check Interactions:</span> Always review new supplements with your healthcare provider—many can interact with medications or other nutrients.</li>
              <li><span className="font-semibold">Quality Matters:</span> Choose brands with third‑party testing (USP, NSF, ConsumerLab) and minimal fillers.</li>
              <li><span className="font-semibold">Proper Storage:</span> Keep in a cool, dry place away from light and humidity; refrigerate probiotics or fish oil if directed.</li>
              <li><span className="font-semibold">Reevaluate Regularly:</span> Your needs change—review your regimen annually, discontinue what you no longer need, and adjust doses based on labs or symptoms.</li>
            </ul>
          </section>

          <section>
            <h4 className="text-lg font-bold text-burgundy mb-2">Key Takeaway</h4>
            <p className="text-sm text-stone-800">
              Supplements are tools, not essentials. Ground your nutrition in whole foods, then add targeted support for proven deficiencies or goals. By following a functional, individualized approach—prioritizing safety, quality, and evidence—you harness supplements effectively without replacing the foundational power of a nutrient-rich Paleo diet.
            </p>
          </section>
        </div>
      </aside>
    </div>
  );
}
