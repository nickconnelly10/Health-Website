import React from 'react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] max-w-2xl mx-auto mt-16 bg-white rounded-3xl shadow-2xl border border-stone-200 p-10">
      <h1 className="text-3xl font-bold text-stone-900 mb-6">Welcome to health.muscadine.box</h1>
      <div className="mb-4 p-6 bg-stone-100 border border-stone-300 rounded-2xl text-stone-800 text-lg text-center">
        For questions, more in-depth details, or if you want to add more to our directory, contact me at
        <a href="mailto:nickconnelly10@gmail.com" className="underline ml-1">nickconnelly10@gmail.com</a>.
      </div>
    </div>
  );
} 