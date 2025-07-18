import React from 'react';

export default function PhysicalActivityPage() {
  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto mt-12 gap-8">
      {/* Main Content */}
      <div className="flex-1 bg-marble dark:bg-charcoal rounded-3xl shadow-2xl border-2 border-burgundy p-10 font-roman">
        <h2 className="text-3xl font-bold text-burgundy mb-4">Exercise for Every Body</h2>
        <p className="mb-6 text-lg text-stone-700 dark:text-stone-200 font-semibold">
          Aim for 3–6 sessions per week (3–6 hours total) covering movement, strength, mobility, and recreation.
        </p>
        <ul className="space-y-5 text-base text-stone-800 dark:text-stone-100">
          <li><span className="font-bold">Daily Movement:</span> Walk 15–30 min every day.</li>
          <li><span className="font-bold">Strength (2–3×/week):</span>
            <ul className="ml-5 list-disc">
              <li>Body-weight, chair stands, or bands; increase difficulty over time.</li>
              <li>Optional: Medicine-ball throws or kettlebell swings.</li>
            </ul>
          </li>
          <li><span className="font-bold">Aerobic (2–4×/week):</span>
            <ul className="ml-5 list-disc">
              <li>Low-impact: cycling, swimming, or water aerobics.</li>
              <li>Optional: 1–2 min brisk walks, jogs, or marching in place.</li>
            </ul>
          </li>
          <li><span className="font-bold">Mobility (Daily or 3×/week):</span>
            <ul className="ml-5 list-disc">
              <li>5–10 min stretching or yoga.</li>
              <li>End with deep breathing or foam-rolling.</li>
            </ul>
          </li>
          <li><span className="font-bold">Recreational & Functional (1–2×/week):</span> Dancing, obstacle courses, or primal movement.</li>
          <li><span className="font-bold">Routine:</span> Schedule workouts and use a dedicated space.</li>
          <li><span className="font-bold">Rest & Tracking:</span> Take 1–2 rest days per week. Log your workouts.</li>
        </ul>
      </div>
      {/* Supplement Sidebar */}
      <aside className="w-full md:w-80 flex-shrink-0 bg-marble dark:bg-charcoal rounded-3xl shadow-xl border-2 border-burgundy p-8 font-roman h-fit">
        <h3 className="text-2xl font-bold text-burgundy mb-4">Supplements</h3>
        <ul className="space-y-3 text-base text-stone-800 dark:text-stone-100">
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
