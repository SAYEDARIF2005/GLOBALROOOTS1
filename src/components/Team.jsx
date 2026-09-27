import React, { useState } from 'react';
import { X, UserCheck, Shield, Award } from 'lucide-react';

const Team = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const teamMembers = [
    {
      name: 'ARITAKULA PRASAD',
      designation: 'MANAGING PARTNER',
      image: 'assets/team_syed_khalid.jpg',
      alt: 'ARITAKULA PRASAD - MANAGING PARTNER'
    },
    {
      name: 'SYED KHALID AHMAD',
      designation: 'EXPORT STRATEGY LEAD & PARTNER',
      image: 'assets/team_aritakula_prasad.jpg',
      alt: 'SYED KHALID AHMAD - EXPORT STRATEGY LEAD & PARTNER'
    }
  ];

  return (
    <section id="team" className="section-padding" style={{ background: 'var(--bg-dark-card)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-badge">
            <UserCheck size={14} style={{ display: 'inline', marginRight: '6px' }} />
            Leadership & Vision
          </div>
          <h2 className="section-title">Meet Our Leadership Team</h2>
          <p className="section-subtitle">
            Experienced industry leaders driving global agricultural trade, ethical farmer partnerships, and strategic international supply operations.
          </p>
        </div>

        {/* 2 Team Profile Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 460px))',
            gap: '2.5rem',
            justifyContent: 'center',
            alignItems: 'stretch'
          }}
        >
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--card-bg)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-card)',
                overflow: 'hidden',
                boxShadow: 'var(--card-shadow)',
                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease, box-shadow 0.35s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = 'var(--accent-copper)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(200, 122, 88, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-card)';
                e.currentTarget.style.boxShadow = 'var(--card-shadow)';
              }}
            >
              {/* Profile Image Wrap (Clickable for full size) */}
              <div
                onClick={() => setSelectedImage(member)}
                title="Click to view full image"
                style={{
                  position: 'relative',
                  height: '380px',
                  width: '100%',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  backgroundColor: 'rgba(7, 21, 39, 0.05)'
                }}
              >
                <img
                  src={member.image}
                  alt={member.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />

                {/* Click Zoom Icon Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    background: 'rgba(7, 21, 39, 0.75)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 'var(--radius-full)',
                    padding: '0.4rem 0.9rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <span>🔍 Click Full Photo</span>
                </div>
              </div>

              {/* Card Details */}
              <div
                style={{
                  padding: '2rem 1.8rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                  borderTop: '1px solid var(--border-card)'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--accent-copper)',
                      backgroundColor: 'rgba(200, 122, 88, 0.1)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(200, 122, 88, 0.25)',
                      marginBottom: '0.8rem'
                    }}
                  >
                    {member.designation}
                  </div>

                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: 'var(--text-light)',
                      marginBottom: '0.4rem',
                      letterSpacing: '0.02em'
                    }}
                  >
                    {member.name}
                  </h3>
                </div>

                <div style={{ marginTop: '1.2rem', paddingTop: '1rem', borderTop: '1px stroke rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-light-muted)', fontWeight: 500 }}>
                    GLOBAL ROOOTS Leadership Board
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Size Image Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(4, 15, 30, 0.92)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.25s ease-out forwards'
          }}
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close full size view"
              style={{
                position: 'absolute',
                top: '-3.2rem',
                right: '0',
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#FFFFFF',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent-copper)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <X size={24} />
            </button>

            {/* Uncropped Original Image */}
            <img
              src={selectedImage.image}
              alt={selectedImage.alt}
              style={{
                maxWidth: '90vw',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            />

            {/* Caption */}
            <div
              style={{
                marginTop: '1rem',
                textAlign: 'center',
                color: '#FFFFFF'
              }}
            >
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 0.2rem 0', color: '#FFFFFF' }}>
                {selectedImage.name}
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent-copper-light)', margin: 0, fontWeight: 600 }}>
                {selectedImage.designation}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
