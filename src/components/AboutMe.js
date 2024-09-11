import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../style/aboutme.css';

const AboutMe = () => {

  return (
    <div className="aboutme-container">
      <animated.div className="aboutme-text">
        <h2>About Me</h2>
        <p>Hi, I'm Lena, a passionate software engineer with a love for creativity.</p>

        <p>I enjoy paddle boating, practicing Chinese calligraphy, playing piano and watercolor painting</p>

        <p>I used to intern at Experian, NEW EIG, and Panboo, where I worked on front-end, back-end, and configuration projects.</p>

        <p>I will be graduating in May/August 2025, and I am currently looking for a 2025 winter internship and 2025 New Grad position!</p>

      </animated.div>
    </div>
  );
};

export default AboutMe;
