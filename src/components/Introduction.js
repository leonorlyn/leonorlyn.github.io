import React from 'react';
import '../style/introduction.css'; 
import ProfilePic from '../assets/Lena.JPG';
import CatPic from '../assets/JoeyBaby.JPG';


const Introduction = () => {
  const handleIconClick = (url) => {
    console.log(`Navigating to ${url}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  

  return (
    <div className="introduction-container">
      <div className="profile-container">
        <div className="profile-pic">
          <img src={ProfilePic} alt="My pic" />
        </div>

      <div className="cat-container">
          <div className="cat-pic">
            <img src={CatPic} alt="My Cat" />
          </div>
        </div>
      </div>

      {/* social icons*/}
      <div className="social-icons">
        <span className="linkedin" onClick={() => handleIconClick('https://www.linkedin.com/in/lena-zilingli/')}>
          <i className="fab fa-linkedin"></i>
        </span>
        <span className="github" onClick={() => handleIconClick('https://github.com/leonorlyn')}>
          <i className="fab fa-github"></i>
        </span>
        <span className="instagram" onClick={() => handleIconClick('https://www.instagram.com/liziling_t/?next=%2F')}>
          <i className="fab fa-instagram"></i>
        </span>
      </div>
    </div>
  );
};

export default Introduction;
