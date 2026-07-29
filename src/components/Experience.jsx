import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      period: '2023 – Present',
      role: 'Software Engineer',
      company: 'Digital Aptech Private Limited',
      duration: '3+ years',
      highlights: [
        'Architected and delivered full-stack MERN applications serving production traffic',
        'Built microservices-backed platforms with Stripe payments, real-time messaging, and multi-role systems',
        'Optimized database queries and implemented Redis caching for low-latency APIs',
        'Deployed and managed cloud infrastructure on AWS (EC2, RDS, S3, SQS)',
      ],
    },
  ];

  return (
    <section id="experience" className="experience section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-header-row">
          <span className="section-number">02</span>
          <h2 className="section-title">Experience</h2>
        </div>
        <p className="section-subtitle">3+ years shipping production systems for global clients.</p>
      </motion.div>

      <div className="exp-list">
        {experiences.map((exp, i) => (
          <motion.div
            className="exp-card"
            key={exp.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="exp-left">
              <span className="exp-period">{exp.period}</span>
              <span className="exp-duration">{exp.duration}</span>
            </div>
            <div className="exp-right">
              <h3 className="exp-role">{exp.role}</h3>
              <p className="exp-company">{exp.company}</p>
              <ul className="exp-highlights">
                {exp.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
