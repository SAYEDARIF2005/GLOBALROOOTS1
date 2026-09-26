import React, { useState } from 'react';
import { Sprout, UserCheck, PackageCheck, Truck, ShieldCheck, Anchor, Ship, Globe2, ChevronRight } from 'lucide-react';

const FarmToGlobal = () => {
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    {
      id: 'farm',
      title: 'Indian Farm Origin',
      subtitle: 'Fertile Agricultural Belts',
      desc: 'Sourced directly from India’s prime agricultural regions, ensuring natural soil richness and crop purity.',
      icon: Sprout,
      highlight: 'Origin Selection'
    },
    {
      id: 'farmer',
      title: 'Farmer Partnership',
      subtitle: 'Direct Partner Network',
      desc: 'Collaborating directly with verified farmers to ensure fair trade practices and harvest consistency.',
      icon: UserCheck,
      highlight: 'Direct Sourcing'
    },
    {
      id: 'prep',
      title: 'Product Preparation',
      subtitle: 'Cleaning & Packaging',
      desc: 'Careful sorting, moisture-controlled drying, and bagging in export-grade protective packaging.',
      icon: PackageCheck,
      highlight: 'Export Ready'
    },
    {
      id: 'lorry',
      title: 'Inland Transport',
      subtitle: 'Secured Truck Movement',
      desc: 'Covered truck transit from agricultural hubs to inland container depots and coastal port terminals.',
      icon: Truck,
      highlight: 'Safe Transit'
    },
    {
      id: 'handling',
      title: 'Export Handling',
      subtitle: 'Customs & Documentation',
      desc: 'Full documentation processing, port inspection, phytosanitary verification, and customs clearances.',
      icon: ShieldCheck,
      highlight: 'Compliant Clearance'
    },
    {
      id: 'port',
      title: 'Port Terminal',
      subtitle: 'Maritime Loading',
      desc: 'Container terminal staging, container stuffing, and crane loading onto ocean vessel carriers.',
      icon: Anchor,
      highlight: 'Port Dispatch'
    },
    {
      id: 'ship',
      title: 'Cargo Shipping',
      subtitle: 'International Freight',
      desc: 'Ocean transit across international maritime routes connecting Indian ports to overseas destination ports.',
      icon: Ship,
      highlight: 'Global Logistics'
    },
    {
      id: 'customer',
      title: 'Global Customer',
      subtitle: 'Final Destination Delivery',
      desc: 'Smooth destination arrival and port handover to international importers, distributors, and food brands.',
      icon: Globe2,
      highlight: 'Worldwide Supply'
    }
  ];

  return (
    <section id="process" className="section-padding" style={{ background: 'var(--bg-dark)', position: 'relative', overflow: 'hidden' }}>
      {/* Background Graphic Lines */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(200, 122, 88, 0.3), transparent)',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-badge">Signature Supply Chain</div>
          <h2 className="section-title">From Farm to Global Destination</h2>
          <p className="section-subtitle">
            Track the uninterrupted journey of Indian agricultural products as GLOBAL ROOOTS seamlessly manages every step from rural farms to international destination ports.
          </p>
        </div>

        {/* Step Nodes Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 120px), 1fr))',
            gap: '1rem',
            marginBottom: '3rem'
          }}
        >
          {journeySteps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                style={{
                  background: isActive
                    ? 'linear-gradient(145deg, rgba(200, 122, 88, 0.25) 0%, var(--card-bg) 100%)'
                    : 'var(--card-bg)',
                  border: isActive
                    ? '2px solid var(--accent-copper)'
                    : '1px solid var(--border-card)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.2rem 0.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: isActive
                    ? '0 10px 25px rgba(200, 122, 88, 0.3)'
                    : 'var(--card-shadow)',
                  position: 'relative',
                  cursor: 'pointer'
                }}
              >
                <div
                  style={{
                    height: '48px',
                    width: '48px',
                    borderRadius: '50%',
                    backgroundColor: isActive
                      ? 'var(--accent-copper)'
                      : 'var(--badge-bg)',
                    color: isActive ? '#FFFFFF' : 'var(--accent-copper)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.8rem',
                    transition: 'all 0.3s ease',
                    border: isActive ? 'none' : '1px solid var(--badge-border)'
                  }}
                >
                  <Icon size={24} />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: 'var(--text-light)',
                    lineHeight: 1.2,
                    marginBottom: '0.3rem'
                  }}
                >
                  {step.title}
                </span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: isActive ? 'var(--accent-copper)' : 'var(--text-light-muted)'
                  }}
                >
                  Step 0{idx + 1}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Feature Display Card */}
        {journeySteps[activeStep] && (
          <div
            style={{
              backgroundColor: 'var(--card-bg)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-card)',
              padding: '2.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '2rem',
              alignItems: 'center',
              boxShadow: 'var(--card-shadow)'
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-block',
                  padding: '0.35rem 0.9rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--badge-bg)',
                  color: 'var(--accent-copper)',
                  border: '1px solid var(--badge-border)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  marginBottom: '1rem'
                }}
              >
                {journeySteps[activeStep].highlight}
              </div>
              <h3 style={{ fontSize: '2.2rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>
                {journeySteps[activeStep].title}
              </h3>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-copper)', marginBottom: '1rem', fontWeight: 600 }}>
                {journeySteps[activeStep].subtitle}
              </h4>
              <p style={{ color: 'var(--text-light-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {journeySteps[activeStep].desc}
              </p>

              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  style={{
                    padding: '0.7rem 1.4rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--btn-secondary-bg)',
                    color: activeStep === 0 ? 'var(--text-light-muted)' : 'var(--text-light)',
                    border: '1px solid var(--btn-secondary-border)',
                    cursor: activeStep === 0 ? 'not-allowed' : 'pointer',
                    opacity: activeStep === 0 ? 0.5 : 1,
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600
                  }}
                >
                  Previous Step
                </button>
                <button
                  disabled={activeStep === journeySteps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(journeySteps.length - 1, prev + 1))}
                  style={{
                    padding: '0.7rem 1.4rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: activeStep === journeySteps.length - 1 ? 'var(--btn-secondary-bg)' : 'var(--accent-copper)',
                    color: activeStep === journeySteps.length - 1 ? 'var(--text-light-muted)' : '#FFFFFF',
                    border: 'none',
                    cursor: activeStep === journeySteps.length - 1 ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    boxShadow: activeStep === journeySteps.length - 1 ? 'none' : '0 6px 20px rgba(200, 122, 88, 0.3)'
                  }}
                >
                  Next Step
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Visual Icon Illustration */}
            <div
              style={{
                height: '240px',
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, rgba(10, 37, 64, 0.8) 0%, rgba(7, 21, 39, 0.9) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                position: 'relative'
              }}
            >
              {React.createElement(journeySteps[activeStep].icon, {
                size: 72,
                style: { color: 'var(--accent-copper-light)' }
              })}
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: '#FFFFFF', fontWeight: 600 }}>
                Stage 0{activeStep + 1} of 08
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FarmToGlobal;
