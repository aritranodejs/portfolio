import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills" data-aos="fade-left">
      <h2 data-aos="fade-left">My Skills</h2>
      <div className="skills-container">
        <div className="skill" data-aos="zoom-in">
          <h3>JavaScript</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
          <p className="skill-percentage">80%</p>
        </div>
        <div className="skill" data-aos="zoom-in" data-aos-delay="100">
          <h3>Node Js</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '80%' }}></div>
          </div>
          <p className="skill-percentage">80%</p>
        </div>
        <div className="skill" data-aos="zoom-in" data-aos-delay="200">
          <h3>MySQL</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '85%' }}></div>
          </div>
          <p className="skill-percentage">85%</p>
        </div>
        <div className="skill" data-aos="zoom-in" data-aos-delay="200">
          <h3>MongoDB</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '70%' }}></div>
          </div>
          <p className="skill-percentage">70%</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
