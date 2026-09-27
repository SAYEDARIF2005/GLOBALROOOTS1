import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const GlobalReach = () => {
  const canvasRef = useRef(null);

  const origin = { name: 'INDIA', lat: 20.59, lon: 78.96 };
  const destinations = [
    { id: 'eu', name: 'Europe', lat: 50.11, lon: 8.68, region: 'North Sea & Mediterranean Ports' },
    { id: 'me', name: 'Middle East', lat: 25.20, lon: 55.27, region: 'Gulf Trade Corridor' },
    { id: 'af', name: 'Africa', lat: 1.29, lon: 36.82, region: 'East & North African Shipping Ports' },
    { id: 'na', name: 'North America', lat: 40.71, lon: -74.00, region: 'Atlantic Maritime Freight' },
    { id: 'sa', name: 'South America', lat: -23.55, lon: -46.63, region: 'Latin American Trade' },
    { id: 'ap', name: 'Asia-Pacific', lat: 1.35, lon: 103.81, region: 'Southeast Asian Logistics' },
    { id: 'au', name: 'Australia', lat: -33.86, lon: 151.20, region: 'Oceania Cargo Routes' }
  ];

  // Simplified 3D Landmass Polygon Data for Realistic Satellite Earth Look
  const continents = [
    // India & Subcontinent
    [[8, 77], [15, 74], [22, 70], [28, 77], [34, 78], [28, 88], [20, 85], [10, 80], [8, 77]],
    // Africa
    [[35, 10], [30, 32], [12, 43], [-12, 40], [-35, 20], [-34, 18], [5, 10], [15, -17], [32, -8], [35, 10]],
    // Europe
    [[36, -9], [43, -9], [55, 5], [60, 25], [70, 30], [60, 50], [45, 35], [40, 25], [38, 15], [36, -9]],
    // Asia / Middle East
    [[12, 44], [30, 35], [30, 50], [25, 60], [35, 70], [45, 65], [60, 70], [65, 100], [68, 130], [55, 140], [35, 139], [22, 114], [10, 105], [1, 104], [10, 78], [12, 44]],
    // Australia
    [[-12, 130], [-15, 142], [-28, 153], [-38, 145], [-32, 115], [-22, 114], [-12, 130]],
    // North America
    [[70, -160], [60, -130], [50, -125], [30, -115], [20, -105], [15, -90], [25, -80], [45, -65], [55, -60], [70, -80], [70, -160]],
    // South America
    [[12, -75], [-5, -35], [-22, -40], [-45, -65], [-55, -70], [-18, -75], [5, -75], [12, -75]]
  ];

  // City Lights Locations for realistic night satellite view
  const cityLights = [
    [51, 2], [48, 2], [41, 12], [30, 31], [25, 55], [24, 46], [19, 72], [28, 77], [13, 80],
    [35, 139], [31, 121], [22, 114], [1, 103], [-33, 151], [40, -74], [34, -118], [25, -80], [-23, -46]
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let rotationY = 0.55;
    let rotationX = 0.3;
    let mouseX = 0, mouseY = 0;
    let particleTime = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.35;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.35;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    // 3D Spherical Projection Math
    const project = (lat, lon, r, rotY, rotX) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180) + rotY;

      let x = -(r * Math.sin(phi) * Math.cos(theta));
      let z = r * Math.sin(phi) * Math.sin(theta);
      let y = r * Math.cos(phi);

      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;

      return { x, y: y1, z: z1, visible: z1 > -r * 0.25 };
    };

    const render = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const radius = Math.min(w, h) * 0.46;
      const centerX = w * 0.48;
      const centerY = h * 0.64;

      ctx.clearRect(0, 0, w, h);

      rotationY += 0.0025;
      const rotX = 0.3 + mouseY;
      const rotY = rotationY + mouseX;

      // 1. Atmosphere Outer Blue Rim Halo Glow
      const glowGrad = ctx.createRadialGradient(centerX, centerY, radius * 0.9, centerX, centerY, radius * 1.35);
      glowGrad.addColorStop(0, 'rgba(0, 180, 255, 0.55)');
      glowGrad.addColorStop(0.4, 'rgba(10, 90, 200, 0.25)');
      glowGrad.addColorStop(1, 'rgba(5, 19, 36, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // 2. Realistic 3D Earth Ocean Sphere
      const earthGrad = ctx.createRadialGradient(
        centerX - radius * 0.35,
        centerY - radius * 0.4,
        radius * 0.1,
        centerX,
        centerY,
        radius
      );
      earthGrad.addColorStop(0, '#1B5282');
      earthGrad.addColorStop(0.4, '#0D355C');
      earthGrad.addColorStop(0.8, '#061E3B');
      earthGrad.addColorStop(1, '#030E20');

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = earthGrad;
      ctx.shadowColor = 'rgba(0, 180, 255, 0.5)';
      ctx.shadowBlur = 40;
      ctx.fill();
      ctx.shadowBlur = 0;

      // 3. Bright Electric Blue Atmosphere Top Rim Line (Matching Reference)
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 1.5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(80, 220, 255, 0.85)';
      ctx.lineWidth = 3.5;
      ctx.shadowColor = '#00d0ff';
      ctx.shadowBlur = 15;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // 4. Draw Realistic 3D Continents Landmasses
      continents.forEach((poly) => {
        ctx.beginPath();
        let first = true;
        let visibleCount = 0;

        poly.forEach(([lat, lon]) => {
          const p = project(lat, lon, radius, rotY, rotX);
          if (p.visible) {
            visibleCount++;
            const px = centerX + p.x;
            const py = centerY + p.y;
            if (first) { ctx.moveTo(px, py); first = false; }
            else { ctx.lineTo(px, py); }
          }
        });

        if (visibleCount > 2) {
          ctx.closePath();
          ctx.fillStyle = 'rgba(28, 92, 70, 0.48)'; // Lush green continent fill
          ctx.fill();
          ctx.strokeStyle = 'rgba(60, 180, 140, 0.65)'; // Edge coastline highlight
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      });

      // 5. Draw Glowing Golden City Night Lights across Continents
      cityLights.forEach(([lat, lon]) => {
        const p = project(lat, lon, radius, rotY, rotX);
        if (p.visible) {
          const px = centerX + p.x;
          const py = centerY + p.y;
          ctx.beginPath();
          ctx.arc(px, py, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = '#FFD700';
          ctx.shadowColor = '#FF8C00';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // 6. Draw Golden Shipping Route Arcs from INDIA to All Destinations
      const originP = project(origin.lat, origin.lon, radius, rotY, rotX);
      particleTime += 0.014;

      destinations.forEach((dest, i) => {
        const destP = project(dest.lat, dest.lon, radius, rotY, rotX);

        if (originP.visible || destP.visible) {
          const ox = centerX + originP.x;
          const oy = centerY + originP.y;
          const dx = centerX + destP.x;
          const dy = centerY + destP.y;

          // Quadratic Arc Midpoint
          const midX = (ox + dx) / 2;
          const midY = (oy + dy) / 2 - radius * 0.32;

          // Golden Arc Curve
          ctx.beginPath();
          ctx.moveTo(ox, oy);
          ctx.quadraticCurveTo(midX, midY, dx, dy);

          const arcGrad = ctx.createLinearGradient(ox, oy, dx, dy);
          arcGrad.addColorStop(0, '#FFA800');
          arcGrad.addColorStop(0.5, '#FFD060');
          arcGrad.addColorStop(1, 'rgba(255, 168, 0, 0.45)');

          ctx.strokeStyle = arcGrad;
          ctx.lineWidth = 2.8;
          ctx.shadowColor = '#FFA800';
          ctx.shadowBlur = 12;
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Animated Light Energy Pulse
          const t = (particleTime + i * 0.15) % 1;
          const px = (1 - t) * (1 - t) * ox + 2 * (1 - t) * t * midX + t * t * dx;
          const py = (1 - t) * (1 - t) * oy + 2 * (1 - t) * t * midY + t * t * dy;

          ctx.beginPath();
          ctx.arc(px, py, 4.5, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowColor = '#FFE699';
          ctx.shadowBlur = 15;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // 7. Draw Destination Point Markers & Clean White Labels
      destinations.forEach((dest) => {
        const p = project(dest.lat, dest.lon, radius, rotY, rotX);
        if (p.visible) {
          const px = centerX + p.x;
          const py = centerY + p.y;

          // Outer Gold Pulsing Ring
          const pulse = Math.sin(particleTime * 3.5 + dest.lat) * 4 + 10;
          ctx.beginPath();
          ctx.arc(px, py, pulse, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 168, 0, 0.28)';
          ctx.fill();

          // Core Gold Node
          ctx.beginPath();
          ctx.arc(px, py, 5.5, 0, Math.PI * 2);
          ctx.fillStyle = '#FFA800';
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = 1.5;
          ctx.shadowColor = '#FFA800';
          ctx.shadowBlur = 14;
          ctx.fill();
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Bold White Label
          ctx.font = '700 13px "Outfit", sans-serif';
          ctx.fillStyle = '#FFFFFF';
          ctx.textAlign = 'center';
          ctx.shadowColor = '#000000';
          ctx.shadowBlur = 8;
          ctx.fillText(dest.name, px, py - 14);
          ctx.shadowBlur = 0;
        }
      });

      // 8. Draw INDIA Origin Hub Node (Sunburst Glow + Flag + Label)
      if (originP.visible) {
        const ox = centerX + originP.x;
        const oy = centerY + originP.y;

        // Sunburst Glow Ring
        const pulse = Math.sin(particleTime * 4.5) * 6 + 18;
        ctx.beginPath();
        ctx.arc(ox, oy, pulse, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 168, 0, 0.45)';
        ctx.fill();

        // Origin Core
        ctx.beginPath();
        ctx.arc(ox, oy, 8.5, 0, Math.PI * 2);
        ctx.fillStyle = '#FF8C00';
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2.5;
        ctx.shadowColor = '#FF8C00';
        ctx.shadowBlur = 22;
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Indian Flag Badge & Typography
        ctx.font = '800 14px "Outfit", sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.shadowColor = '#000000';
        ctx.shadowBlur = 10;
        ctx.fillText('🇮🇳', ox, oy + 22);
        ctx.fillText('INDIA', ox, oy + 36);
        ctx.font = '600 11px "Outfit", sans-serif';
        ctx.fillStyle = '#FFA800';
        ctx.fillText('(Origin Sourcing)', ox, oy + 50);
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="global" className="section-padding" style={{ background: 'var(--bg-dark)', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header Matching Reference Image Exact Visual Hierarchy */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.45rem 1.4rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255, 168, 0, 0.12)',
              border: '1px solid rgba(255, 168, 0, 0.4)',
              boxShadow: '0 4px 18px rgba(255, 168, 0, 0.2)',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.88rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#FFA800',
              marginBottom: '1rem'
            }}
          >
            <span>🌐</span> GLOBAL TRADE NETWORK
          </div>

          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', color: 'var(--text-light)', fontWeight: 800, marginBottom: '0.8rem' }}>
            Connecting India With <span style={{ color: '#FFA800', textShadow: '0 0 20px rgba(255, 168, 0, 0.4)' }}>the World</span>
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: 'var(--text-light-muted)', maxWidth: '720px', margin: '0 auto' }}>
            Leveraging ocean shipping lanes to supply agricultural products to global markets.
          </p>
        </div>

        {/* Side-by-Side Composition Container (Desktop: Image LEFT, 3D Globe RIGHT | Mobile: Image FIRST, Globe SECOND) */}
        <div
          className="global-trade-composition"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            alignItems: 'center'
          }}
        >
          {/* 1. Newly Attached Banner Image Container (LEFT on Desktop, TOP on Mobile) */}
          <div
            className="global-trade-img-col"
            style={{
              position: 'relative',
              width: '100%',
              height: 'clamp(340px, 48vh, 480px)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              background: 'radial-gradient(circle at 50% 50%, #082142 0%, #041226 70%, #020A16 100%)',
              border: '1px solid rgba(200, 122, 88, 0.35)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src="assets/global_trade_side.jpg"
              alt="From India to the World - Global Reach & Trusted Supply Chain"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center'
              }}
            />
          </div>

          {/* 2. Existing 3D Globe Container (RIGHT on Desktop, BOTTOM on Mobile - 100% UNTOUCHED implementation) */}
          <div
            className="global-trade-globe-col"
            style={{
              position: 'relative',
              width: '100%',
              height: 'clamp(340px, 48vh, 480px)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              background: 'radial-gradient(circle at 50% 50%, #082142 0%, #041226 70%, #020A16 100%)',
              border: '1px solid rgba(255, 168, 0, 0.3)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)'
            }}
          >
            {/* Cargo Ship Background Port Layer (Matching Reference Image Right Edge) */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '45%',
                height: '100%',
                backgroundImage: 'url("assets/maritime_port.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center right',
                opacity: 0.45,
                mixBlendMode: 'luminosity',
                maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)',
                pointerEvents: 'none'
              }}
            />

            {/* Real-time 3D Globe Interactive Canvas (UNTOUCHED) */}
            <canvas
              ref={canvasRef}
              style={{ width: '100%', height: '100%', position: 'relative', zIndex: 2, cursor: 'grab' }}
            />
          </div>
        </div>

        {/* Global Trade Regions Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
            gap: '1.2rem',
            marginTop: '2.5rem'
          }}
        >
          {destinations.map((dest) => (
            <div
              key={dest.id}
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--border-card)',
                borderRadius: 'var(--radius-md)',
                padding: '1.1rem 1.3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
              className="trade-region-card"
            >
              <div>
                <h3 style={{ fontSize: '1rem', color: 'var(--text-light)', marginBottom: '0.2rem', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>
                  {dest.name}
                </h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)' }}>{dest.region}</span>
              </div>
              <ArrowUpRight size={18} style={{ color: '#FFA800' }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .trade-region-card:hover {
          transform: translateY(-4px);
          border-color: #FFA800 !important;
          box-shadow: 0 12px 28px rgba(255, 168, 0, 0.25) !important;
        }

        @media (min-width: 992px) {
          .global-trade-composition {
            grid-template-columns: 1fr 1fr !important;
          }
          .global-trade-img-col {
            order: 1 !important;
            height: clamp(340px, 48vh, 480px) !important;
          }
          .global-trade-globe-col {
            order: 2 !important;
            height: clamp(340px, 48vh, 480px) !important;
          }
        }

        @media (max-width: 991px) {
          .global-trade-composition {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .global-trade-img-col {
            order: 1 !important;
            height: auto !important;
          }
          .global-trade-img-col img {
            height: auto !important;
            max-height: 380px !important;
            width: 100% !important;
            object-fit: contain !important;
          }
          .global-trade-globe-col {
            order: 2 !important;
            height: clamp(300px, 42vh, 420px) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalReach;
