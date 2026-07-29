import React, { useEffect, useRef } from 'react';

const HeroBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const isMobile = window.innerWidth < 768;
    const ctx = canvas.getContext('2d');
    let animId;
    let visible = true;
    const count = isMobile ? 24 : 40;
    const particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.25,
        dy: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.35 + 0.15,
      });
    }

    const onVisibility = () => {
      visible = !document.hidden;
      if (visible) animId = requestAnimationFrame(draw);
    };
    document.addEventListener('visibilitychange', onVisibility);

    let frame = 0;
    const draw = () => {
      if (!visible) return;
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (frame % 2 === 0) {
        const t = Date.now() * 0.0004;
        const g1 = ctx.createRadialGradient(
          canvas.width * 0.3 + Math.sin(t) * 60,
          canvas.height * 0.35,
          0,
          canvas.width * 0.3,
          canvas.height * 0.35,
          280
        );
        g1.addColorStop(0, 'rgba(240, 160, 48, 0.07)');
        g1.addColorStop(1, 'transparent');
        ctx.fillStyle = g1;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const g2 = ctx.createRadialGradient(
          canvas.width * 0.72,
          canvas.height * 0.45,
          0,
          canvas.width * 0.72,
          canvas.height * 0.45,
          220
        );
        g2.addColorStop(0, 'rgba(99, 102, 241, 0.06)');
        g2.addColorStop(1, 'transparent');
        ctx.fillStyle = g2;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 160, 48, ${p.opacity})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <div className="hero-canvas" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default HeroBackground;
