import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { title: 'Petroleum Website', description: 'A responsive personal website.', link: '#' },
    { title: 'E-Commerce Store', description: 'A modern e-commerce platform.', link: '#' },
    {title: 'kyc registration website', description: 'A kyc registration site.', link: '#' },
    {title: 'Google form ', description: 'A responsive Google form.', link: '#' },
  ];

  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
