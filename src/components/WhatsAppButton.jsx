import React, { useState, useEffect } from 'react';

const WhatsAppButton = ({ phoneNumber = "918688228899" }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Automatically hide tooltip after 6 seconds, show on hover
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const message = encodeURIComponent("Hello GLOBAL ROOOTS, I am interested in your agricultural export products.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2.2rem',
        right: '2.2rem',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem'
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip Message */}
      <div
        style={{
          background: 'rgba(10, 37, 64, 0.95)',
          color: '#FFFFFF',
          padding: '0.6rem 1.1rem',
          borderRadius: '12px',
          fontSize: '0.85rem',
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 600,
          whiteSpace: 'nowrap',
          border: '1px solid rgba(37, 211, 102, 0.4)',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(10px)',
          opacity: showTooltip ? 1 : 0,
          transform: showTooltip ? 'translateX(0)' : 'translateX(10px)',
          pointerEvents: 'none',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        Chat with GLOBAL ROOOTS on WhatsApp
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with GLOBAL ROOOTS on WhatsApp"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45), 0 4px 12px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          position: 'relative',
          cursor: 'pointer',
          textDecoration: 'none'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1) translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 14px 35px rgba(37, 211, 102, 0.6), 0 6px 16px rgba(0, 0, 0, 0.4)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.45), 0 4px 12px rgba(0, 0, 0, 0.3)';
        }}
      >
        {/* Outer Pulsing Aura Ring */}
        <span
          style={{
            position: 'absolute',
            inset: '-6px',
            borderRadius: '50%',
            border: '2px solid rgba(37, 211, 102, 0.6)',
            animation: 'waPulse 2.4s infinite ease-in-out',
            pointerEvents: 'none'
          }}
        />

        {/* Official WhatsApp SVG Logo */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12C2 13.891 2.525 15.661 3.438 17.175L2.052 21.616C1.942 21.968 2.035 22.35 2.296 22.611C2.557 22.872 2.939 22.965 2.291 22.855L2.296 22.611L6.832 21.569C8.344 22.478 10.11 23 12 23C17.523 23 22 18.523 22 12C22 6.477 17.523 2 12 2ZM8.532 7.42C8.318 7.42 7.962 7.5 7.677 7.809C7.392 8.118 6.586 8.874 6.586 10.407C6.586 11.94 7.702 13.42 7.857 13.63C8.012 13.84 10.019 16.963 13.13 18.293C15.716 19.398 16.242 19.176 16.8 19.124C17.358 19.072 18.599 18.388 18.855 17.666C19.111 16.944 19.111 16.326 19.034 16.196C18.957 16.066 18.743 15.989 18.423 15.829C18.103 15.669 16.533 14.897 16.248 14.794C15.963 14.691 15.755 14.64 15.547 14.949C15.339 15.258 14.75 15.944 14.566 16.155C14.382 16.366 14.198 16.392 13.878 16.232C13.558 16.072 12.527 15.734 11.303 14.643C10.35 13.794 9.706 12.744 9.522 12.435C9.338 12.126 9.502 11.968 9.663 11.808C9.807 11.664 9.985 11.431 10.145 11.246C10.305 11.061 10.357 10.932 10.463 10.726C10.569 10.52 10.517 10.34 10.437 10.186C10.357 10.032 9.697 8.411 9.423 7.752C9.156 7.11 8.887 7.2 8.683 7.19L8.532 7.42Z"
            fill="white"
          />
        </svg>

        {/* Pulse CSS style */}
        <style>{`
          @keyframes waPulse {
            0% {
              transform: scale(0.95);
              opacity: 0.8;
            }
            50% {
              transform: scale(1.15);
              opacity: 0;
            }
            100% {
              transform: scale(0.95);
              opacity: 0;
            }
          }
        `}</style>
      </a>
    </div>
  );
};

export default WhatsAppButton;
