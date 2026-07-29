import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const items = [
    {
      period: '2021 – 2023',
      title: 'MCA • Calcutta Institute of Technology (MAKAUT)',
      desc: 'Focus: Systems design, databases, backend engineering',
    },
    {
      period: '2018 – 2021',
      title: 'B.Sc. (H) Computer Science • University of Calcutta',
      desc: 'New Alipore College',
    },
  ];

  return (
    <section id="education" className="education section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-header-row">
          <span className="section-number">03</span>
          <h2 className="section-title">Education</h2>
        </div>
        <p className="section-subtitle">Strong foundation in computer science and software engineering.</p>
      </motion.div>

      <div className="timeline">
        {items.map((item, i) => (
          <motion.div
            className="tl-item"
            key={item.period}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="tl-badge">{item.period}</div>
            <motion.div
              className="tl-card"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
