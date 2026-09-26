import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="section-padding" style={{ background: 'var(--bg-dark)', borderTop: '1px solid var(--border-card)' }}>
      <div className="container">
        <div
          style={{
            background: 'var(--card-bg)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-card)',
            padding: '4rem 2rem',
            textAlign: 'center',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '500px',
              height: '300px',
              background: 'rgba(200, 122, 88, 0.12)',
              filter: 'blur(90px)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '780px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                color: 'var(--text-light)',
                lineHeight: 1.2,
                marginBottom: '1.2rem'
              }}
            >
              Bring India's Finest Agricultural Products to Your Market
            </h2>
            <p
              style={{
                fontSize: '1.15rem',
                color: 'var(--text-light-muted)',
                lineHeight: 1.6,
                marginBottom: '2.5rem'
              }}
            >
              Connect with GLOBAL ROOOTS for quality-focused agricultural sourcing and international supply.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', justifyContent: 'center' }}>
              <a href="#contact" className="btn-primary">
                Contact GLOBAL ROOOTS
                <Mail size={18} />
              </a>
              <a href="#products" className="btn-secondary">
                Explore Products
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
