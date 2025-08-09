import React from 'react';
import '../style/portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "AI FlashCard Maker - Adobe Add-on Hackthon Winner",
      description: "Adobe add-on that instantly turns documents and notes into engaging and print-ready flashcards, utilizing AI and auto-layout",
      stack: ["React", "javascript", "LLM", "Flask"],
      demoLink: "https://devpost.com/software/ai-flashcard-maker?ref_content=my-projects-tab&ref_feature=my_projects",
    },
    {
      id: 2,
      title: "TextWarp - Adobe Add-on Hackthon ",
      description: "Warp words in a click for adobe express platform",
      stack: ["React","javascript", "Warp Algorithm"],
      demoLink: "https://github.com/leonorlyn/https://devpost.com/software/texteffect",
    },
    {
      id: 3,
      title: "PANBOO GLOBAL E-Commerce Website",
      description: "A comprehensive e-commerce platform with modern UI/UX design and full-stack functionality.",
      stack: ["React", "Node.js", "MongoDB", "CSS3"],
      demoLink: "https://www.panbooglobal.com/",
      githubLink: null,
    },
    {
      id: 4,
      title: "MacOS Desktop App - Pause Time",
      description: "A productivity app for macOS that helps users manage break times and maintain healthy work habits.",
      stack: ["Swift", "macOS", "Core Data", "UI/UX Design"],
      demoLink: null,
      githubLink: "https://github.com/leonorlyn/PauseTime",
    },
    {
      id: 5,
      title: "Official Website and Data Dashboard",
      description: "Corporate website with integrated analytics dashboard for business intelligence and reporting.",
      stack: ["React", "Chart.js", "Express", "PostgreSQL"],
      demoLink: "https://www.neweicgroup.com/",
      githubLink: null,
    },
    {
      id: 6,
      title: "AI-Based Employment Service Tool",
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
    <section className="portfolio-section">
      <div className="portfolio-container">
        <h2 className="section-title">Portfolio</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack">
                {project.stack.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-links">
                {project.demoLink && (
                  <button
                    className="project-link demo-link"
                    onClick={() => handleLinkClick(project.demoLink)}
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </button>
                )}
                {project.githubLink && (
                  <button
                    className="project-link github-link"
                    onClick={() => handleLinkClick(project.githubLink)}
                  >
                    <i className="fab fa-github"></i>
                    GitHub
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
