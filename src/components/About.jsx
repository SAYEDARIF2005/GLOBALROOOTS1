import React, { useEffect, useRef, useState } from 'react';
import { Sprout, Users, ShieldCheck, PackageCheck, Truck, Anchor, Award, Globe2 } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      title: 'Agricultural Sourcing',
      desc: 'Direct sourcing of high-grade raw spices, chillies, turmeric, and coffee from fertile regions across India.',
      icon: Sprout
    },
    {
      title: 'Farmer Relationships',
      desc: 'Building long-term, dependable partnerships with local farming communities and trusted growers.',
      icon: Users
    },
    {
      title: 'Quality-Focused Selection',
      desc: 'Rigorous manual and multi-stage quality selection ensuring uniform color, aroma, and purity.',
      icon: ShieldCheck
    },
    {
      title: 'Product Handling & Packing',
      desc: 'Clean processing, moisture control, and export-ready protective packaging to preserve freshness.',
      icon: PackageCheck
    },
    {
      title: 'Reliable Local Logistics',
      desc: 'Coordinated inland transportation from agricultural hubs directly to port facilities.',
      icon: Truck
    },
    {
      title: 'International Transportation',
      desc: 'Seamless ocean container freight coordination with global logistics carriers.',
      icon: Anchor
    },
    {
      title: 'Export Coordination',
      desc: 'Full management of documentation, compliance, customs, and port clearance procedures.',
      icon: Award
    },
    {
      title: 'Global Supply Network',
      desc: 'Delivering India’s finest agricultural products directly to global importers and distributors.',
      icon: Globe2
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="section-padding" style={{ background: 'var(--bg-dark-card)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">About GLOBAL ROOOTS</div>
          <h2 className="section-title">Rooted in India. Connected Globally.</h2>
        </div>

        {/* 2-Column Hero Grid: Agriculture Goods Image & Mission Details */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
            marginBottom: '4.5rem'
          }}
        >
          {/* Left Column: Agriculture Goods Image with Subtle Viewport Entrance Animation */}
          <div
            style={{
              position: 'relative',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(18px) scale(0.98)',
              transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-dark)',
                height: '380px',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.2rem'
              }}
            >
              <img
                src="assets/global_rooots_about_logo.jpg"
                alt="GLOBAL ROOOTS Corporate Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  transition: 'transform 0.6s ease'
                }}
              />
            </div>
          </div>

          {/* Right Column: Required Business & Quality Statement Content */}
          <div>
            {/* Supporting Paragraph */}
            <p style={{ color: 'var(--text-light-muted)', fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              GLOBAL ROOOTS connects India's agricultural heritage with opportunities across global markets. We work with trusted sources to bring quality products from India to international customers while building reliable, long-term trade relationships.
            </p>

            {/* Strong Quality Statement Box */}
            <div
              style={{
                background: 'rgba(200, 122, 88, 0.08)',
                borderLeft: '4px solid var(--accent-copper)',
                padding: '1.2rem 1.5rem',
                borderRadius: '0 12px 12px 0',
                marginBottom: '1.5rem'
              }}
            >
              <h3
                style={{
                  fontSize: '1.18rem',
                  fontWeight: 800,
                  color: 'var(--text-light)',
                  lineHeight: 1.4,
                  margin: 0
                }}
              >
                At GLOBAL ROOOTS, quality is our highest priority — without compromise, without exception.
              </h3>
            </div>

            {/* Additional Supporting Text */}
            <p style={{ color: 'var(--text-light-muted)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              From careful sourcing to final delivery, we maintain uncompromising standards to ensure every product represents the trust and reliability of our company.
            </p>

            {/* Closing Line */}
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--accent-copper-light)',
                letterSpacing: '0.02em',
                lineHeight: 1.5
              }}
            >
              From trusted Indian origins to global destinations, we connect quality, reliability and opportunity.
            </p>
          </div>
        </div>

        {/* 8-Card Pillar Matrix */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '1.5rem'
          }}
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                style={{
                  background: 'var(--card-bg)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  border: '1px solid var(--border-card)',
                  boxShadow: 'var(--card-shadow)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'var(--accent-copper)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-card)';
                }}
              >
                <div
                  style={{
                    height: '46px',
                    width: '46px',
                    borderRadius: '12px',
                    background: 'var(--badge-bg)',
                    color: 'var(--accent-copper)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    border: '1px solid var(--badge-border)'
                  }}
                >
                  <Icon size={22} />
                </div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-light-muted)', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
