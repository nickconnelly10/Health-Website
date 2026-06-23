import React from 'react';

type PageHeroProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function PageHero({ title, description, children }: PageHeroProps) {
  return (
    <section className="pt-28 md:pt-32 pb-12 md:pb-16 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto container-padding text-center animate-fade-in">
        <h1 className="font-light text-gray-800 leading-tight mb-6">{title}</h1>
        {description && (
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}
