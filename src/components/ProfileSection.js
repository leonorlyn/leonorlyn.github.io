import React from 'react';
import { Button } from '@mui/material';
import '../style/profilesection.css'; 
import ProfilePic from '../assets/Lena.JPG';

const ProfileSection = () => {
  const handleIconClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleResumeDownload = () => {
    // 添加简历下载逻辑
    console.log('Resume download clicked');
  };

  return (
    <section className="profile-section">
      <div className="profile-content">
        {/* 头像 */}
        <div className="avatar-container">
          <img src={ProfilePic} alt="Lena Li" className="avatar" />
        </div>

        {/* 姓名 */}
        <h1 className="profile-name">Lena Li</h1>
        <p className="profile-title">Software Engineer</p>

        {/* 社交图标行 */}
        <div className="social-icons">
          <button 
            className="social-icon linkedin" 
            onClick={() => handleIconClick('https://www.linkedin.com/in/lena-zilingli/')}
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </button>
          <button 
            className="social-icon github" 
            onClick={() => handleIconClick('https://github.com/leonorlyn')}
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </button>
          <button 
            className="social-icon instagram" 
            onClick={() => handleIconClick('https://www.instagram.com/liziling_t/?next=%2F')}
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </button>
        </div>

        {/* 可选的简历下载按钮 */}
        <Button
          variant="outlined"
          className="resume-button"
          onClick={handleResumeDownload}
        >
          Download Resume
        </Button>
      </div>
    </section>
  );
};

export default ProfileSection; 