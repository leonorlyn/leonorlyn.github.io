import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../style/aboutme.css';

const Portfolio = () => {

  return (
    <div className="aboutme-container">
      <animated.div className="aboutme-text">
        <h2>Incoming</h2>
      </animated.div>
    </div>
  );
};

export default Portfolio;
