import React, { useEffect, useRef, useState } from 'react';

const FloatingLogoPopup = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let angle = 0;

    const resize = () => {
      canvas.width = 170 * window.devicePixelRatio;
      canvas.height = 170 * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, 170, 170);
      const cx = 85, cy = 85, rx = 74, ry = 28;

      angle += 0.02;

      // 1. Draw 3D Golden Orbit Ring (Rotated Ellipse)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-Math.PI / 6); // Tilted 3D Orbit Perspective

      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(245, 166, 35, 0.65)';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#F5A623';
      ctx.shadowBlur = 12;
      ctx.stroke();

      // 2. Draw Moving Golden Particle Light Trails along the Orbit
      for (let i = 0; i < 3; i++) {
        const pAngle = angle + (i * Math.PI * 2) / 3;
        const px = rx * Math.cos(pAngle);
        const py = ry * Math.sin(pAngle);

        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#FFF5CC';
        ctx.shadowColor = '#FFD700';
        ctx.shadowBlur = 15;
        ctx.fill();
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 16}deg) rotateX(${-y * 16}deg) scale(1.06)`;
  };

  const handleMouseLeave = () => {
    const el = containerRef.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)';
    setIsHovered(false);
  };

  return (
    <div
      id="terrix-floating-logo-popup"
      style={{
        position: 'fixed',
        left: '2rem',
        bottom: '2.2rem',
        zIndex: 9990,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'auto'
      }}
    >
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'relative',
          width: '140px',
          height: '140px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease'
        }}
      >
        {/* Outer 3D Canvas Orbit Ring & Sparkle Light Trails */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: '-15px',
            width: '170px',
            height: '170px',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* Soft Golden Pulsing Atmospheric Aura Shadow */}
        <div
          style={{
            position: 'absolute',
            inset: '10px',
            borderRadius: '20px',
            background: 'radial-gradient(circle, rgba(245, 166, 35, 0.35) 0%, rgba(200, 122, 88, 0.15) 60%, transparent 100%)',
            filter: 'blur(12px)',
            opacity: isHovered ? 1 : 0.7,
            transition: 'opacity 0.35s ease',
            zIndex: 0
          }}
        />

        {/* Floating White Badge Container with Official GLOBAL ROOOTS Logo */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            width: '110px',
            height: '110px',
            borderRadius: '20px',
            background: '#FFFFFF',
            padding: '8px',
            boxShadow: isHovered
              ? '0 15px 35px rgba(245, 166, 35, 0.45), 0 8px 25px rgba(0, 0, 0, 0.5)'
              : '0 10px 25px rgba(0, 0, 0, 0.4), 0 4px 15px rgba(200, 122, 88, 0.25)',
            border: '2px solid #F5A623',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            transition: 'all 0.35s ease'
          }}
        >
          {/* OFFICIAL GLOBAL ROOOTS COMPANY LOGO ASSET */}
          <img
            src="assets/global_rooots_logo.jpg"
            alt="GLOBAL ROOOTS Official Logo Asset"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #terrix-floating-logo-popup {
            left: 1rem !important;
            bottom: 1.5rem !important;
            transform: scale(0.8);
            transform-origin: bottom left;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingLogoPopup;
