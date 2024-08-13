import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../style/aboutme.css';

const AboutMe = () => {

  return (
    <div className="aboutme-container">
      <animated.div className="aboutme-text">
        <h2>About Me</h2>
        <p>
          Hi, I'm Lena, a passionate software engineer with a love for technology and creativity.
          I used to interned in Experien, NEW EIG and Panboo working on both front-end and back-end development. 
          I am looking for a 2025 Spring internship and 2025 New grad position opportunity！
        </p>
      </animated.div>
    </div>
  );
};

export default AboutMe;
