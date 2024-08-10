import React from 'react';
import bcuzImage from '../assets/bcuz.svg';  // Correctly importing the image
import stubImage from '../assets/stub.svg';  // Correctly importing the image

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio" data-aos="fade-up">
            <h2>My Work</h2>
            <div className="portfolio-gallery">
                <div className="portfolio-item" data-aos="zoom-in">
                    <img src={bcuzImage} alt="Project 1" />
                    <div className="overlay">
                        <h3>Project 1</h3>
                        <p>A brief description of the project.</p>
                    </div>
                </div>
                <div className="portfolio-item" data-aos="zoom-in" data-aos-delay="100">
                    <img src={stubImage} alt="Project 2" />
                    <div className="overlay">
                        <h3>Project 2</h3>
                        <p>A brief description of the project.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
