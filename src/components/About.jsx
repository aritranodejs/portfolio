import React from 'react';
import profilePicture from '../assets/profile-picture.jpg'; // Correctly importing the image

const About = () => {
    return (
        <section id="about" className="about" data-aos="fade-right">
            <h2 data-aos="fade-right">About Me</h2>
            <img src={profilePicture} alt="Profile Picture" data-aos="zoom-in" />
            <p data-aos="fade-left">
                I'm a passionate web developer with experience in creating responsive, dynamic websites and applications. I
                enjoy bringing ideas to life in the browser.
            </p>
            <blockquote data-aos="fade-left" data-aos-delay="100">
                "Code is like humor. When you have to explain it, it's not funny anymore."
            </blockquote>
        </section>
    );
};

export default About;
