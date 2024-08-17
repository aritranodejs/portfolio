import React, { useState } from "react";
import "aos/dist/aos.css";

const Hero = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode');
    };

    return (
        <header className="hero" data-aos="fade-in">
            <nav>
                <ul>
                <li>
                    <a href="#about">
                    <i className="fas fa-user"></i> About
                    </a>
                </li>
                <li>
                    <a href="#education">
                    <i className="fas fa-graduation-cap"></i> Education
                    </a>
                </li>
                <li>
                    <a href="#skills">
                    <i className="fas fa-tools"></i> Skills
                    </a>
                </li>
                <li>
                    <a href="#portfolio">
                    <i className="fas fa-briefcase"></i> Portfolio
                    </a>
                </li>
                <li>
                    <a href="#contact">
                    <i className="fas fa-envelope"></i> Contact
                    </a>
                </li>
                <button id="theme-toggle" onClick={toggleTheme} title="Work In Progress">
                    <i className={isDarkMode ? "fas fa-moon" : "fas fa-sun"}></i>
                </button>
                </ul>
            </nav>
            <div className="hero-content">
                <h1 data-aos="fade-up">Hello, I'm Aritra Dutta</h1>
                <p data-aos="fade-up" data-aos-delay="100">
                MERN Stack Developer
                </p>
                <a
                href="https://docs.google.com/document/d/1Sv7rZkpbkD4YA_n2GyhxioySHOhxoSb0wvKBtkfp4eQ/edit#heading=h.4c8x24hj4h4m"
                download
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
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
