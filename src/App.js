import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import './App.css';
import './assets/css/premium.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
      const shouldDark = saved ? saved === 'dark' : prefersDark;
      setIsDarkMode(shouldDark);
      document.body.classList.toggle('dark-mode', shouldDark);
    } catch (e) { /* ignore */ }
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.body.classList.toggle('dark-mode', next);
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch (e) { /* ignore */ }
  };

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <ToastContainer theme={isDarkMode ? 'dark' : 'light'} />
      <Navbar />
      <button
        id="theme-toggle"
        onClick={toggleTheme}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <i className={isDarkMode ? 'fas fa-sun' : 'fas fa-moon'} />
      </button>
      <div className="app">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
      <Chatbot />
    </>
  );
};

export default App;
