import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
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
        BCUZ is an innovative crowdfunding platform that effortlessly connects organizers, supporters, and restaurants to fund meaningful causes. Organizers can create campaigns, search for restaurants by ZIP code, invite them to participate, and begin fundraising. Restaurants can easily create accounts on the platform and participate in campaigns. Admins ensure the platform’s credibility by approving campaigns and restaurant registrations. Additionally, restaurants have the authority to approve campaigns they’ve been invited to by organizers.
        Supporters can explore campaigns, view detailed information, choose a restaurant, and place orders directly through the platform. The funds from these orders are distributed between the beneficiary and the restaurant, with the admin overseeing the allocation. Restaurants can manage orders via a tablet or web application, contributing to the campaign's success while earning a share of the raised funds.
        BCUZ uniquely combines crowdfunding with local business engagement, offering a transparent and interactive way for supporters to back causes they care about while enjoying their meals.`,
      backend: "Node.js, Express.js",
      database: "MySQL",
      frontend: "Next.js",
      image: bcuzImage,
      liveUrl: "https://bcuz.us",
    },
    {
      title: "VRAS",
      description: "",
      backend: "Node.js, Express.js",
      database: "MySQL",
      frontend: "React.js",
      image: vrasImage,
      liveUrl: "http://vras.co.il:5050",
    },
    {
      title: "Floyd's Lanes",
      description: `Developed a user-friendly website enabling seamless shuttle bookings for customers. The platform offers Admin and Customer roles, allowing customers to book shuttles for specific dates and events while choosing from various car categories.`,
      backend: "Laravel",
      database: "MySQL",
      frontend: "HTML,CSS,JavaScript,AJAX",
      image: floydsImage,
      liveUrl: "https://floydslanes.com",
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
        <button className="btn-cross" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
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
