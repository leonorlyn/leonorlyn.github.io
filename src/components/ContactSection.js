import React, { useState } from 'react';
import '../style/sections.css';

const ContactSection = () => {
  const [downloadStatus, setDownloadStatus] = useState('');

  const contactMethods = [
    {
      id: 1,
      label: "LINKEDIN",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/lena-zilingli/",
      icon: "fab fa-linkedin"
    },
    {
      id: 2,
      label: "RESUME",
      value: downloadStatus || "Download PDF",
      link: "#",
      icon: "fas fa-file-download"
    }
  ];

  const handleResumeDownload = async () => {
    try {
      setDownloadStatus("Preparing download...");
      
      // 创建一个简历下载链接
      const resumeUrl = process.env.PUBLIC_URL + '/resume/Lena_Li_Resume.pdf';
      
      // 检查文件是否存在
      const response = await fetch(resumeUrl, { method: 'HEAD' });
      
      if (response.ok) {
        // 文件存在，开始下载
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Lena_Li_Resume.pdf';
        link.target = '_blank';
        
        // 触发下载
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setDownloadStatus("Download started!");
        setTimeout(() => setDownloadStatus(""), 3000);
      } else {
        // 文件不存在，显示提示信息
        setDownloadStatus("Resume updating...");
        setTimeout(() => setDownloadStatus(""), 3000);
      }
    } catch (error) {
      // 网络错误或其他问题
      console.error('Resume download error:', error);
      setDownloadStatus("Contact me directly");
      setTimeout(() => setDownloadStatus(""), 3000);
    }
  };

  const handleContactClick = (link, label) => {
    if (label === "RESUME") {
      handleResumeDownload();
      return;
    }
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="section-content contact-content">
      <div className="contact-header">
        <h2 className="contact-title">LET'S CONNECT</h2>
        <p className="contact-subtitle">I'm currently seeking 2026 new grad opportunities</p>
      </div>
      
      <div className="contact-grid">
        {contactMethods.map((method) => (
          <div 
            key={method.id} 
            className="contact-item"
            onClick={() => handleContactClick(method.link, method.label)}
          >
            <div className="contact-icon">
              <i className={method.icon}></i>
            </div>
            <div className="contact-info">
              <h3 className="contact-label">{method.label}</h3>
              <p className="contact-value">{method.value}</p>
            </div>
            <div className="contact-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        ))}
      </div>
      
      <div className="contact-footer">
        <p className="availability-text">
          Available for full-time opportunities starting 2025 Dec 
        </p>
      </div>
    </div>
  );
};

export default ContactSection; 