import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AboutSection from './AboutSection';
import Portfolio from './Portfolio';
import Contact from './Contact';
import '../style/mainpage.css';

const MainPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  // 将字母"O"替换为圆形元素的函数
  const renderWordWithCircleO = (word, section) => {
    return word.split('').map((letter, index) => {
      if (letter.toLowerCase() === 'o') {
        return <span key={index} className="letter-o"></span>;
      }
      return letter;
    });
  };

  const sections = [
    { id: 'about', label: 'ABOUT', component: AboutSection },
    { id: 'portfolio', label: 'PORTFOLIO', component: Portfolio },
    { id: 'contact', label: 'CONTACT', component: Contact }
  ];

  return (
    <div className="landing-container fade-in">
      {/* 主要导航区域 */}
      <div className="nav-section">
        {sections.map((section) => (
          <div key={section.id} className="nav-item-container">
            <motion.button
              className={`nav-word ${activeSection === section.id ? 'active' : ''}`}
              data-section={section.id}
              onClick={() => toggleSection(section.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {renderWordWithCircleO(section.label, section.id)}
            </motion.button>
            
            {/* 展开的内容区域 */}
            <AnimatePresence>
              {activeSection === section.id && (
                <motion.div
                  className="content-section"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="content-inner fade-in"
                  >
                    <section.component />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
