import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";

const Hero = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeId, setActiveId] = useState("about");

    const toggleTheme = () => {
        const next = !isDarkMode;
        setIsDarkMode(next);
        document.body.classList.toggle('dark-mode', next);
        try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch(e) {}
    };

    useEffect(() => {
        try {
            const saved = localStorage.getItem('theme');
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            const shouldDark = saved ? saved === 'dark' : prefersDark;
            setIsDarkMode(shouldDark);
            document.body.classList.toggle('dark-mode', shouldDark);
        } catch(e) {}
    }, []);

    useEffect(() => {
        const sectionIds = ["about", "education", "skills", "portfolio", "contact"];
        const sections = sectionIds
            .map(id => document.getElementById(id))
            .filter(Boolean);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, { threshold: 0.6 });
        sections.forEach(sec => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const onMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            document.documentElement.style.setProperty('--parallaxX', String(x));
            document.documentElement.style.setProperty('--parallaxY', String(y));
        };
        window.addEventListener('mousemove', onMove);
        return () => window.removeEventListener('mousemove', onMove);
    }, []);

    return (
        <header className="hero" data-aos="fade-in">
            <nav>
                <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className="fas fa-bars"></i>
                </button>
                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <li>
                    <a className={`nav-link ${activeId === 'about' ? 'active' : ''}`} href="#about" onClick={()=>setIsMenuOpen(false)}>
                    <i className="fas fa-user"></i> About
                    </a>
                </li>
                <li>
                    <a className={`nav-link ${activeId === 'education' ? 'active' : ''}`} href="#education" onClick={()=>setIsMenuOpen(false)}>
                    <i className="fas fa-graduation-cap"></i> Education
                    </a>
                </li>
                <li>
                    <a className={`nav-link ${activeId === 'skills' ? 'active' : ''}`} href="#skills" onClick={()=>setIsMenuOpen(false)}>
                    <i className="fas fa-tools"></i> Skills
                    </a>
                </li>
                <li>
                    <a className={`nav-link ${activeId === 'portfolio' ? 'active' : ''}`} href="#portfolio" onClick={()=>setIsMenuOpen(false)}>
                    <i className="fas fa-briefcase"></i> Portfolio
                    </a>
                </li>
                <li>
                    <a className={`nav-link ${activeId === 'contact' ? 'active' : ''}`} href="#contact" onClick={()=>setIsMenuOpen(false)}>
                    <i className="fas fa-envelope"></i> Contact
                    </a>
                </li>
                <button id="theme-toggle" onClick={toggleTheme} aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}>
                    <i className={isDarkMode ? "fas fa-moon" : "fas fa-sun"}></i>
                </button>
                </ul>
            </nav>
            <div className="parallax-layer layer-1" aria-hidden="true"></div>
            <div className="parallax-layer layer-2" aria-hidden="true"></div>
            <div className="hero-content">
                <h1 data-aos="fade-up">Hello, I'm Aritra Dutta</h1>
                <p data-aos="fade-up" data-aos-delay="100">
                MERN Stack Developer
                </p>
                <a
                href="https://drive.google.com/file/d/1o4wwzH2u3RsfqXXSAGNqiKbX782OHhS6"
                download
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay="300"
                aria-label="Download resume as PDF"
                >
                <i className="fas fa-download"></i> Download Resume
                </a>
            </div>
        </header>
    );
};

export default Hero;
