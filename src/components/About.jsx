import React from "react";
import profilePicture from "../assets/img/profile-picture.jpg"; // Correctly importing the image

const About = () => {
  return (
    <section id="about" className="about" data-aos="fade-right">
      <h2 data-aos="fade-right">About Me</h2>
      <img src={profilePicture} alt="Profile" data-aos="zoom-in" />
      <p data-aos="fade-left">
        I’m a <strong>MERN Stack Engineer</strong> building fast, secure, and delightful products end‑to‑end.
        From <strong>Node.js/Express</strong> APIs and SQL/NoSQL data models to <strong>React</strong> interfaces,
        I ship features that move KPIs—reducing latency, improving UX, and enabling new workflows.
        I care about readable code, thoughtful architecture, and teams that move with quality.
      </p>
      <blockquote class="blockquote" data-aos="fade-left" data-aos-delay="100">
        "Quality code is not just written; it is meticulously crafted,
        continuously improved, and thoroughly understood."
      </blockquote>
    </section>
  );
};

export default About;
