import React from 'react';

export default function Section({ title, className, children, ...rest }) {
  return (
    <section {...rest} className={'section ' + className}>
      <h1 className="section-title">{title}</h1>
      {children}
    </section>
  );
}
