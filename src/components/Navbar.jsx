import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';

const Navbar = ({ theme = 'light', toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'products', 'quality', 'global', 'logistics', 'team', 'about', 'certificate', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'Quality', href: '#quality', id: 'quality' },
    { name: 'Team', href: '#team', id: 'team' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Certificate', href: '#certificate', id: 'certificate' },
    { name: 'Contact', href: '#contact', id: 'contact' },
    { name: 'Get in Touch', href: '#contact', id: 'contact-cta' },
  ];

  const isLight = theme === 'light';

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.35s ease',
        padding: isScrolled ? '0.85rem 0' : '1.35rem 0',
        backgroundColor: isScrolled
          ? 'rgba(7, 21, 34, 0.94)'
          : 'rgba(7, 21, 34, 0.65)',
        backdropFilter: 'blur(18px)',
        borderBottom: isScrolled
          ? '1px solid rgba(200, 122, 88, 0.25)'
          : '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: isScrolled
          ? '0 10px 30px rgba(0, 0, 0, 0.4)'
          : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Official GLOBAL ROOOTS Brand Logo Header */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.95rem', textDecoration: 'none' }}>
          <div
            className="nav-logo-box"
            style={{
              height: '52px',
              width: '52px',
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3px',
              boxShadow: '0 6px 18px rgba(200, 122, 88, 0.35)',
              border: '1.5px solid var(--accent-copper)',
              flexShrink: 0
            }}
          >
            <img
              src="assets/global_rooots_logo.jpg"
              alt="GLOBAL ROOOTS Logo"
              style={{ height: '100%', width: '100%', objectFit: 'contain' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              className="nav-brand-title"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 850,
                letterSpacing: '0.09em',
                color: '#FFFFFF',
                lineHeight: 1,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              GLOBA
              <span
                style={{
                  background: 'linear-gradient(135deg, #E29578 0%, #C87A58 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900,
                  marginLeft: '1px'
                }}
              >
                L
              </span>
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '4px' }}>
              <span style={{ width: '12px', height: '1.5px', background: 'var(--accent-copper)', display: 'inline-block' }} />
              <span
                className="nav-brand-subtitle"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.66rem',
                  fontWeight: 700,
                  letterSpacing: '0.24em',
                  color: 'var(--accent-copper-light)',
                  lineHeight: 1
                }}
              >
                ROOOTS
              </span>
              <span style={{ width: '12px', height: '1.5px', background: 'var(--accent-copper)', display: 'inline-block' }} />
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', gap: '1.6rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            const isGetInTouch = link.name === 'Get in Touch';

            if (isGetInTouch) {
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className="get-in-touch-btn"
                >
                  {link.name}
                </a>
              );
            }

            return (
              <a
                key={link.id}
                href={link.href}
                className="nav-item-link"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '17px',
                  fontWeight: isActive ? 650 : 550,
                  letterSpacing: '0.3px',
                  lineHeight: '1.4',
                  color: isActive ? 'var(--accent-copper-light)' : '#FFFFFF',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  padding: '0.4rem 0',
                  display: 'inline-block',
                  whiteSpace: 'nowrap'
                }}
              >
                {link.name}
                <span
                  className="nav-underline"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, var(--accent-copper), var(--accent-gold))',
                    borderRadius: '2px',
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
              </a>
            );
          })}
        </nav>

        {/* Action Controls: Moon / Sun Theme Toggle & Mobile Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
          {/* Working Icon-based Moon (in Light mode) / Sun (in Dark mode) Theme Switcher */}
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${isLight ? 'Dark' : 'Light'} Mode`}
              title={`Switch to ${isLight ? 'Dark' : 'Light'} Mode`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#FFD700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                flexShrink: 0
              }}
              className="theme-toggle-btn"
            >
              {isLight ? <Moon size={20} color="#FFD700" fill="#FFD700" /> : <Sun size={20} color="#FFD700" />}
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'flex',
              padding: '0.55rem',
              color: '#FFFFFF',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(255, 255, 255, 0.08)',
              flexShrink: 0,
              cursor: 'pointer'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(7, 21, 34, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '1.8rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}
        >
          {navLinks.map((link) => {
            const isGetInTouch = link.name === 'Get in Touch';
            if (isGetInTouch) {
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="get-in-touch-btn"
                  style={{
                    marginTop: '0.8rem',
                    padding: '0.85rem 1.5rem',
                    fontSize: '17px',
                    width: '100%'
                  }}
                >
                  {link.name} →
                </a>
              );
            }
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px',
                  fontWeight: 600,
                  letterSpacing: '0.3px',
                  color: activeSection === link.id
                    ? 'var(--accent-copper-light)'
                    : '#FFFFFF',
                  padding: '0.6rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)'
                }}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}

      {/* Hover & Responsive CSS styles */}
      <style>{`
        @keyframes aiBorderShimmer {
          0% {
            background-position: 0% 0%, 0% 50%;
          }
          50% {
            background-position: 0% 0%, 100% 50%;
          }
          100% {
            background-position: 0% 0%, 0% 50%;
          }
        }

        @keyframes aiSoftGlowPulse {
          0%, 100% {
            box-shadow: 0 0 10px rgba(200, 122, 88, 0.3), 0 0 4px rgba(245, 166, 35, 0.15);
          }
          50% {
            box-shadow: 0 0 22px rgba(200, 122, 88, 0.6), 0 0 10px rgba(245, 166, 35, 0.4);
          }
        }

        .get-in-touch-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.55rem 1.35rem;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, rgba(15, 35, 63, 0.95) 0%, rgba(7, 21, 39, 0.98) 100%);
          color: #FFFFFF !important;
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          text-decoration: none;
          border: 1.5px solid transparent;
          background-image: 
            linear-gradient(135deg, rgba(15, 35, 63, 0.95) 0%, rgba(7, 21, 39, 0.98) 100%),
            linear-gradient(120deg, rgba(200, 122, 88, 0.4), rgba(245, 166, 35, 0.95), rgba(255, 255, 255, 0.9), rgba(245, 166, 35, 0.95), rgba(200, 122, 88, 0.4));
          background-origin: border-box;
          background-clip: padding-box, border-box;
          background-size: 100% 100%, 250% 250%;
          animation: aiBorderShimmer 4s ease infinite, aiSoftGlowPulse 3.5s ease-in-out infinite;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease;
          white-space: nowrap;
          cursor: pointer;
        }

        .get-in-touch-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 25px rgba(200, 122, 88, 0.65), 0 0 16px rgba(245, 166, 35, 0.55) !important;
          background-image: 
            linear-gradient(135deg, rgba(200, 122, 88, 0.95) 0%, rgba(165, 95, 65, 0.98) 100%),
            linear-gradient(120deg, #FFFFFF, #FFD700, #FFFFFF, #FFD700);
          color: #FFFFFF !important;
        }

        .nav-item-link:hover {
          color: var(--accent-copper) !important;
          transform: translateY(-2px);
        }
        .nav-item-link:hover .nav-underline {
          transform: scaleX(1) !important;
        }
        .theme-toggle-btn:hover {
          transform: scale(1.08);
        }

        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .nav-logo-box {
            width: 40px !important;
            height: 40px !important;
          }
          .nav-brand-title {
            font-size: 1.35rem !important;
          }
          .nav-brand-subtitle {
            font-size: 0.55rem !important;
            letter-spacing: 0.16em !important;
          }
        }

        @media (max-width: 360px) {
          .nav-logo-box {
            width: 34px !important;
            height: 34px !important;
          }
          .nav-brand-title {
            font-size: 1.12rem !important;
          }
          .nav-brand-subtitle {
            font-size: 0.48rem !important;
            letter-spacing: 0.12em !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .get-in-touch-btn {
            animation: none !important;
            box-shadow: 0 0 10px rgba(200, 122, 88, 0.35) !important;
            background-position: 0% 0%, 0% 50% !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
