import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js','Bootstrap', ];

  return (
    <div className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
