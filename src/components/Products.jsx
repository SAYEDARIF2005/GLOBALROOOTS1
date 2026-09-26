import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import ProductModal from './ProductModal';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productList = [
    {
      id: 'guntur-chilli',
      name: 'Guntur Chilli',
      category: 'Chillies',
      image: 'assets/guntur_chilli.png',
      description: 'Cultivated in suitable agricultural regions of Guntur and Andhra Pradesh, India, carefully harvested at peak maturity, sun-dried, cleaned, stem-sorted, and graded. Quality checking evaluates ASTA color value, pungency levels, moisture content, cleanliness, and foreign matter elimination. International Standards: Prepared to meet applicable food-safety requirements and agreed international buyer specifications.',
      fullDescription: 'Cultivated in suitable agricultural regions of Guntur and Andhra Pradesh, India, carefully harvested at peak maturity, sun-dried, cleaned, stem-sorted, and graded. Quality checking evaluates ASTA color value, pungency levels, moisture content, cleanliness, and foreign matter elimination. International Standards: Prepared to meet applicable food-safety requirements and agreed international buyer specifications.',
      origin: 'Guntur & Andhra Pradesh Region',
      packaging: '25kg / 50kg Press Bags & Jute Bags'
    },
    {
      id: 'chilli-powder',
      name: 'CHILLI POWDER',
      category: 'Chillies',
      image: 'assets/chilli_powder.jpg',
      description: 'Cultivated in suitable agricultural regions of India and carefully harvested, dried, cleaned, sorted, and ground into fine red powder. Quality checking evaluates appearance, ASTA red color, aroma, texture, moisture control, cleanliness, foreign matter elimination, and product consistency. International Standards: Prepared to meet applicable food-safety requirements and agreed international buyer specifications.',
      fullDescription: 'Cultivated in suitable agricultural regions of India and carefully harvested, dried, cleaned, sorted, and ground into fine red powder. Quality checking evaluates appearance, ASTA red color, aroma, texture, moisture control, cleanliness, foreign matter elimination, and product consistency. International Standards: Prepared to meet applicable food-safety requirements and agreed international buyer specifications.',
      origin: 'Indian Agricultural Spice Belt',
      packaging: '25kg Kraft Paper & HDPE Moisture-proof Bags'
    },
    {
      id: 'drumstick-powder',
      name: 'DRUMSTICK POWDER',
      category: 'Moringa & Spices',
      image: 'assets/drumstick_powder.jpg',
      description: 'Cultivated in suitable Indian agricultural regions, with leaves carefully harvested, cleaned, low-temperature dried, sorted, and processed into fine green powder. Quality checking evaluates natural color, fine texture, moisture content, cleanliness, foreign matter elimination, and product consistency. International Standards: Prepared to meet applicable food-safety requirements and agreed international buyer specifications.',
      fullDescription: 'Cultivated in suitable Indian agricultural regions, with leaves carefully harvested, cleaned, low-temperature dried, sorted, and processed into fine green powder. Quality checking evaluates natural color, fine texture, moisture content, cleanliness, foreign matter elimination, and product consistency. International Standards: Prepared to meet applicable food-safety requirements and agreed international buyer specifications.',
      origin: 'South Indian Agricultural Belt',
      packaging: '20kg / 25kg Vacuum Sealed Moisture-proof Drums & Bags'
    },
    {
      id: 'turmeric',
      name: 'Turmeric (Finger)',
      category: 'Turmeric',
      image: 'assets/turmeric_finger.jpg',
      description: 'Cultivated in premier turmeric farming regions across India, carefully harvested, cured, dried, cleaned, and polished into whole fingers. Quality checking evaluates golden appearance, curcumin concentration, essential oil aroma, moisture, cleanliness, and foreign matter control. International Standards: Prepared to meet applicable food-safety requirements and agreed international buyer specifications.',
      fullDescription: 'Cultivated in premier turmeric farming regions across India, carefully harvested, cured, dried, cleaned, and polished into whole fingers. Quality checking evaluates golden appearance, curcumin concentration, essential oil aroma, moisture, cleanliness, and foreign matter control. International Standards: Prepared to meet applicable food-safety requirements and agreed international buyer specifications.',
      origin: 'Erode & Telangana Turmeric Belts',
      packaging: '50kg Double Jute Bags'
    },
    {
      id: 'turmeric-powder',
      name: 'Turmeric Powder',
      category: 'Turmeric',
      image: 'assets/turmeric_roots.png',
      description: 'Cultivated in suitable Indian agricultural regions, harvested, cured, dried, cleaned, and ground into fine golden powder. Quality checking evaluates brilliant yellow color, aroma, fine texture, moisture content, cleanliness, foreign matter control, and product consistency. International Standards: Prepared to meet applicable food-safety requirements and agreed international buyer specifications.',
      fullDescription: 'Cultivated in suitable Indian agricultural regions, harvested, cured, dried, cleaned, and ground into fine golden powder. Quality checking evaluates brilliant yellow color, aroma, fine texture, moisture content, cleanliness, foreign matter control, and product consistency. International Standards: Prepared to meet applicable food-safety requirements and agreed international buyer specifications.',
      origin: 'Indian Agricultural Sourcing',
      packaging: '25kg Laminated HDPE Bags'
    },
    {
      id: 'cocoa-powder',
      name: 'COCOA POWDER',
      category: 'Raw Cocoa',
      image: 'assets/cocoa_powder.jpg',
      description: 'Cultivated in shade-grown cocoa estates across South India, carefully harvested, fermented, dried, cleaned, roasted, and milled into fine cocoa powder. Quality checking evaluates rich cocoa-brown color, aroma, texture, fat content, moisture control, cleanliness, foreign matter elimination, and product consistency. International Standards: Prepared to meet applicable food-safety requirements and agreed international buyer specifications.',
      fullDescription: 'Cultivated in shade-grown cocoa estates across South India, carefully harvested, fermented, dried, cleaned, roasted, and milled into fine cocoa powder. Quality checking evaluates rich cocoa-brown color, aroma, texture, fat content, moisture control, cleanliness, foreign matter elimination, and product consistency. International Standards: Prepared to meet applicable food-safety requirements and agreed international buyer specifications.',
      origin: 'South Indian Estate Region',
      packaging: '25kg / 50kg Moisture-proof GrainPro Jute Sacks'
    },
    {
      id: 'indian-spices',
      name: 'Indian Spices',
      category: 'Spices',
      image: 'assets/indian_spices.png',
      description: 'Cultivated across specialized spice belts in India, hand-harvested, cleaned, naturally dried, sorted, and graded whole spices. Quality checking evaluates essential oil potency, distinct aroma, size uniformity, moisture, cleanliness, foreign matter control, and lot consistency. International Standards: Prepared to meet applicable food-safety requirements and agreed international buyer specifications.',
      fullDescription: 'Cultivated across specialized spice belts in India, hand-harvested, cleaned, naturally dried, sorted, and graded whole spices. Quality checking evaluates essential oil potency, distinct aroma, size uniformity, moisture, cleanliness, foreign matter control, and lot consistency. International Standards: Prepared to meet applicable food-safety requirements and agreed international buyer specifications.',
      origin: 'Kerala & Western Ghats Spice Reserves',
      packaging: 'Custom Export Bags & Vacuum Foil Packaging'
    },
    {
      id: 'other-agri',
      name: 'Other Agricultural Products',
      category: 'Custom Sourcing',
      image: 'assets/farm_sourcing.png',
      description: 'Cultivated across accredited grower networks in India, harvested according to commodity standards, cleaned, sorted, and bulk-prepared for export. Quality checking evaluates physical appearance, moisture levels, cleanliness, foreign matter elimination, and lot consistency. International Standards: Prepared to meet applicable food-safety requirements and agreed international buyer specifications.',
      fullDescription: 'Cultivated across accredited grower networks in India, harvested according to commodity standards, cleaned, sorted, and bulk-prepared for export. Quality checking evaluates physical appearance, moisture levels, cleanliness, foreign matter elimination, and lot consistency. International Standards: Prepared to meet applicable food-safety requirements and agreed international buyer specifications.',
      origin: 'Pan-India Agricultural Network',
      packaging: 'Buyer Specified Export Packaging'
    }
  ];

  const handleInquire = (productName) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="section-padding" style={{ background: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-badge" style={{ fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
            Quality products with international standings
          </div>
          <h2 className="section-title">From India to the World</h2>
          <p className="section-subtitle">
            Cultivated across India’s premier agricultural belts, rigorously quality-checked, and prepared to meet international buyer specifications.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '2rem'
          }}
        >
          {productList.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: 'var(--card-bg)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-card)',
                overflow: 'hidden',
                transition: 'all 0.35s ease',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--card-shadow)',
                position: 'relative'
              }}
              className="product-card"
            >
              {/* Card Image Banner */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => {
                    if (e.target.src.includes('.png')) {
                      e.target.src = product.image.replace('.jpg', '.png');
                    } else if (!e.target.src.includes('public/')) {
                      e.target.src = 'public' + product.image;
                    }
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="product-img"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: 'var(--badge-bg)',
                    backdropFilter: 'blur(10px)',
                    padding: '0.35rem 0.8rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--badge-border)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--accent-copper)'
                  }}
                >
                  {product.category}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-light)', marginBottom: '0.6rem' }}>{product.name}</h3>
                <p style={{ color: 'var(--text-light-muted)', fontSize: '0.88rem', lineHeight: 1.55, marginBottom: '1.5rem', flexGrow: 1 }}>
                  {product.description}
                </p>

                <button
                  onClick={() => setSelectedProduct(product)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '0.8rem 1.2rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--btn-secondary-bg)',
                    border: '1px solid var(--btn-secondary-border)',
                    color: 'var(--btn-secondary-text)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    transition: 'all 0.25s ease'
                  }}
                  className="explore-btn"
                >
                  <span>Explore Product</span>
                  <ArrowUpRight size={18} style={{ color: 'var(--accent-copper)' }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onInquire={handleInquire}
        />
      )}

      <style>{`
        .product-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent-copper) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4) !important;
        }
        .product-card:hover .product-img {
          transform: scale(1.06);
        }
        .explore-btn:hover {
          background-color: var(--accent-copper) !important;
          color: #FFFFFF !important;
        }
        .explore-btn:hover svg {
          color: #FFFFFF !important;
        }
      `}</style>
    </section>
  );
};

export default Products;
