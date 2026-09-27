import React from 'react';
import { ArrowRight, Compass, Globe } from 'lucide-react';

const SignatureBanner = () => {
  return (
    <section
      style={{
        position: 'relative',
        padding: '8rem 0',
        overflow: 'hidden',
        background: 'var(--bg-dark-card)',
        borderTop: '1px solid var(--border-dark)',
        borderBottom: '1px solid var(--border-dark)'
      }}
    >
      {/* Background Graphic Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(90deg, rgba(200, 122, 88, 0.05) 1px, transparent 1px), linear-gradient(rgba(200, 122, 88, 0.05) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.7,
          pointerEvents: 'none'
        }}
      />

      {/* Decorative Glow Elements */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 122, 88, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(80px)'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div
            style={{
              height: '60px',
              width: '60px',
              borderRadius: '50%',
              background: 'rgba(200, 122, 88, 0.15)',
              color: 'var(--accent-copper-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.8rem auto',
              border: '1px solid rgba(200, 122, 88, 0.3)',
              boxShadow: '0 0 30px rgba(200, 122, 88, 0.2)'
            }}
          >
            <Globe size={32} />
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              color: 'var(--text-light)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem'
            }}
          >
            "Rooted in India.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, var(--accent-copper-light) 0%, var(--accent-gold) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Connected to the World."
            </span>
          </h2>

          <p
            style={{
              fontSize: '1.2rem',
              color: 'var(--text-light-muted)',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto 2.5rem auto'
            }}
          >
            Bridging Indian agricultural growers with international commercial markets through trusted sourcing integrity, quality standards, and ocean freight logistics.
          </p>

          <a href="#contact" className="btn-primary">
            Partner With GLOBAL ROOOTS
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignatureBanner;
