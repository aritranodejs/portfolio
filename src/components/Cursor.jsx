import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', onMove);

    const tick = () => {
      setRing((r) => ({
        x: r.x + (pos.x - r.x) * 0.12,
        y: r.y + (pos.y - r.y) * 0.12,
      }));
    };
    const id = setInterval(tick, 16);

    const onOver = (e) => {
      const t = e.target;
      if (
        t.closest('a, button, .skill, .portfolio-card, .cert-card, .filter-btn, .tl-card')
      ) {
        setHovering(true);
      }
    };
    const onOut = (e) => {
      const t = e.target;
      if (
        t.closest('a, button, .skill, .portfolio-card, .cert-card, .filter-btn, .tl-card')
      ) {
        setHovering(false);
      }
    };
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      clearInterval(id);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, [pos.x, pos.y]);

  if (isTouch) return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      />
      <div
        className={`cursor-ring ${hovering ? 'cursor-ring--hover' : ''}`}
        style={{ transform: `translate(${ring.x}px, ${ring.y}px)` }}
      />
    </>
  );
};

export default Cursor;
