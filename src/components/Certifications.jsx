import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCertificate } from '@fortawesome/free-solid-svg-icons';

const Certifications = () => {
  const certs = [
    { title: 'Certification in Java', link: 'https://drive.google.com/file/d/19bf-YGAgel3ww_t3NiTKkssMbGL46eUM/view?usp=sharing' },
    { title: 'Certification in Web Development Bootcamp', link: 'https://drive.google.com/file/d/1LCBc8sX72gW2iz-oBcanZ2Cu3LoLeWhV/view?usp=sharing' },
    { title: 'Certification in MERN Stack', link: 'https://drive.google.com/file/d/1oDAA5ywT-galAy1K5cGLPXl1DDzU7i4O/view?usp=sharing' },
  ];

  return (
    <section id="certifications" className="certifications section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-header-row">
          <span className="section-number">05</span>
          <h2 className="section-title">Certifications</h2>
        </div>
        <p className="section-subtitle">Professional credentials in Java, web development, and the MERN stack.</p>
      </motion.div>

      <div className="cert-grid">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            className="cert-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="cert-icon" aria-hidden="true">
              <FontAwesomeIcon icon={faCertificate} />
            </div>
            <div className="cert-body">
              <h3>{c.title}</h3>
            </div>
            {c.link && (
              <a className="cert-cta" href={c.link} target="_blank" rel="noreferrer" title="View Certificate">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
