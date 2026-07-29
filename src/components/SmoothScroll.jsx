import React, { useEffect, useRef } from 'react';

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const currentY = useRef(0);
  const targetY = useRef(0);
  const ease = 0.08;
  const rafId = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const setBodyHeight = () => {
      document.body.style.height = `${el.scrollHeight}px`;
    };
    setBodyHeight();

    const resizeObs = new ResizeObserver(setBodyHeight);
    resizeObs.observe(el);

    const onScroll = () => {
      targetY.current = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const animate = () => {
      currentY.current += (targetY.current - currentY.current) * ease;
      el.style.transform = `translate3d(0, ${-currentY.current}px, 0)`;
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener('scroll', onScroll);
      resizeObs.disconnect();
      document.body.style.height = '';
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="smooth-scroll-container"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', willChange: 'transform' }}
    >
      {children}
    </div>
  );
};

export default SmoothScroll;
