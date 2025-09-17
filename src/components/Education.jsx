import React from "react";

const Education = () => {
  return (
    <section id="education" className="education" data-aos="fade-right">
      <h2 data-aos="fade-right">Education</h2>
      <div className="timeline">
        <div className="tl-item" data-aos="fade-up">
          <div className="tl-badge">2021 – 2023</div>
          <div className="tl-card">
            <h3>MCA • Calcutta Institute of Technology (MAKAUT)</h3>
            <p>Focus: Systems design, databases, backend engineering</p>
          </div>
        </div>
        <div className="tl-item" data-aos="fade-up" data-aos-delay="100">
          <div className="tl-badge">2018 – 2021</div>
          <div className="tl-card">
            <h3>B.Sc. (H) Computer Science • University of Calcutta</h3>
            <p>New Alipore College</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

