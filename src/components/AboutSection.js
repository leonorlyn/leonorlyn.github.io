import React from 'react';
import '../style/sections.css';
import ProfilePic from '../assets/Lena.JPG';

const AboutSection = () => {
  return (
    <div className="section-content about-content">
      <div className="about-grid">
        <div className="about-left">
          <div className="profile-image-container">
            <img src={ProfilePic} alt="Lena Li" className="profile-image" />
          </div>
          
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/lena-zilingli/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
            <a 
              href="https://github.com/leonorlyn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-github"></i>
              GitHub
            </a>
            <a 
              href="https://www.instagram.com/liziling_t/?next=%2F" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-instagram"></i>
              Instagram
            </a>
          </div>
        </div>
        
        <div className="about-right">
          <h2 className="about-title">Lena Li</h2>
          <h3 className="about-subtitle">Software Engineer</h3>
          
          <p className="about-description">
          I'm a passionate software engineer with a love for creating meaningful technology solutions. I am graduating 2025 December from Northeastern Computer Science Major. 
          Currently seeking 2026 new grad opportunities.💼
          </p>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Technical Skills</h4>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">C#</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">Jenkins</span>
                <span className="skill-tag">Redis</span>
                <span className="skill-tag">Flask</span>
                <span className="skill-tag">Django</span>
              </div>
            </div>
          </div>
          
          <div className="experience-section">
            <div className="skill-category">
              <h4>Experience</h4>
              <div className="experience-list">
                <div className="experience-item">
                  <p className="experience-company">Stripe</p>
                  <div className="experience-header">
                    <h5 className="experience-title">Software Engineering Intern</h5>
                    <span className="experience-period">Spring 2025</span>
                  </div>
                </div>
                
                <div className="experience-item">
                  <p className="experience-company">Experian</p>
                  <div className="experience-header">
                    <h5 className="experience-title">Software Engineering Intern</h5>
                    <span className="experience-period">Summer 2024</span>
                  </div>
                </div>

                <div className="experience-item">
                  <p className="experience-company">NEW EIG</p>
                  <div className="experience-header">
                    <h5 className="experience-title">Full Stack Developer Intern</h5>
                    <span className="experience-period">Spring 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection; 