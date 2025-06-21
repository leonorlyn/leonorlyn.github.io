import React from 'react';
import '../style/sections.css';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "PANBOO GLOBAL",
      subtitle: "E-Commerce Platform",
      description: "A comprehensive e-commerce platform with modern UI/UX design and full-stack functionality.",
      stack: ["React", "Node.js", "MongoDB", "CSS3"],
      demoLink: "https://www.panbooglobal.com/",
      githubLink: null,
    },
    {
      id: 2,
      title: "PAUSE TIME",
      subtitle: "macOS Desktop App",
      description: "A productivity app for macOS that helps users manage break times and maintain healthy work habits.",
      stack: ["Swift", "macOS", "Core Data", "UI/UX Design"],
      demoLink: null,
      githubLink: "https://github.com/leonorlyn/PauseTime",
    },
    {
      id: 3,
      title: "DATA DASHBOARD",
      subtitle: "Corporate Website",
      description: "Corporate website with integrated analytics dashboard for business intelligence and reporting.",
      stack: ["React", "Chart.js", "Express", "PostgreSQL"],
      demoLink: "https://www.neweicgroup.com/",
      githubLink: null,
    },
    {
      id: 4,
      title: "AI EMPLOYMENT TOOL",
      subtitle: "Machine Learning",
      description: "Machine learning application that predicts employment outcomes and provides career guidance.",
      stack: ["Python", "Scikit-learn", "Flask", "Data Analysis"],
      demoLink: null,
      githubLink: "https://github.com/leonorlyn/rtw_predictor",
    },
  ];

  const handleLinkClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="section-content portfolio-content">
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <div className="project-header">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-type">{project.subtitle}</p>
            </div>
            
            <p className="project-desc">{project.description}</p>
            
            <div className="project-stack">
              {project.stack.map((tech, index) => (
                <span key={index} className="stack-item">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="project-actions">
              {project.demoLink && (
                <button
                  className="action-btn demo-btn"
                  onClick={() => handleLinkClick(project.demoLink)}
                >
                  <i className="fas fa-external-link-alt"></i>
                  LIVE DEMO
                </button>
              )}
              {project.githubLink && (
                <button
                  className="action-btn github-btn"
                  onClick={() => handleLinkClick(project.githubLink)}
                >
                  <i className="fab fa-github"></i>
                  GITHUB
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection; 