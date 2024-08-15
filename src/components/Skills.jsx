import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills" data-aos="fade-left">
      <h2 data-aos="fade-left">My Skills</h2>
      <div className="skills-container">
        <div className="skill" data-aos="zoom-in">
          <div className="skill-content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCt3rTASmMfpqZzLApJTjnjx85oSICPhSGqcHAqsF7Ma9waCdwdDX&usqp=CAE&s" alt="JavaScript Logo" className="skill-logo" />
            <div className="skill-details">
              <h3>JavaScript</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
              <p className="skill-percentage">80%</p>
            </div>
          </div>
        </div>
        <div className="skill" data-aos="zoom-in" data-aos-delay="100">
          <div className="skill-content">
            <img src="https://nodejs.org/static/images/logo-hexagon-card.png" alt="Node.js Logo" className="skill-logo" />
            <div className="skill-details">
              <h3>Node.js</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
              <p className="skill-percentage">80%</p>
            </div>
          </div>
        </div>
        <div className="skill" data-aos="zoom-in" data-aos-delay="200">
          <div className="skill-content">
            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" alt="Express.js Logo" className="skill-logo" />
            <div className="skill-details">
              <h3>Express.js</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '75%' }}></div>
              </div>
              <p className="skill-percentage">75%</p>
            </div>
          </div>
        </div>
        <div className="skill" data-aos="zoom-in" data-aos-delay="300">
          <div className="skill-content">
            <img src="https://www.svgrepo.com/show/303251/mysql-logo.svg" alt="MySQL Logo" className="skill-logo" />
            <div className="skill-details">
              <h3>MySQL</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '85%' }}></div>
              </div>
              <p className="skill-percentage">85%</p>
            </div>
          </div>
        </div>
        <div className="skill" data-aos="zoom-in" data-aos-delay="400">
          <div className="skill-content">
            <img src="https://i.pngimg.me/thumb/f/350/m2H7i8d3A0N4H7A0.jpg" alt="MongoDB Logo" className="skill-logo" />
            <div className="skill-details">
              <h3>MongoDB</h3>
              <div className="progress-bar">
                <div className="progress" style={{ width: '70%' }}></div>
              </div>
              <p className="skill-percentage">70%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
