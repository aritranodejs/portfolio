import React from 'react';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import MagneticButton from './MagneticButton';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  return (
    <header className="hero">
      <HeroBackground />

      <div className="hero-inner">
        <motion.div
          className="hero-badge"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
        >
          <span className="pulse-dot" />
          Available for work
        </motion.div>

        <motion.h1
          className="hero-title"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          Hello, I&apos;m{' '}
          <span className="hero-word--accent">Aritra Dutta</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
        >
          Node.js Engineer crafting scalable backends, microservices &amp; polished web experiences
        </motion.p>

        <motion.div
          className="hero-stats-glass"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
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
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.65}
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
          className="hero-social"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.75}
        >
          <a href="https://github.com/aritranodejs" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/aritra-dutta-2a3a8322b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="mailto:aritra.nodejsdeveloper@gmail.com" aria-label="Email">
            <i className="fas fa-envelope" />
          </a>
        </motion.div>

        <motion.div
          className="hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span>scroll</span>
          <div className="scroll-line" />
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
