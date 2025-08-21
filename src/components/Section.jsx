import React from 'react';

export default function Section({ id, className = '', children }) {
  return (
    <section
      id={id}
      data-fullpage
      className={`bg-surface min-h-[calc(100dvh-4rem)] px-2 py-4 md:px-10 md:py-12 ${className}`}
    >
      {children}
    </section>
  );
}
