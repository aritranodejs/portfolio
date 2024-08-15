import React from "react";

const Education = () => {
  return (
    <section id="education" className="education" data-aos="fade-right">
      <h2 data-aos="fade-right">Education</h2>
      <div className="education-container">
        <div className="education-item" data-aos="zoom-in">
          <div className="education-image">
            <img src="https://images.shiksha.com/mediadata/images/1493185822phpa1BEAS.jpeg" alt="MCA" />
          </div>
          <div className="education-content">
            <h3>Master Of Computer Application(MCA)</h3>
            <p>Calcutta Institute of Technology(CIT)</p>
            <p>MAKAUT University, Kolkata</p>
            <p>2021 - 2023</p>
          </div>
        </div>
        <div className="education-item" data-aos="zoom-in" data-aos-delay="100">
          <div className="education-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrzOlF2TSoi4HrhwPjNbXvyfAn31B8mul_9A&s" alt="B.Sc" />
          </div>
          <div className="education-content">
            <h3>B.Sc. (Honours) Computer Science</h3>
            <p>New Alipore College</p>
            <p>University Of Calcutta, Kolkata</p>
            <p>2018 - 2021</p>
          </div>
        </div>
        <div className="education-item" data-aos="zoom-in" data-aos-delay="100">
          <div className="education-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkyc5b-ysQd90Z9hbyF-MqzphFd99I0290VRnDkwRLqDIIr7Jq4q8PEQAI7PuVm29gT_M&usqp=CAU" alt="Higher Secondary" />
          </div>
          <div className="education-content">
            <h3>Higher Secondary Education</h3>
            <p>Kalipur High School, Budge Budge</p>
            <p>2016 - 2018</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
