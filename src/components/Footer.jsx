import React, { useEffect, useRef } from 'react';
import { ArrowUp, MapPin, Phone, Mail, ChevronRight, Globe, Instagram, Youtube, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const canvasRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Subtle AI-Style Global Connectivity Constellation Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(Math.floor(width / 35), 35);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 1
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200, 122, 88, 0.35)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(200, 122, 88, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const googleMapUrl =
    'https://maps.google.com/?q=24C-12-92,+SEVENTH+ROAD,+MOTHEVARI+THOTA,+ELURU+-+534002,+Andhra+Pradesh,+INDIA';

  const usefulLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Terms of service', href: '#home' },
    { name: 'Privacy policy', href: '#home' }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' }
  ];

  return (
    <footer
      style={{
        backgroundColor: 'var(--footer-bg)',
        color: 'var(--footer-text-muted)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border-dark)',
        transition: 'background-color 0.35s ease'
      }}
    >
      {/* Background AI Connectivity Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.7,
          zIndex: 1
        }}
      />

      {/* Main Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '4.5rem', paddingBottom: '2.5rem' }}>
        
        {/* Brand Tagline Header Banner */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            paddingBottom: '3rem',
            marginBottom: '3.5rem',
            borderBottom: '1px solid rgba(200, 122, 88, 0.18)'
          }}
        >
          {/* Logo & Name */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
            <div
              style={{
                height: '48px',
                width: '48px',
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#FFFFFF',
                padding: '3px',
                boxShadow: '0 4px 16px rgba(200, 122, 88, 0.3)',
                border: '1.5px solid var(--accent-copper)'
              }}
            >
              <img src="/assets/global_rooots_logo.jpg" alt="GLOBAL ROOOTS Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 850, color: 'var(--footer-text)', letterSpacing: '0.08em', lineHeight: 1 }}>
                GLOBA<span style={{ color: 'var(--accent-copper-light)', fontWeight: 900 }}>L</span>
              </span>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.68rem', fontWeight: 700, color: 'var(--accent-copper-light)', letterSpacing: '0.24em', marginTop: '3px' }}>
                ROOOTS
              </span>
            </div>
          </a>

          {/* Elegant Tagline */}
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              fontWeight: 700,
              color: 'var(--accent-copper-light)',
              letterSpacing: '0.04em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}
          >
            <Globe size={18} style={{ color: 'var(--accent-copper)' }} />
            <span>"Rooted in India. Reaching the World."</span>
          </div>
        </div>

        {/* 4-Column Professional Multi-Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* COLUMN 1: COMPANY DETAILS */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                fontWeight: 800,
                color: 'var(--footer-text)',
                marginBottom: '1.4rem',
                letterSpacing: '0.05em'
              }}
            >
              GLOBAL ROOOTS
            </h3>

            {/* Address */}
            <div style={{ marginBottom: '1.4rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <MapPin size={18} style={{ color: 'var(--accent-copper)', flexShrink: 0, marginTop: '3px' }} />
              <a
                href={googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Open Address in Google Maps"
                className="footer-contact-link"
                style={{
                  color: 'var(--footer-text-muted)',
                  lineHeight: 1.6,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  transition: 'color 0.25s ease'
                }}
              >
                24C-12-92,<br />
                SEVENTH ROAD,<br />
                MOTHEVARI THOTA,<br />
                ELURU - 534002,<br />
                Andhra Pradesh,<br />
                INDIA.
              </a>
            </div>

            {/* Phone */}
            <div style={{ marginBottom: '1.2rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Phone size={18} style={{ color: 'var(--accent-copper)', flexShrink: 0, marginTop: '3px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <a
                  href="tel:+918688228899"
                  className="footer-contact-link"
                  style={{ color: 'var(--footer-text-muted)', fontSize: '0.92rem', textDecoration: 'none', transition: 'color 0.25s ease' }}
                >
                  <strong style={{ color: 'var(--footer-text)', fontWeight: 600 }}>Phone:</strong> +91 8688228899
                </a>
                <a
                  href="tel:+917569141944"
                  className="footer-contact-link"
                  style={{ color: 'var(--footer-text-muted)', fontSize: '0.92rem', textDecoration: 'none', transition: 'color 0.25s ease' }}
                >
                  <strong style={{ color: 'var(--footer-text)', fontWeight: 600 }}>Phone:</strong> +91 75691 41944
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: USEFUL LINKS */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.15rem',
                fontWeight: 800,
                color: 'var(--footer-text)',
                marginBottom: '1.4rem',
                letterSpacing: '0.04em'
              }}
            >
              Useful Links
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {usefulLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="footer-nav-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--footer-text-muted)',
                    fontSize: '0.94rem',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <ChevronRight size={14} style={{ color: 'var(--accent-copper)' }} />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 3: SOCIAL MEDIA */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.15rem',
                fontWeight: 800,
                color: 'var(--footer-text)',
                marginBottom: '1.4rem',
                letterSpacing: '0.04em'
              }}
            >
              Social Media
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {socialLinks.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      color: 'var(--footer-text-muted)',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'rgba(200, 122, 88, 0.12)',
                        border: '1px solid rgba(200, 122, 88, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-copper-light)',
                        flexShrink: 0,
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <IconComponent size={20} />
                    </div>
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* COLUMN 4: LET'S TRADE */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.15rem',
                fontWeight: 800,
                color: 'var(--footer-text)',
                marginBottom: '1.4rem',
                letterSpacing: '0.04em'
              }}
            >
              LET'S TRADE
            </h3>
            <h4
              style={{
                fontWeight: 800,
                color: 'var(--footer-text)',
                fontSize: '1rem',
                marginBottom: '0.6rem',
                lineHeight: 1.3
              }}
            >
              “Rooted in Quality. Growing Across Borders.”
            </h4>
            <p style={{ color: 'var(--footer-text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.6rem' }}>
              Connect with GLOBAL ROOOTS for quality agricultural products, reliable sourcing, and global trade opportunities.
            </p>
            <p style={{ color: 'var(--footer-text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
              Share your requirements and destination market with us. Our team will work with you to explore the right sourcing opportunity.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Mail size={16} style={{ color: 'var(--accent-copper)' }} />
              <a
                href="mailto:info@globalrooots.in"
                className="footer-contact-link"
                style={{ color: 'var(--accent-copper-light)', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}
              >
                Email us: info@globalrooots.in
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER SECTION (SOCIAL ICONS & CENTERED 2-LINE COPYRIGHT) */}
        <div
          style={{
            borderTop: '1px solid rgba(200, 122, 88, 0.2)',
            paddingTop: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative'
          }}
        >


          {/* Centered Copyright, Rights & Attribution Text */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem', textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--footer-text)',
                letterSpacing: '0.02em',
                margin: 0
              }}
            >
              © 2026 GLOBAL ROOOTS. All Rights Reserved.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.88rem',
                fontWeight: 500,
                color: 'var(--footer-text-muted)',
                letterSpacing: '0.02em',
                margin: 0
              }}
            >
              Rooted in India. Reaching the World.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--accent-copper-light)',
                letterSpacing: '0.04em',
                margin: 0
              }}
            >
              Crafted by{' '}
              <a
                href="https://www.linkedin.com/in/sayedarif2005?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                  fontWeight: 'inherit'
                }}
              >
                SAYED ARIF(SIL)
              </a>
            </p>
          </div>

          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{
              position: 'absolute',
              right: 0,
              bottom: '0.5rem',
              height: '42px',
              width: '42px',
              borderRadius: '50%',
              backgroundColor: 'rgba(200, 122, 88, 0.12)',
              color: 'var(--accent-copper-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(200, 122, 88, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.backgroundColor = 'var(--accent-copper)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = 'rgba(200, 122, 88, 0.12)';
              e.currentTarget.style.color = 'var(--accent-copper-light)';
            }}
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>

      {/* Styled Micro-Interactions */}
      <style>{`
        .footer-contact-link:hover {
          color: var(--accent-copper-light) !important;
          text-decoration: underline !important;
        }
        .footer-nav-link:hover {
          color: var(--accent-copper-light) !important;
          transform: translateX(4px);
        }
        .footer-social-link:hover {
          color: var(--accent-copper-light) !important;
          transform: translateX(4px);
        }
        .footer-social-link:hover > div {
          background: var(--accent-copper) !important;
          color: #FFFFFF !important;
          box-shadow: 0 4px 12px rgba(200, 122, 88, 0.35);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
