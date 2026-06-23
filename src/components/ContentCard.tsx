import React from 'react';

type ContentCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export default function ContentCard({
  children,
  className = '',
  hover = false,
}: ContentCardProps) {
  return (
    <div
      className={`content-card ${hover ? 'content-card-hover' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
