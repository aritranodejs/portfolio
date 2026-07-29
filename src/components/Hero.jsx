import React from 'react';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import MagneticButton from './MagneticButton';

const letterVariants = {
  hidden: { opacity: 0, y: 80, rotateX: -90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.5 + i * 0.035,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const AnimatedText = ({ text, startIndex = 0, className = '' }) => (
  <span className={className} style={{ display: 'inline-block', perspective: '600px' }}>
    {text.split('').map((char, i) => (
      <motion.span
        key={`${startIndex + i}-${char}`}
        custom={startIndex + i}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

const Hero = () => {
  return (
    <header className="hero">
      <HeroBackground />

      <div className="hero-inner">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="pulse-dot" />
          Available for work
        </motion.div>

        <h1 className="hero-title">
          <AnimatedText text="Hello, I'm " startIndex={0} />
          <AnimatedText text="Aritra Dutta" startIndex={11} className="hero-word--accent" />
        </h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Software Engineer — building fast, secure & delightful products with the MERN stack
        </motion.p>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          <div className="hero-stat">
            <span className="hero-stat-num">3+</span>
            <span className="hero-stat-label">Years Exp</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">8+</span>
            <span className="hero-stat-label">Projects</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">1</span>
            <span className="hero-stat-label">Own Product</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        >
          <MagneticButton>
            <a
              href="https://drive.google.com/file/d/1o4wwzH2u3RsfqXXSAGNqiKbX782OHhS6"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume as PDF"
            >
              <i className="fas fa-download" /> Download Resume
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="#portfolio" className="btn btn-ghost">
              <i className="fas fa-arrow-down" /> View Work
            </a>
          </MagneticButton>
        </motion.div>

        <motion.div
          className="hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <span>scroll</span>
          <div className="scroll-line" />
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
