import React from "react";
import "aos/dist/aos.css";

const Hero = () => {
    return (
        <header className="hero" data-aos="fade-in">
            <nav>
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <div class="hero-content">
                <h1 data-aos="fade-up">Hello, I'm Aritra Dutta</h1>
                <p data-aos="fade-up" data-aos-delay="100">
                    MERN Stack Developer
                </p>
                <a
                    href="resume.pdf"
                    download
                    class="btn"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <i className="fas fa-download"></i> Download Resume
                </a>
            </div>
        </header>
    );
};

export default Hero;
