import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// Removed project images to switch to content-only premium cards

Modal.setAppElement("#root");

const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "BCUZ",
      description: `
        BCUZ is an innovative crowdfunding platform that effortlessly connects organizers, supporters, and restaurants to fund meaningful causes. Organizers can create campaigns, search for restaurants by ZIP code, invite them to participate, and begin fundraising. Restaurants can easily create accounts on the platform and participate in campaigns. Admins ensure the platform’s credibility by approving campaigns and restaurant registrations. Additionally, restaurants have the authority to approve campaigns they’ve been invited to by organizers.
        Supporters can explore campaigns, view detailed information, choose a restaurant, and place orders directly through the platform. The funds from these orders are distributed between the beneficiary and the restaurant, with the admin overseeing the allocation. Restaurants can manage orders via a tablet or web application, contributing to the campaign's success while earning a share of the raised funds.
        BCUZ uniquely combines crowdfunding with local business engagement, offering a transparent and interactive way for supporters to back causes they care about while enjoying their meals.`,
      backend: "Node.js, Express.js",
      database: "MySQL",
      frontend: "Next.js",
      image: null,
      liveUrl: "https://bcuz.us",
      categories: ["Node.js", "Next.js", "MySQL"],
      outcomes: [
        "Optimized queries reduced API latency by ~25%",
        "Enabled multi-role workflows for admins and restaurants",
      ],
    },
    {
      title: "VRAS",
      description: "Developed browser API and backend for a Virtual Reality Application System with secure auth and role-based scenario access for security personnel.",
      backend: "Node.js, Express.js",
      database: "MySQL",
      frontend: "React.js",
      image: null,
      liveUrl: "http://vras.co.il:5050",
      categories: ["Node.js", "React", "MySQL"],
      outcomes: [
        "Role-based access improved security and auditability",
        "Solid auth flow hardened sensitive routes",
      ],
    },
    {
      title: "Legis Music",
      description: "Royalty-free music distribution platform enabling search, licensing and streaming of copyright-safe tracks.",
      backend: "Node.js, Express.js",
      database: "MySQL",
      frontend: "Next.js",
      image: null,
      liveUrl: "https://www.legismusic.com/",
      categories: ["Node.js", "Next.js", "MySQL"],
      outcomes: [
        "Scaled catalog search and licensing flows",
      ],
    },
    {
      title: "1st Choice Formation",
      description: "Secure file management with roles: Super Admin, Employee, Client, including upload and access controls.",
      backend: "Node.js, Express.js",
      database: "MongoDB",
      frontend: "React.js",
      image: null,
      liveUrl: "https://1st-choice-formation.smart-doc.co.uk",
      categories: ["Node.js", "React", "MongoDB"],
      outcomes: [
        "Granular RBAC reduced support overhead for access issues",
      ],
    },
    {
      title: "Floyd's Lanes",
      description: `Developed a user-friendly website enabling seamless shuttle bookings for customers. The platform offers Admin and Customer roles, allowing customers to book shuttles for specific dates and events while choosing from various car categories.`,
      backend: "Laravel",
      database: "MySQL",
      frontend: "HTML,CSS,JavaScript,AJAX",
      image: null,
      liveUrl: "https://floydslanes.com",
      categories: ["Laravel", "MySQL"],
      outcomes: [
        "Streamlined bookings across car categories",
      ],
    },
    {
      title: "Stub Avenue",
      description: `Stub Avenue revolutionizes the event ticketing landscape by granting organizers unparalleled control over their events. This dynamic platform empowers event organizers to effortlessly create, share, advertise, and sell tickets, while delivering comprehensive event analytics and reports.
        Stub Avenue supports the generation of e-tickets and offers a range of customizable, secure physical tickets, all seamlessly scannable via mobile devices for robust entry management.
        For users, Stub Avenue simplifies the event experience with a user-friendly interface that allows for quick and easy searching and purchasing of e-tickets directly from their mobile devices.
        By continuously evolving its toolset, Stub Avenue strives to provide both organizers and patrons with the ideal event experience, blending convenience, security, and efficiency in one innovative solution.
        `,
      backend: "Node.js, Express.js",
      database: "MySQL",
      frontend: "React.js",
      image: null,
      liveUrl: "https://stubavenue.com",
      categories: ["Node.js", "React", "MySQL"],
      outcomes: [
        "Processed 1000+ ticket sales in first month",
        "Optimized DB queries improved response ~20%",
      ],
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section id="portfolio" className="portfolio" data-aos="fade-up">
      <h2>My Work</h2>
      <div className="portfolio-filter" role="tablist" aria-label="Project filters">
        {["All","Node.js","React","Next.js","Laravel","MySQL","MongoDB"].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
            role="tab"
            aria-selected={filter === cat}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="portfolio-gallery">
        {projects
          .filter(p => filter === 'All' || p.categories?.includes(filter))
          .map((project, index) => (
          <div className="portfolio-item" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
            <div className="portfolio-card">
              <div className="portfolio-card-body">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-desc">{(project.description || '').toString().slice(0, 160)}{(project.description || '').length > 160 ? '…' : ''}</p>
                <div className="portfolio-tags">
                  {project.backend && <span className="portfolio-tag">{project.backend}</span>}
                  {project.database && <span className="portfolio-tag">{project.database}</span>}
                  {project.frontend && <span className="portfolio-tag">{project.frontend}</span>}
                </div>
                <div className="portfolio-actions">
                  <button className="btn-portfolio-info" onClick={() => openModal(project)}>
                    View More
                  </button>
                  <a
                    className="btn-portfolio-live"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Details"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <button className="btn-cross" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2 className="modal-title">{selectedProject.title}</h2>
        <div className="modal-tags">
          {selectedProject.backend && <span className="chip">{selectedProject.backend}</span>}
          {selectedProject.database && <span className="chip">{selectedProject.database}</span>}
          {selectedProject.frontend && <span className="chip">{selectedProject.frontend}</span>}
        </div>
        <p>{selectedProject.description}</p>
        <h3>Tech Stack :</h3>
        <p>
          <strong>Backend:</strong> {selectedProject.backend}
        </p>
        <p>
          <strong>Database:</strong> {selectedProject.database}
        </p>
        <p>
          <strong>Frontend:</strong> {selectedProject.frontend}
        </p>
        {selectedProject.outcomes?.length > 0 && (
          <>
            <h3>Outcomes:</h3>
            <ul>
              {selectedProject.outcomes.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </>
        )}
        <button className="btn-close" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </section>
  );
};

export default Portfolio;
