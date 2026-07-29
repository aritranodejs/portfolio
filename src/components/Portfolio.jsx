import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root');

const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Vietlist',
      description: 'Multi-role directory and listing platform (users, business users, agents, admins) to simplify discovery and management of Vietnamese-owned businesses worldwide. Microservices-backed workflows with Stripe payments for subscriptions and one-time transactions. Real-time messaging and notifications boosting user engagement. Scalable, secure infrastructure with AWS, Redis caching, and Prisma-synced schemas.',
      backend: 'Node.js, Express.js',
      database: 'PostgreSQL',
      frontend: 'Next.js, React.js',
      liveUrl: 'https://vietlist.com/',
      categories: ['Node.js', 'Next.js', 'React', 'PostgreSQL'],
      type: 'Company',
      outcomes: [
        'Microservices + Stripe improved operational flexibility',
        'Real-time messaging boosted user engagement',
        'AWS + Redis caching enabled rapid scalability',
      ],
    },
    {
      title: 'APILynx',
      description: 'A modern, free API client for teams who want Postman-style workflows without the bloat. Test endpoints, organize collections, publish docs, run load tests, mock servers — desktop & browser. First tool to support HTTP QUERY method (RFC 10008). MIT licensed.',
      backend: 'Node.js, Express.js',
      database: 'PostgreSQL',
      frontend: 'React.js, Next.js',
      liveUrl: 'https://apilynx.vercel.app/',
      categories: ['Node.js', 'React', 'Next.js', 'PostgreSQL'],
      type: 'Own Product',
      outcomes: [
        'First API client to support HTTP QUERY (RFC 10008)',
        'Desktop + browser with zero signup required',
        'Postman-style collections, environments, mock server & load testing',
      ],
    },
    {
      title: 'BCUZ',
      description: `BCUZ is an innovative crowdfunding platform that effortlessly connects organizers, supporters, and restaurants to fund meaningful causes. Organizers can create campaigns, search for restaurants by ZIP code, invite them to participate, and begin fundraising. Restaurants can easily create accounts on the platform and participate in campaigns. Admins ensure the platform's credibility by approving campaigns and restaurant registrations. Additionally, restaurants have the authority to approve campaigns they've been invited to by organizers.
        Supporters can explore campaigns, view detailed information, choose a restaurant, and place orders directly through the platform. The funds from these orders are distributed between the beneficiary and the restaurant, with the admin overseeing the allocation. Restaurants can manage orders via a tablet or web application, contributing to the campaign's success while earning a share of the raised funds.
        BCUZ uniquely combines crowdfunding with local business engagement, offering a transparent and interactive way for supporters to back causes they care about while enjoying their meals.`,
      backend: 'Node.js, Express.js',
      database: 'MySQL',
      frontend: 'Next.js',
      liveUrl: 'https://bcuz.us',
      categories: ['Node.js', 'Next.js', 'MySQL'],
      type: 'Company',
      outcomes: [
        'Optimized queries reduced API latency by ~25%',
        'Enabled multi-role workflows for admins and restaurants',
      ],
    },
    {
      title: 'VRAS',
      description: 'Developed browser API and backend for a Virtual Reality Application System with secure auth and role-based scenario access for security personnel.',
      backend: 'Node.js, Express.js',
      database: 'MySQL',
      frontend: 'React.js',
      liveUrl: 'http://vras.co.il:5050',
      categories: ['Node.js', 'React', 'MySQL'],
      type: 'Company',
      outcomes: [
        'Role-based access improved security and auditability',
        'Solid auth flow hardened sensitive routes',
      ],
    },
    {
      title: 'Legis Music',
      description: 'Royalty-free music distribution platform enabling search, licensing and streaming of copyright-safe tracks.',
      backend: 'Node.js, Express.js',
      database: 'MySQL',
      frontend: 'Next.js',
      liveUrl: 'https://www.legismusic.com/',
      categories: ['Node.js', 'Next.js', 'MySQL'],
      type: 'Company',
      outcomes: ['Scaled catalog search and licensing flows'],
    },
    {
      title: '1st Choice Formation',
      description: 'Secure file management with roles: Super Admin, Employee, Client, including upload and access controls.',
      backend: 'Node.js, Express.js',
      database: 'MongoDB',
      frontend: 'React.js',
      liveUrl: 'https://1st-choice-formation.smart-doc.co.uk',
      categories: ['Node.js', 'React', 'MongoDB'],
      type: 'Company',
      outcomes: ['Granular RBAC reduced support overhead for access issues'],
    },
    {
      title: "Floyd's Lanes",
      description: 'Developed a user-friendly website enabling seamless shuttle bookings for customers. The platform offers Admin and Customer roles, allowing customers to book shuttles for specific dates and events while choosing from various car categories.',
      backend: 'Laravel',
      database: 'MySQL',
      frontend: 'HTML,CSS,JavaScript,AJAX',
      liveUrl: 'https://floydslanes.com',
      categories: ['Laravel', 'MySQL'],
      type: 'Company',
      outcomes: ['Streamlined bookings across car categories'],
    },
    {
      title: 'Stub Avenue',
      description: `Stub Avenue revolutionizes the event ticketing landscape by granting organizers unparalleled control over their events. This dynamic platform empowers event organizers to effortlessly create, share, advertise, and sell tickets, while delivering comprehensive event analytics and reports.
        Stub Avenue supports the generation of e-tickets and offers a range of customizable, secure physical tickets, all seamlessly scannable via mobile devices for robust entry management.
        For users, Stub Avenue simplifies the event experience with a user-friendly interface that allows for quick and easy searching and purchasing of e-tickets directly from their mobile devices.
        By continuously evolving its toolset, Stub Avenue strives to provide both organizers and patrons with the ideal event experience, blending convenience, security, and efficiency in one innovative solution.`,
      backend: 'Node.js, Express.js',
      database: 'MySQL',
      frontend: 'React.js',
      liveUrl: 'https://stubavenue.com',
      categories: ['Node.js', 'React', 'MySQL'],
      type: 'Company',
      outcomes: [
        'Processed 1000+ ticket sales in first month',
        'Optimized DB queries improved response ~20%',
      ],
    },
  ];

  const filters = ['All', 'Own Product', 'Company', 'Node.js', 'React', 'Next.js', 'Laravel', 'MySQL', 'PostgreSQL', 'MongoDB'];

  return (
    <section id="portfolio" className="portfolio section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-number">05</span>
        <h2 className="section-title">Selected Work</h2>
      </motion.div>

      <div className="portfolio-filter" role="tablist" aria-label="Project filters">
        {filters.map((cat) => (
          <motion.button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
            role="tab"
            aria-selected={filter === cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <div className="portfolio-gallery">
        {projects
          .filter((p) => filter === 'All' || p.categories?.includes(filter) || p.type === filter)
          .map((project, index) => (
            <motion.div
              className="portfolio-item"
              key={project.title}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="portfolio-card"
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                <div className="portfolio-card-index">
                  {String(index + 1).padStart(2, '0')}
                </div>
                {project.type && (
                  <span className={`portfolio-type-badge ${project.type === 'Own Product' ? 'badge-own' : 'badge-company'}`}>
                    {project.type}
                  </span>
                )}
                <div className="portfolio-card-body">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-desc">
                    {(project.description || '').toString().slice(0, 140)}
                    {(project.description || '').length > 140 ? '…' : ''}
                  </p>
                  <div className="portfolio-tags">
                    {project.categories?.map((tag) => (
                      <span className="portfolio-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="portfolio-actions">
                    <button className="btn-portfolio-info" onClick={() => {
                      setSelectedProject(project);
                      setModalIsOpen(true);
                    }}>
                      Details
                    </button>
                    <a
                      className="btn-portfolio-live"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Project Details"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <button className="btn-cross" onClick={() => setModalIsOpen(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2 className="modal-title">{selectedProject.title}</h2>
        <div className="modal-tags">
          {selectedProject.backend && <span className="chip">{selectedProject.backend}</span>}
          {selectedProject.database && <span className="chip">{selectedProject.database}</span>}
          {selectedProject.frontend && <span className="chip">{selectedProject.frontend}</span>}
        </div>
        <p>{selectedProject.description}</p>
        <h3>Tech Stack</h3>
        <p><strong>Backend:</strong> {selectedProject.backend}</p>
        <p><strong>Database:</strong> {selectedProject.database}</p>
        <p><strong>Frontend:</strong> {selectedProject.frontend}</p>
        {selectedProject.outcomes?.length > 0 && (
          <>
            <h3>Outcomes</h3>
            <ul>
              {selectedProject.outcomes.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </>
        )}
        <button className="btn-close" onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </section>
  );
};

export default Portfolio;
