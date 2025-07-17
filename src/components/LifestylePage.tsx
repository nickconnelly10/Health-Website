import React from 'react';

export default function LifestylePage() {
  return (
    <div className="max-w-2xl mx-auto mt-12 bg-marble dark:bg-charcoal rounded-3xl shadow-2xl border-2 border-burgundy p-10 font-roman">
      <h2 className="text-3xl font-bold text-burgundy mb-4">Lifestyle <span className="text-base font-normal">(Andrew Huberman–Inspired)</span></h2>
      <ul className="space-y-5 text-base text-stone-800 dark:text-stone-100">
        <li>
          <span className="font-bold">Morning Sunlight Exposure</span><br />
          Within 10 minutes of waking, get natural light to set your circadian clock and boost alertness and cortisol.
        </li>
        <li>
          <span className="font-bold">Stress Relief Breathwork</span><br />
          Practice the “physiological sigh” (two quick inhales through the nose, slow exhale through the mouth) to calm your nervous system. Focus on nasal breathing throughout the day.
        </li>
        <li>
          <span className="font-bold">Focused Work & Scheduled Breaks</span><br />
          Work in focused blocks (e.g., 50 minutes), then take a short walk, hydrate, or stretch—regular breaks help maintain energy and productivity.
        </li>
        <li>
          <span className="font-bold">Environmental Detox</span><br />
          Choose non-toxic cleaning and personal care products, use glass or stainless containers for food, and avoid exposure to endocrine disruptors.
        </li>
        <li>
          <span className="font-bold">Evening Wind‑Down</span><br />
          Dim lights and avoid screens 60 minutes before bed; try journaling, light exercise, or stretching. Consistency is key for restful sleep.
        </li>
        <li>
          <span className="font-bold">Connection & Purpose</span><br />
          Have at least one meaningful social interaction each week—like a walk with a friend or a call with family—to support well-being and oxytocin.
        </li>
      </ul>
    </div>
  );
} 