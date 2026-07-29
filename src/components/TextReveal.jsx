import React from 'react';
import { motion } from 'framer-motion';

const TextReveal = ({ children, delay = 0, className = '' }) => {
  return (
    <span className={`text-reveal-wrap ${className}`} style={{ display: 'inline-block', overflow: 'hidden' }}>
      <motion.span
        style={{ display: 'inline-block' }}
        initial={{ y: '110%', rotateX: -20 }}
        whileInView={{ y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextReveal;
