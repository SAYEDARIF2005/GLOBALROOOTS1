import React, { useState } from 'react';
import { Sprout, CheckCircle, Search, Cpu, Box, ShieldAlert, Ship } from 'lucide-react';

const QualityProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stages = [
    {
      number: '01',
      title: 'Farmer Sourcing',
      desc: 'Direct engagement with growers and agricultural partners across India’s core farming regions to select harvest batches.',
      icon: Sprout,
      detail: 'Establishing direct relationships ensures complete origin traceability and agricultural integrity from harvest.'
    },
    {
      number: '02',
      title: 'Product Selection',
      desc: 'Careful screening of raw agricultural yield based on physical parameters, moisture levels, color ASTA, and seed size.',
      icon: Search,
      detail: 'Only batches meeting precise physical uniformity standards advance to the preparation phase.'
    },
    {
      number: '03',
      title: 'Quality Inspection',
      desc: 'Comprehensive multi-point batch inspection evaluating purity, cleanliness, aroma, and moisture balance.',
      icon: CheckCircle,
      detail: 'Multi-stage visual and manual sampling prevents substandard yield from entering export processing.'
    },
    {
      number: '04',
      title: 'Processing & Preparation',
      desc: 'Controlled drying, de-stoning, sifting, and cleaning to ready the products for international shipping.',
      icon: Cpu,
      detail: 'Clean processing facilities preserve essential oils and prevent product degradation during transit.'
    },
    {
      number: '05',
      title: 'Packaging',
      desc: 'Packing in export-standard double jute sacks, multi-wall Kraft paper bags, or food-grade HDPE liners.',
      icon: Box,
      detail: 'Protective moisture-barrier packaging ensures freshness and aroma retention over long ocean voyages.'
    },
    {
      number: '06',
      title: 'Final Quality Check',
      desc: 'Pre-shipment container loading inspection ensuring sealed integrity and proper palletization.',
      icon: ShieldAlert,
      detail: 'Final visual verification before sealing ocean freight containers at the port facility.'
    },
    {
      number: '07',
      title: 'Export & Delivery',
      desc: 'Seamless port clearance, phytosanitary & customs documentation, and international shipping to target markets.',
      icon: Ship,
      detail: 'End-to-end logistics coordination guarantees reliable delivery to international ports.'
    }
  ];

  return (
    <section id="quality" className="section-padding" style={{ background: 'var(--bg-dark-card)', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-badge">Quality Assurance</div>
          <h2 className="section-title">Quality Begins at the Source</h2>
          <p className="section-subtitle">
            Every product supplied by GLOBAL ROOOTS undergoes a disciplined 7-stage quality journey, safeguarding product purity and supply consistency from Indian farm to international port.
          </p>
        </div>

        {/* 7-Step Interactive Process Timeline */}
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    backgroundColor: isSelected ? 'rgba(200, 122, 88, 0.08)' : 'var(--card-bg)',
                    border: isSelected ? '1px solid var(--accent-copper)' : '1px solid var(--border-card)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.5rem 1.8rem',
                    boxShadow: 'var(--card-shadow)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    display: 'grid',
                    gridTemplateColumns: 'auto 1fr auto',
                    gap: '1.5rem',
                    alignItems: 'center'
                  }}
                >
                  {/* Step Number & Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.2rem',
                        fontWeight: 800,
                        color: isSelected ? 'var(--accent-copper)' : 'var(--text-light-muted)',
                        width: '32px'
                      }}
                    >
                      {stage.number}
                    </span>
                    <div
                      style={{
                        height: '44px',
                        width: '44px',
                        borderRadius: '10px',
                        background: isSelected ? 'var(--accent-copper)' : 'var(--btn-secondary-bg)',
                        color: isSelected ? '#FFFFFF' : 'var(--accent-copper)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3
                      style={{
                        fontSize: '1.2rem',
                        color: isSelected ? 'var(--accent-copper)' : 'var(--text-light)',
                        marginBottom: '0.3rem'
                      }}
                    >
                      {stage.title}
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-light-muted)', lineHeight: 1.5 }}>
                      {stage.desc}
                    </p>
                    {isSelected && (
                      <div
                        style={{
                          marginTop: '0.8rem',
                          paddingTop: '0.8rem',
                          borderTop: '1px dashed rgba(200, 122, 88, 0.3)',
                          fontSize: '0.88rem',
                          color: 'var(--accent-copper)',
                          lineHeight: 1.5
                        }}
                      >
                        💡 <strong>Focus:</strong> {stage.detail}
                      </div>
                    )}
                  </div>

                  {/* Indicator */}
                  <div
                    style={{
                      height: '10px',
                      width: '10px',
                      borderRadius: '50%',
                      background: isSelected ? 'var(--accent-copper)' : 'rgba(200, 122, 88, 0.2)',
                      boxShadow: isSelected ? '0 0 10px var(--accent-copper)' : 'none'
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityProcess;
