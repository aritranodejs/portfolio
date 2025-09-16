import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCertificate } from '@fortawesome/free-solid-svg-icons';

const Certifications = () => {
  const certs = [
    { title: "Certification in Java", link: "https://drive.google.com/file/d/19bf-YGAgel3ww_t3NiTKkssMbGL46eUM/view?usp=sharing" },
    { title: "Certification in Web Development Bootcamp", link: "https://drive.google.com/file/d/1LCBc8sX72gW2iz-oBcanZ2Cu3LoLeWhV/view?usp=sharing" },
    { title: "Certification in MERN Stack", link: "https://drive.google.com/file/d/1oDAA5ywT-galAy1K5cGLPXl1DDzU7i4O/view?usp=sharing" },
  ];

  return (
    <section id="certifications" className="education" data-aos="fade-up">
      <h2>Certifications</h2>
      <div className="cert-grid">
        {certs.map((c, i) => (
          <div key={c.title} className="cert-card" data-aos="zoom-in" data-aos-delay={i * 50}>
            <div className="cert-icon" aria-hidden="true"><FontAwesomeIcon icon={faCertificate} /></div>
            <div className="cert-body">
              <h3>{c.title}</h3>
            </div>
            {c.link && (
              <a className="cert-cta" href={`${c.link}`} target="_blank" rel="noreferrer" title="View Certificate">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;


