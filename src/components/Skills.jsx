import React from "react";

const groups = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", percent: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "SQL", percent: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Java", percent: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
    ]
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", percent: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", percent: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "REST APIs", percent: 85, logo: "https://cdn-icons-png.flaticon.com/512/1336/1336494.png" },
      { name: "Socket.IO", percent: 75, logo: "https://cdn.worldvectorlogo.com/logos/socket-io.svg" },
      { name: "Microservices", percent: 70, logo: "https://cdn-icons-png.flaticon.com/512/1126/1126784.png" }
    ]
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", percent: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", percent: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", percent: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
    ]
  },
  {
    title: "ORM / ODM",
    items: [
      { name: "Prisma", percent: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
      { name: "Sequelize", percent: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" },
      { name: "Mongoose", percent: 70, logo: "https://seeklogo.com/images/M/mongoose-logo-62666D6B82-seeklogo.com.png" }
    ]
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS EC2/RDS/S3/SQS", percent: 60, logo: "https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg" },
      { name: "CI/CD", percent: 70, logo: "https://cdn.simpleicons.org/githubactions/2088FF" },
      { name: "Git/GitHub", percent: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ]
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML/CSS/Bootstrap", percent: 60, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "React", percent: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ]
  },
  {
    title: "Caching",
    items: [
      { name: "Redis", percent: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills" data-aos="fade-left">
      <h2 data-aos="fade-left">My Skills</h2>
      {groups.map((group, gIdx) => (
        <div className="skills-group" key={group.title} data-aos="fade-up" data-aos-delay={gIdx * 50}>
          <div className="skills-title">{group.title}</div>
          <div className="skills-tree">
          <div className="skills-container">
            {group.items.map((s, idx) => (
              <div className="skill" data-aos="zoom-in" data-aos-delay={(idx % 5) * 100} key={s.name}>
                <div className="skill-content">
                  <img src={s.logo} alt={`${s.name} Logo`} className="skill-logo" loading="lazy" onError={(e)=>{e.currentTarget.style.display='none'; e.currentTarget.nextSibling?.classList.add('no-logo');}} />
                  <div className="skill-details">
                    <h3>{s.name}</h3>
                    <div className="progress-bar" aria-label={`${s.name} proficiency`} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={s.percent}>
                      <div className="progress" style={{ width: `${s.percent}%` }}></div>
                    </div>
                    <p className="skill-percentage">{s.percent}%</p>
                  </div>
                  <span className="badge">{s.percent >= 80 ? 'Advanced' : s.percent >= 70 ? 'Proficient' : 'Working'}</span>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
