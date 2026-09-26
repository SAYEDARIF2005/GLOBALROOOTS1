import React, { useState, useEffect } from 'react';
import { ArrowRight, Compass, ShieldCheck, Ship, Sprout, Truck, Anchor, Globe, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const supplyJourney = [
    { label: 'Indian Farm', icon: Sprout, text: 'Direct Origin' },
    { label: 'Farmer Sourcing', icon: ShieldCheck, text: 'Trusted Partnerships' },
    { label: 'Quality Selection', icon: CheckCircle2, text: 'Strict Inspection' },
    { label: 'Processing & Packing', icon: Compass, text: 'Export Ready' },
    { label: 'Local Logistics', icon: Truck, text: 'Secure Transit' },
    { label: 'Port Handling', icon: Anchor, text: 'Customs & Clearance' },
    { label: 'Cargo Shipping', icon: Ship, text: 'Maritime Export' },
    { label: 'Global Destination', icon: Globe, text: 'Worldwide Delivery' }
  ];

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '7rem',
        paddingBottom: '4rem',
        overflow: 'hidden',
        background: '#071522'
      }}
    >
      {/* Realistic 3D Shipping Port Background Image with Mouse Parallax Tilt */}
      <div
        style={{
          position: 'absolute',
          inset: '-5%',
          backgroundImage: `url('assets/maritime_port.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `perspective(1000px) rotateY(${mousePos.x * 3}deg) rotateX(${-mousePos.y * 3}deg) scale(1.06)`,
          transition: 'transform 0.15s ease-out',
          filter: 'brightness(0.7) contrast(1.1)'
        }}
      />

      {/* Dark Dual Gradient Overlay for Readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 50% 30%, rgba(7, 21, 34, 0.65) 0%, rgba(7, 21, 34, 0.94) 85%)`,
          pointerEvents: 'none'
        }}
      />

      {/* Decorative Glow Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'rgba(200, 122, 88, 0.2)',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          transform: `translateX(${mousePos.x * -10}px) translateY(${mousePos.y * -10}px)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center' }}>
          {/* Brand Concept Tag */}
          <div className="section-badge animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span>Rooted in India. Connected to the World.</span>
          </div>

          {/* Main Headline */}
          <h1
            className="animate-fade-in"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#F8FAFC',
              marginBottom: '1.5rem',
              animationDelay: '0.2s'
            }}
          >
            Finest Products Sourced from India,{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, var(--accent-copper) 0%, var(--accent-gold) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              Delivered Worldwide
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-in"
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: '#94A3B8',
              lineHeight: 1.6,
              maxWidth: '780px',
              margin: '0 auto 2.5rem auto',
              fontWeight: 400,
              animationDelay: '0.3s'
            }}
          >
            Connecting India's agricultural excellence with global markets through trusted sourcing, quality-focused processes and reliable international logistics.
          </p>

          {/* Centered Hero CTA Button */}
          <div
            className="animate-fade-in"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '4.5rem',
              animationDelay: '0.4s'
            }}
          >
            <a href="#products" className="btn-primary" style={{ padding: '1rem 2.2rem', fontSize: '1.05rem' }}>
              Explore Our Products
              <ArrowRight size={19} />
            </a>
          </div>
        </div>

        {/* Blank Spacer Container preserving exact height and spacing */}
        <div
          style={{
            minHeight: '120px'
          }}
        />
      </div>
    </section>
  );
};

export default Hero;


