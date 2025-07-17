import React from 'react';

export default function NutritionPage() {
  return (
    <div className="max-w-2xl mx-auto mt-12 bg-marble dark:bg-charcoal rounded-3xl shadow-2xl border-2 border-burgundy p-10 font-roman">
      <h2 className="text-3xl font-bold text-burgundy mb-4">Nutrition</h2>
      <p className="mb-6 text-lg text-stone-700 dark:text-stone-200 font-semibold">
        Inspired by <span className="italic">The Paleo Cure</span> by Chris Kresser, you would find you have much more energy throughout the day
      </p>
      <ul className="space-y-5 text-base text-stone-800 dark:text-stone-100">
        <li>
          <span className="font-bold">Shop the Perimeter</span><br/>
          Stick to fresh produce, pasture-raised meats, wild-caught fish, nuts, and other plant/animal foods around the edges of the grocery store. Avoid the middle aisles—those are where added sugars, refined oils, preservatives, and mystery chemicals hide.
        </li>
        <li>
          <span className="font-bold">Nothing with Added Sugar or Chemicals</span><br/>
          Read labels: check for artificial flavors, chemicals, or added sugars. Favor single-ingredient or minimally processed foods.
        </li>
        <li>
          <span className="font-bold">Build Your Plate, Paleo-Style</span>
          <ul className="ml-5 list-disc">
            <li><span className="font-semibold">Vegetables &amp; Fruits:</span> color and variety over quantity—dark leafy greens, cruciferous veggies, berries, sweet potatoes, plantains, winter squash.</li>
            <li><span className="font-semibold">Protein &amp; Fats:</span> pasture-raised chicken or grass-fed beef, wild salmon, free-range eggs, avocado, olives.</li>
          </ul>
        </li>
        <li>
          <span className="font-bold">Hydration First</span><br/>
          Drink plain water throughout the day—aim to sip before you feel thirsty. Herbal teas or mineral-infused water count, too.
        </li>
        <li>
          <span className="font-bold">Supplements Only When Needed</span><br/>
          Whole foods should be your first source of nutrients. Always research a supplement (how it's made, half-life, methylation, and its effects) before taking it.
        </li>
        <li>
          <span className="font-bold">Mindful Eating</span><br/>
          Chew slowly, pause between bites, and notice hunger/fullness cues—your digestive system (and hormones) will thank you.
        </li>
        <li>
          <span className="font-bold">Meal Timing &amp; Fasting</span><br/>
          Finish your last meal at least two hours before bedtime to support digestion and metabolic health.
        </li>
        <li>
          <span className="font-bold">Batch-Cooking</span><br/>
          To save time and avoid fast food, cook in bulk so you always have meals ready to heat and eat.
        </li>
      </ul>
    </div>
  );
}
