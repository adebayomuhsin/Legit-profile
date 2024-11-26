import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    { role: 'Frontend Developer', company: 'TechCorp', duration: 'Jan 2020 - Present' },
    { role: 'Web Designer', company: 'Designify', duration: 'Jun 2018 - Dec 2019' },
  ];

  return (
    <div className="experience" id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.role}</h3>
            <p>{exp.company}</p>
            <span>{exp.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
