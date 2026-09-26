import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';

const Certificate = () => {
  return (
    <section id="certificate" className="section-padding" style={{ background: 'var(--bg-dark-card)', position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Section Header */}
        <div style={{ maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          <div className="section-badge">
            <Award size={14} style={{ marginRight: '0.4rem', color: 'var(--accent-copper)' }} />
            Official Standards & Compliance
          </div>
          <h2 className="section-title">Certifications & Standards</h2>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            Committed to international quality benchmarks, food safety compliance, and verified export certification.
          </p>
        </div>

        {/* Ready Certificate Frame Container (Clean layout, no placeholder image) */}
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            minHeight: '260px',
            borderRadius: 'var(--radius-lg)',
            border: '2px dashed rgba(200, 122, 88, 0.35)',
            background: 'var(--card-bg-subtle)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2.5rem 1.5rem',
            boxShadow: 'var(--shadow-md)',
            transition: 'all 0.35s ease'
          }}
          className="certificate-frame"
        >
          <div
            style={{
              height: '56px',
              width: '56px',
              borderRadius: '50%',
              background: 'rgba(200, 122, 88, 0.12)',
              border: '1px solid rgba(200, 122, 88, 0.3)',
              color: 'var(--accent-copper-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}
          >
            <ShieldCheck size={28} />
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--text-heading)',
              marginBottom: '0.5rem'
            }}
          >
            Official Export Certificate
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: 'var(--text-light-muted)',
              maxWidth: '520px',
              margin: 0
            }}
          >
            Certificate details and official documentation will be displayed here upon verification.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
