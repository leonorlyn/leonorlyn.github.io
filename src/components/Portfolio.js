import React, { useState } from 'react';
import '../style/portfolio.css';
import Panboo from '../assets/Panboo.png';
import Panboo2 from '../assets/Panboo2.png';
import Panboo3 from '../assets/Panboo3.png';

import Neweig from '../assets/Neweig.png';
import Neweig2 from '../assets/Neweig2.png';
import Neweig3 from '../assets/Neweig3.png';

import time1 from '../assets/time1.png';
import time2 from '../assets/time2.png';
import time3 from '../assets/time3.png';
import time4 from '../assets/time4.png';

import ML1 from '../assets/ML1.png';
import ML2 from '../assets/ML2.png';


const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 

  const projects = [
    {
      id: 1,
      title: "PANBOO GLOBAL E-Commerce Website",
      images: [Panboo, Panboo2, Panboo3], 
      link: "https://www.panbooglobal.com/",
    },
    {
      id: 4,
      title: "MacOS Desktop App - Pause Time",
      images: [time1,time2,time3,time4],
      link: "https://github.com/leonorlyn/PauseTime",
    },
    {
      id: 2,
      title: "Intern Project - Official Website and Data Dashboard",
      images: [Neweig, Neweig2, Neweig3],
      link: "https://www.neweicgroup.com/",
    },
    {
      id: 3,
      title: "AI-Based Employment Service Tool",
      images: [ML1,ML2],
      link: "https://github.com/leonorlyn/rtw_predictor",
    },
  ];

  const handleImageClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); 
  };

  // 关闭模态框
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // 切换到下一张图片
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % selectedProject.images.length
    );
  };

  // 切换到上一张图片
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.images[0]} // 显示项目的第一张图片
              alt={project.title}
              className="project-image"
              onClick={() => handleImageClick(project)} // 点击图片打开模态框
            />
            <h3
              className="project-title"
              onClick={() => window.open(project.link, '_blank')}
            >
              {project.title}
            </h3>
          </div>
        ))}
      </div>

      {/* 图片模态框 */}
      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img
              src={selectedProject.images[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              className="large-image"
            />
            <div className="gallery-controls">
              <button onClick={handlePrevImage}>&lt;</button>
              <button onClick={handleNextImage}>&gt;</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
