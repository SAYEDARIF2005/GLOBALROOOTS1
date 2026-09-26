import React, { useState } from 'react';
import { Truck, Ship, Anchor, FileCheck, ShieldCheck, Layers, Globe, ArrowRight, X } from 'lucide-react';

const Logistics = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // 6 distinct logistics images (5 attached + 1 existing maritime_port.png)
  const logisticsImages = [
    {
      src: '/assets/logistics_india_to_world.jpg',
      tag: 'Global Port Export',
      title: 'From India to the World',
      desc: 'Seamless container shipping connecting Indian agricultural hubs with worldwide ports.'
    },
    {
      src: '/assets/logistics_farmers_to_markets.jpg',
      tag: 'Direct Farmer Sourcing',
      title: 'From Our Farmers to Global Markets',
      desc: 'Sustainably cultivated spices and pulses direct from Indian farm communities.'
    },
    {
      src: '/assets/logistics_truck_delivery.jpg',
      tag: 'Reliable Highways',
      title: 'GPS-Tracked Inland Logistics',
      desc: 'Temperature-controlled overland trucking for time-sensitive cargo dispatch.'
    },
    {
      src: '/assets/logistics_quality_standards.jpg',
      tag: 'Laboratory Inspection',
      title: 'Global Standards for Superior Quality',
      desc: 'Safe, pure, and natural cargo certified to exceed international phytosanitary standards.'
    },
    {
      src: '/assets/logistics_journey_flow.jpg',
      tag: 'End-to-End Excellence',
      title: 'Complete Journey of Quality',
      desc: 'Traceable multi-modal transit from farm aggregation to final port handover.'
    },
    {
      src: '/assets/maritime_port.png',
      tag: 'Maritime Vessel Shipping',
      title: 'Ocean Freight & Port Staging',
      desc: 'Strategic port container management with premier global vessel operators.'
    }
  ];

  // Double the array for flawless, continuous infinite looping
  const carouselItems = [...logisticsImages, ...logisticsImages];

  const logisticsPillars = [
    {
      title: 'Farmer Pickup & Regional Transit',
      desc: 'Prompt consolidation from regional farming communities to centralized aggregation points.',
      icon: Truck,
      tag: 'Inland Transport'
    },
    {
      title: 'Moisture & Cargo Preservation',
      desc: 'Strict temperature, ventilation, and moisture controls during storage and transport.',
      icon: Layers,
      tag: 'Quality Protection'
    },
    {
      title: 'Export Documentation & Customs',
      desc: 'Seamless phytosanitary certificates, bill of lading, and customs clearance coordination.',
      icon: FileCheck,
      tag: 'Port Compliance'
    },
    {
      title: 'Port Staging & Container Loading',
      desc: 'Strategic port terminal staging, FCL/LCL container stuffing, and vessel loading.',
      icon: Anchor,
      tag: 'Maritime Dispatch'
    },
    {
      title: 'Ocean Cargo Freight Lines',
      desc: 'Partnered with premier international ocean carriers for dependable ocean shipping schedules.',
      icon: Ship,
      tag: 'International Shipping'
    },
    {
      title: 'Destination Port Delivery',
      desc: 'End-to-end milestone updates and coordination until cargo handover at destination port.',
      icon: ShieldCheck,
      tag: 'Global Delivery'
    }
  ];

  return (
    <section id="logistics" className="section-padding" style={{ background: 'var(--bg-dark)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-badge">
            <Globe size={14} style={{ display: 'inline', marginRight: '6px' }} />
            Seamless Supply Chain & Maritime Fleet
          </div>
          <h2 className="section-title">Reliable Logistics — From Source to Destination</h2>
          <p className="section-subtitle">
            Continuous, synchronized transit linking Indian agricultural heartlands with major global shipping hubs.
          </p>

          {/* Trade Route Flow Indicator (Ends at WORLD) */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.6rem',
              padding: '0.6rem 1.4rem',
              borderRadius: 'var(--radius-full)',
              background: 'var(--bg-dark-card)',
              border: '1px solid var(--border-dark)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--text-light)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <span>🇮🇳 INDIA</span>
            <ArrowRight size={14} style={{ color: 'var(--accent-copper)' }} />
            <span>🚚 LOGISTICS</span>
            <ArrowRight size={14} style={{ color: 'var(--accent-copper)' }} />
            <span>🚢 GLOBAL TRANSPORTATION</span>
            <ArrowRight size={14} style={{ color: 'var(--accent-copper)' }} />
            <span>🌍 WORLD</span>
          </div>
        </div>

        {/* Continuous RIGHT-TO-LEFT Infinite Image Motion Carousel Container */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            marginBottom: '4.5rem',
            padding: '1rem 0',
            WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #000 7%, #000 93%, transparent 100%)',
            maskImage: 'linear-gradient(90deg, transparent 0%, #000 7%, #000 93%, transparent 100%)'
          }}
        >
          {/* Animated Track */}
          <div className="logistics-marquee-track" style={{ gap: '1.8rem' }}>
            {carouselItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(item)}
                title="Click to view full original image"
                style={{
                  flex: '0 0 auto',
                  width: 'clamp(270px, 85vw, 380px)',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-dark)',
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)',
                  transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03) translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 45px rgba(200, 122, 88, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.15)';
                }}
              >
                {/* Image Wrap */}
                <div style={{ position: 'relative', height: '220px', width: '100%', overflow: 'hidden' }}>
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(7, 21, 39, 0.75)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--accent-copper-light)',
                      border: '1px solid rgba(200, 122, 88, 0.4)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {item.tag}
                  </div>

                  {/* Click Zoom Hint Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      right: '0.75rem',
                      background: 'rgba(7, 21, 39, 0.75)',
                      backdropFilter: 'blur(6px)',
                      color: '#FFFFFF',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    🔍 View Full
                  </div>
                </div>

                {/* Card Info */}
                <div style={{ padding: '1.4rem 1.6rem' }}>
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      color: 'var(--text-light)',
                      marginBottom: '0.4rem',
                      lineHeight: 1.3
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-light-muted)',
                      lineHeight: 1.5,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Logistics Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.8rem'
          }}
        >
          {logisticsPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-card)',
                  padding: '1.8rem',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  boxShadow: 'var(--card-shadow)'
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
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.2rem'
                  }}
                >
                  <div
                    style={{
                      height: '46px',
                      width: '46px',
                      borderRadius: '12px',
                      background: 'rgba(200, 122, 88, 0.12)',
                      color: 'var(--accent-copper)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(200, 122, 88, 0.25)'
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--accent-copper)',
                      backgroundColor: 'rgba(200, 122, 88, 0.08)',
                      padding: '0.25rem 0.7rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(200, 122, 88, 0.2)'
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-light-muted)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            );
          })}
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
              src={selectedImage.src}
              alt={selectedImage.title}
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
                {selectedImage.title}
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent-copper-light)', margin: 0, fontWeight: 500 }}>
                {selectedImage.tag}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Logistics;
