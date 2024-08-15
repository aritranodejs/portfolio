import React from "react";
import profilePicture from "../assets/img/profile-picture.jpg"; // Correctly importing the image

const About = () => {
  return (
    <section id="about" className="about" data-aos="fade-right">
      <h2 data-aos="fade-right">About Me</h2>
      <img src={profilePicture} alt="Profile" data-aos="zoom-in" />
      <p data-aos="fade-left">
        Passionate and driven Software Engineer with a strong focus on
        Node.js, aspiring to specialize and grow as a Node.js developer. I bring
        hands-on experience in JavaScript, Node.js, Express.js, MySQL, MongoDB,
        PHP, and Laravel, with a commitment to delivering innovative software
        solutions that push technological boundaries. I thrive in collaborative
        environments where creativity and problem-solving are at the forefront,
        and I'm continuously seeking opportunities to expand my skill set and
        deepen my expertise in Node.js. Let's connect to explore how my passion
        for Node.js can contribute to impactful projects and foster positive
        change through technology.
      </p>
      <blockquote data-aos="fade-left" data-aos-delay="100">
        "Quality code is not just written; it’s meticulously crafted,
        continuously improved, and thoroughly understood."
      </blockquote>
    </section>
  );
};

export default About;
