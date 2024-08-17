import React, { useState } from "react";
import Modal from "react-modal";
import bcuzImage from "../assets/img/bcuz.svg";
import floydsImage from "../assets/img/floyds.svg";
import stubImage from "../assets/img/stub.svg";
import vrasImage from "../assets/img/vras.png";

Modal.setAppElement("#root");

const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const projects = [
    {
      title: "BCUZ",
      description: `
        BCUZ is an innovative crowdfunding platform that seamlessly connects organizers, supporters, and restaurants to fund meaningful causes. Organizers can create campaigns, add restaurants either manually or via Google Places API, and start fundraising. Admins ensure the credibility of the platform by approving campaigns and restaurant registrations.
        Supporters can browse campaigns, view detailed information, select a restaurant, and place orders directly through the platform. Funds from orders are split between the beneficiary and the restaurant, with the admin controlling the distribution. Restaurants can manage orders via tablet or web application, contributing to the campaign’s success while receiving a portion of the raised funds.
        BCUZ combines crowdfunding with local business engagement, offering a transparent and interactive way for supporters to back causes they care about while enjoying their meals.`,
      backend: "Node.js, Express.js",
      database: "MySQL",
      frontend: "React.js",
      image: bcuzImage,
      liveUrl: "https://bcuz.us",
    },
    {
      title: "VRAS",
      description: "A brief description of the VRAS project.",
      backend: "Node.js, Express.js",
      database: "MySQL",
      frontend: "React.js",
      image: vrasImage,
      liveUrl: "https://vras.co.il:5000",
    },
    {
      title: "Floyd's Lanes",
      description: "A brief description of the Floyd's Lanes project.",
      backend: "Node.js, Express.js",
      database: "MySQL",
      frontend: "React.js",
      image: floydsImage,
      liveUrl: "https://floydslanes.com",
    },
    {
      title: "Stub Avenue",
      description: "A brief description of the Stub Avenue project.",
      backend: "Node.js, Express.js",
      database: "MySQL",
      frontend: "React.js",
      image: stubImage,
      liveUrl: "https://stubavenue.com",
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
      <div className="portfolio-gallery">
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index} data-aos="zoom-in">
            <img src={project.image} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <div className="overlay-buttons">
                <button className="btn-info" onClick={() => openModal(project)}>
                  Info
                </button>
                <a
                  className="btn btn-live"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
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
        <h2>{selectedProject.title}</h2>
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
        <button className="btn-close" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </section>
  );
};

export default Portfolio;
