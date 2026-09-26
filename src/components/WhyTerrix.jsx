import React from 'react';

const WhyTerrix = () => {
  return (
    <section className="section-padding" style={{ background: 'var(--bg-dark)', position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div className="section-badge">Core Advantages</div>
          <h2 className="section-title" style={{ marginBottom: '1.8rem' }}>
            Why Partner With GLOBAL ROOOTS
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.05rem, 1.8vw, 1.22rem)',
              lineHeight: 1.75,
              color: 'var(--text-light-muted)',
              fontWeight: 450,
              letterSpacing: '0.01em',
              margin: '0 auto',
              maxWidth: '800px'
            }}
          >
            GLOBAL ROOOTS connects trusted Indian agricultural producers with global markets through responsible sourcing, careful quality selection, reliable logistics, and transparent trade. We focus on delivering authentic products with consistency, integrity, and long-term value to our international partners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyTerrix;
