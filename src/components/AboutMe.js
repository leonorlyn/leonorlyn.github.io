import React from 'react';
import '../style/aboutme.css';

const AboutMe = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate software engineer with a love for creating meaningful technology solutions. I am graduating 2025 December from Northeastern Computer Science Major. 
              Currently seeking 2026 new grad opportunities.
            </p>
          </div>
          
          <div className="about-details">
            <div className="detail-category">
              <h3>Skills</h3>
              <ul>
                <li>React & JavaScript</li>
                <li>Python & Java</li>
                <li>Frontend Development</li>
                <li>Backend Development</li>
              </ul>
            </div>
            
            <div className="detail-category">
              <h3>Tools</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Node.js</li>
                <li>SQL Databases</li>
                <li>Cloud Platforms</li>
              </ul>
            </div>
            
            <div className="detail-category">
              <h3>Interests</h3>
              <ul>
                <li>Paddle Boating</li>
                <li>Chinese Calligraphy</li>
                <li>Piano Playing</li>
                <li>Watercolor Painting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
