import React from 'react';
import { motion } from 'framer-motion';
import profilePicture from '../assets/img/profile-picture.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const About = () => {
  return (
    <section id="about" className="about section">
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
      >
        <span className="section-number">01</span>
        <h2 className="section-title">About Me</h2>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-image-wrap"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={profilePicture} alt="Aritra Dutta" className="about-image" />
          <div className="about-image-border" />
        </motion.div>

        <div className="about-content">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            I'm a <strong>MERN Stack Engineer</strong> building fast, secure, and delightful
            products end-to-end. From <strong>Node.js/Express</strong> APIs and SQL/NoSQL data
            models to <strong>React</strong> interfaces, I ship features that move KPIs—reducing
            latency, improving UX, and enabling new workflows.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            I care about readable code, thoughtful architecture, and teams that move with quality.
          </motion.p>
          <motion.blockquote
            className="blockquote"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
          >
            "Quality code is not just written; it is meticulously crafted, continuously improved,
            and thoroughly understood."
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
