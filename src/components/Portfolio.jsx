import React from 'react';
import bcuzImage from '../assets/img/bcuz.svg';  // Correctly importing the image
import floydsImage from '../assets/img/floyds.svg';  // Correctly importing the image
import stubImage from '../assets/img/stub.svg';  // Correctly importing the image
import vrasImage from '../assets/img/vras.png';  // Correctly importing the image


const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio" data-aos="fade-up">
            <h2>My Work</h2>
            <div className="portfolio-gallery">
                <div className="portfolio-item" data-aos="zoom-in">
                    <img src={bcuzImage} alt="bcuz" />
                    <div className="overlay">
                        <h3>BCUZ</h3>
                        <p>A brief description of the project.</p>
                    </div>
                </div>
                <div className="portfolio-item" data-aos="zoom-in">
                    <img src={vrasImage} alt="vras" />
                    <div className="overlay">
                        <h3>VRAS</h3>
                        <p>A brief description of the project.</p>
                    </div>
                </div>
                <div className="portfolio-item" data-aos="zoom-in" data-aos-delay="100">
                    <img src={floydsImage} alt="floyds lanes" />
                    <div className="overlay">
                        <h3>Floyd's Lanes</h3>
                        <p>A brief description of the project.</p>
                    </div>
                </div>
                <div className="portfolio-item" data-aos="zoom-in" data-aos-delay="100">
                    <img src={stubImage} alt="stub avenue" />
                    <div className="overlay">
                        <h3>Stub Avenue</h3>
                        <p>A brief description of the project.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
