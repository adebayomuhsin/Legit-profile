import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'All currency converter',
      description: 'A responsive currency converter.',
      link: 'https://adebayomuhsin.github.io/Best-converter/', // Replace with actual URL
    },
    {
      title: 'E-Commerce Store',
      description: 'A modern e-commerce platform.',
      link: 'https://www.ecommerce-store.com', // Replace with actual URL
    },
    {
      title: 'KYC Registration Website',
      description: 'A KYC registration site.',
      link: 'https://adebayomuhsin.github.io/Kyc-project/', // Replace with actual URL
    },
    {
      title: 'Google Form',
      description: 'A responsive Google form.',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSeUkyclSbqIZzGFtk11Wg5bsgkpp_hoyxMRiTh6ytKZy9Vu4A/viewform?usp=sf_link', // Replace with actual URL
    },
  ];

  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="view-project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
