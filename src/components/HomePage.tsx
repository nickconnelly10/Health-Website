import React from 'react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] max-w-2xl mx-auto mt-16 bg-marble rounded-3xl shadow-2xl border-2 border-burgundy p-10 font-roman">
      <h1 className="text-3xl font-bold text-burgundy mb-6 font-roman">Welcome to health.muscadine.box</h1>
      <div className="mb-4 p-6 bg-burgundy/10 border-2 border-burgundy rounded-2xl text-burgundy font-roman text-lg text-center">
        For questions, more in-depth details, or if you want to add more to our directory, contact me at
        <a href="mailto:nickconnelly10@gmail.com" className="underline ml-1">nickconnelly10@gmail.com</a>.
      </div>
    </div>
  );
} 