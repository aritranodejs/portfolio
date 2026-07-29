import React from 'react';
import { motion } from 'framer-motion';

const groups = [
  {
    title: 'Languages',
    items: [
      { name: 'JavaScript', percent: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'SQL', percent: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Java', percent: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', percent: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', percent: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'REST APIs', percent: 85, logo: 'https://cdn-icons-png.flaticon.com/512/1336/1336494.png' },
      { name: 'Socket.IO', percent: 75, logo: 'https://cdn.worldvectorlogo.com/logos/socket-io.svg' },
      { name: 'Microservices', percent: 70, logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126784.png' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MySQL', percent: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', percent: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', percent: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ],
  },
  {
    title: 'ORM / ODM',
    items: [
      { name: 'Prisma', percent: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
      { name: 'Sequelize', percent: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg' },
      { name: 'Mongoose', percent: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { name: 'AWS EC2/RDS/S3/SQS', percent: 60, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
      { name: 'CI/CD', percent: 70, logo: 'https://cdn.simpleicons.org/githubactions/2088FF' },
      { name: 'Git/GitHub', percent: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'HTML/CSS/Bootstrap', percent: 60, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'React', percent: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    ],
  },
  {
    title: 'Caching',
    items: [
      { name: 'Redis', percent: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-header-row">
          <span className="section-number">04</span>
          <h2 className="section-title">Skills</h2>
        </div>
        <p className="section-subtitle">Technologies I use to build fast, reliable, and scalable products.</p>
      </motion.div>

      {groups.map((group, gIdx) => (
        <div className="skills-group" key={group.title}>
          <motion.h3
            className="skills-category"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gIdx * 0.05, duration: 0.5 }}
          >
            {group.title}
          </motion.h3>
          <div className="skills-grid">
            {group.items.map((s, idx) => (
              <motion.div
                className="skill"
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <img
                  src={s.logo}
                  alt={`${s.name} logo`}
                  className="skill-logo"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="skill-details">
                  <div className="skill-header">
                    <h4>{s.name}</h4>
                    <span className="skill-badge">
                      {s.percent >= 80 ? 'Advanced' : s.percent >= 70 ? 'Proficient' : 'Working'}
                    </span>
                  </div>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={s.percent}
                    aria-label={`${s.name} proficiency`}
                  >
                    <motion.div
                      className="progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.06, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <span className="skill-percent">{s.percent}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
