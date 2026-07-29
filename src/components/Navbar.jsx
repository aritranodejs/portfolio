import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { id: 'about', label: 'About', icon: 'fa-user' },
  { id: 'experience', label: 'Experience', icon: 'fa-building' },
  { id: 'skills', label: 'Skills', icon: 'fa-tools' },
  { id: 'portfolio', label: 'Work', icon: 'fa-briefcase' },
  { id: 'contact', label: 'Contact', icon: 'fa-envelope' },
];

const Navbar = () => {
  const [activeId, setActiveId] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = ['about', 'experience', 'education', 'skills', 'certifications', 'portfolio', 'contact'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#about" className="site-nav-logo" aria-label="Go to about section">
        <span className="logo-bracket">[</span>AD<span className="logo-bracket">]</span>
      </a>

      <button
        type="button"
        className="menu-toggle"
        aria-label="Toggle menu"
        onClick={() => setIsMenuOpen((v) => !v)}
      >
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} />
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <li key={link.id}>
            <a
              className={`nav-link ${activeId === link.id ? 'active' : ''}`}
              href={`#${link.id}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <i className={`fas ${link.icon}`} />
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            className="nav-link nav-cta"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="fas fa-paper-plane" />
            Hire Me
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
