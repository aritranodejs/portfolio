import React, { useEffect } from 'react';
import AOS from 'aos';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true,
        });
    }, []);

    return (
        <div>
            <ToastContainer />
            <Hero />
            <About />
            <Education />
            <Skills />
            <Portfolio />
            <Contact />
            <footer className="footer">
                <p>&copy; 2024 Aritra Dutta. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
