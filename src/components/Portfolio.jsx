import React, { useState } from 'react';
import Modal from 'react-modal';
import bcuzImage from '../assets/img/bcuz.svg';
import floydsImage from '../assets/img/floyds.svg';
import stubImage from '../assets/img/stub.svg';
import vrasImage from '../assets/img/vras.png';

Modal.setAppElement('#root');

const Portfolio = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});

    const projects = [
        {
            title: 'BCUZ',
            description: 'A brief description of the BCUZ project.',
            backend: 'Node.js, Express.js',
            database: 'MySQL',
            frontend: 'React.js',
            image: bcuzImage,
            liveUrl: 'https://bcuz.us' 
        },
        {
            title: 'VRAS',
            description: 'A brief description of the VRAS project.',
            backend: 'Node.js, Express.js',
            database: 'MySQL',
            frontend: 'React.js',
            image: vrasImage,
            liveUrl: 'https://vras.co.il:5000' 
        },
        {
            title: 'Floyd\'s Lanes',
            description: 'A brief description of the Floyd\'s Lanes project.',
            backend: 'Node.js, Express.js',
            database: 'MySQL',
            frontend: 'React.js',
            image: floydsImage,
            liveUrl: 'https://floydslanes.com'  
        },
        {
            title: 'Stub Avenue',
            description: 'A brief description of the Stub Avenue project.',
            backend: 'Node.js, Express.js',
            database: 'MySQL',
            frontend: 'React.js',
            image: stubImage,
            liveUrl: 'https://stubavenue.com'
        }
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
                            <p>A brief description of the project.</p>
                            <div className="overlay-buttons">
                                <button className="btn-info" onClick={() => openModal(project)}>Info</button>
                                <a className="btn btn-live" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live</a>
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
                <p><strong>Backend:</strong> {selectedProject.backend}</p>
                <p><strong>Database:</strong> {selectedProject.database}</p>
                <p><strong>Frontend:</strong> {selectedProject.frontend}</p>
                <button className="btn-close" onClick={closeModal}>Close</button>
            </Modal>
        </section>
    );
};

export default Portfolio;
