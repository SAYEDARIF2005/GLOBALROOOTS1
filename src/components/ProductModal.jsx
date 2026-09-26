import React from 'react';
import { X, Check, ArrowRight, Shield, Package, Globe, Layers } from 'lucide-react';

const ProductModal = ({ product, onClose, onInquire }) => {
  if (!product) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        backgroundColor: 'rgba(4, 19, 38, 0.85)',
        backdropFilter: 'blur(16px)',
        animation: 'fadeInUp 0.3s ease'
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '840px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: 'var(--card-bg)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-dark)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
          padding: '2rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            height: '40px',
            width: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--btn-secondary-bg)',
            color: 'var(--text-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--btn-secondary-border)',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}
        >
          {/* Product Image */}
          <div
            style={{
              height: '320px',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid var(--border-dark)'
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Product Info */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--accent-copper)',
                display: 'block',
                marginBottom: '0.5rem'
              }}
            >
              GLOBAL ROOOTS Agricultural Export
            </span>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-light)', marginBottom: '1rem' }}>{product.name}</h3>
            <p style={{ color: 'var(--text-light-muted)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {product.fullDescription || product.description}
            </p>

            {/* Specifications */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-light)' }}>
                <Shield size={18} style={{ color: 'var(--accent-copper)' }} />
                <span style={{ fontSize: '0.9rem' }}><strong style={{ color: 'var(--text-light)' }}>Source:</strong> {product.origin || 'Indian Agricultural Belt'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-light)' }}>
                <Package size={18} style={{ color: 'var(--accent-copper)' }} />
                <span style={{ fontSize: '0.9rem' }}><strong style={{ color: 'var(--text-light)' }}>Packaging:</strong> {product.packaging || 'Bulk Jute Sacks / HDPE Moisture Protective Bags'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-light)' }}>
                <Globe size={18} style={{ color: 'var(--accent-copper)' }} />
                <span style={{ fontSize: '0.9rem' }}><strong style={{ color: 'var(--text-light)' }}>Export Mode:</strong> Full Container Load (FCL) & Partial Ocean Freight</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => {
                  onClose();
                  onInquire(product.name);
                }}
                className="btn-primary"
                style={{ width: '100%' }}
              >
                Inquire For Export
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
