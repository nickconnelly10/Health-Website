import React from 'react';

export default function LifestylePage() {
  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto mt-12 gap-6">
      {/* Main Content */}
      <div className="w-full lg:w-3/5 bg-marble rounded-3xl shadow-2xl border-2 border-burgundy p-6 font-roman">
        <h2 className="text-2xl font-bold text-burgundy mb-4 font-roman">Lifestyle – Dawn to Dusk</h2>
        <ul className="space-y-4 text-sm text-stone-800">
          <li>
            <span className="font-bold text-burgundy">Morning Wakefulness</span><br />
            Within 10 minutes of waking, expose yourself to natural light—walk outside, eat breakfast on patio, or read by sunny window. Early sun sets circadian clock, boosts alertness and cortisol.
          </li>
          <li>
            <span className="font-bold text-burgundy">Nutrition Habits</span><br />
            Refer to Nutrition tab for details. Follow 8-hour eating window, focus on whole foods—animal meats, fruits, vegetables, nuts, seeds—avoid processed products.
          </li>
          <li>
            <span className="font-bold text-burgundy">Physical Activity</span><br />
            CDC recommends 150 minutes moderate or 75 minutes vigorous aerobic activity weekly. Build in daily low-intensity movement—walk at dawn or dusk—and aim for one higher-intensity session daily.
          </li>
          <li>
            <span className="font-bold text-burgundy">Connection & Purpose</span><br />
            Aim for one meaningful social interaction daily—walk with friend, call family, share meal. These connections boost well-being and promote oxytocin release.
          </li>
          <li>
            <span className="font-bold text-burgundy">Focused Work & Breaks</span><br />
            Work in concentrated blocks (50 minutes), then pause to walk, hydrate, stretch, or do push-ups. Regular breaks sustain energy and productivity.
          </li>
          <li>
            <span className="font-bold text-burgundy">Environmental Detox</span><br />
            Choose non-toxic cleaning and personal-care products, store food in glass or stainless-steel containers. Avoid plastics—use glass water bottles, natural textiles over synthetic fabrics.
          </li>
          <li>
            <span className="font-bold text-burgundy">Evening Wind-Down</span><br />
            Finish eating 2 hours before bedtime. Dim lights and put away screens 60 minutes before sleep. Unwind with journaling, reading, or gentle stretching.
          </li>
        </ul>
      </div>
      {/* Sidebar */}
      <aside className="w-full lg:w-2/5 bg-marble rounded-3xl shadow-xl border-2 border-burgundy p-6 font-roman h-fit">
        <p className="italic text-stone-700 mb-4 text-sm">"Very little is needed to make a happy life; it is all within yourself, in your way of thinking."<br /><span className="block mt-2 text-right text-xs text-stone-500">—Marcus Aurelius</span></p>
        <h3 className="text-xl font-bold text-burgundy mb-4">Life Balance</h3>
        <ul className="space-y-2 text-sm text-stone-800">
          <li>Physical</li>
          <li>Mental/Emotional</li>
          <li>Spiritual/Purpose</li>
          <li>Career</li>
          <li>Financial</li>
          <li>Environment</li>
          <li>Family/Social</li>
        </ul>
        <p className="text-sm text-stone-700 mt-4">
          Take time weekly to reflect on your thoughts—away from distractions. Think, walk, or write to identify which life areas you may be under-giving to during this season.
        </p>
      </aside>
    </div>
  );
} 