import React from 'react';

export default function PhysicalActivityPage() {
  return (
    <div className="max-w-2xl mx-auto mt-12 bg-marble dark:bg-charcoal rounded-3xl shadow-2xl border-2 border-burgundy p-10 font-roman">
      <h2 className="text-3xl font-bold text-burgundy mb-4">Exercise for Every Body</h2>
      <p className="mb-6 text-lg text-stone-700 dark:text-stone-200 font-semibold">
        Aim for 3–6 sessions per week (3–6 hours total), blending movement, strength, mobility, and playful activities. Build a consistent habit for lasting health and well-being:
      </p>
      <ul className="space-y-5 text-base text-stone-800 dark:text-stone-100">
        <li>
          <span className="font-bold">Daily Movement & Habit Building</span><br />
          Commit to a 15–30 min walk every day—making it a non‑negotiable “anchor habit” sets the tone for consistency and overall well-being.
        </li>
        <li>
          <span className="font-bold">Strength & Progressive Challenge (2–3×/week)</span>
          <ul className="ml-5 list-disc">
            <li><span className="font-semibold">Accessible Resistance:</span> body-weight push-ups, chair stands, or resistance bands; gradually increase reps, tempo, or load to keep progressing.</li>
            <li><span className="font-semibold">Optional Power Moves:</span> medicine-ball throws or kettlebell swings; scale intensity to your fitness level for safe power gains.</li>
          </ul>
        </li>
        <li>
          <span className="font-bold">Aerobic Variety & Enjoyment (2–4×/week)</span>
          <ul className="ml-5 list-disc">
            <li><span className="font-semibold">Low-Impact Options:</span> cycling, swimming, or water aerobics to elevate heart rate without stressing joints.</li>
            <li><span className="font-semibold">Optional Intervals:</span> add 1–2 min brisk walks, light jogs, or marching in place as playful bursts to boost cardio.</li>
          </ul>
        </li>
        <li>
          <span className="font-bold">Mobility, Flexibility & Recovery (Daily or 3×/week)</span>
          <ul className="ml-5 list-disc">
            <li><span className="font-semibold">Gentle Stretching:</span> 5–10 min of full-body stretches or yoga flow to maintain range of motion and reduce injury risk.</li>
            <li><span className="font-semibold">Mindful Cool-Down:</span> finish each session with deep breathing and gentle foam-rolling to support recovery.</li>
          </ul>
        </li>
        <li>
          <span className="font-bold">Play & Functional Movement (1–2×/week)</span><br />
          Add playful activities—dancing, obstacle courses, or primal movement drills—to keep your routine fun and neurologically engaging.
        </li>
        <li>
          <span className="font-bold">Routine & Environment</span><br />
          Schedule workouts at consistent times and create a dedicated space—at home or outdoors—to reinforce your habit loop.
        </li>
        <li>
          <span className="font-bold">Rest, Reflection & Progress Tracking</span>
          <ul className="ml-5 list-disc">
            <li>Take 1–2 rest or active-recovery days per week (easy walk, gentle yoga).</li>
            <li>Log your workouts (app, journal, or spreadsheet) to celebrate progress and adjust your plan.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
