import React, { useState, useEffect } from 'react';
import Fade from '@mui/material/Fade';
import { Typography } from '@mui/material';
import '../style/welcome.css';
import Button from '@mui/material/Button';

function WelcomeScreen({ setShowWelcomeScreen, welcomeImg }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const words = ['Hello', 'Hi', 'Hola', 'Merhaba', '你好', 'Bonjour', 'こんにちは'];
  const [stars, setStars] = useState([]);
  const [showStars, setShowStars] = useState(false);

  // 为不同问候语定义颜色
  const getGreetingColor = (index) => {
    const colors = ['#CAB8FF', '#A4D4AE', '#FFB7A5']; // 薰衣草、绿色、珊瑚
    return colors[index % colors.length];
  };

  const getGreetingColorClass = (index) => {
    const classes = ['lavender', 'green', 'coral'];
    return classes[index % classes.length];
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    generateStars();
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const timer = setTimeout(() => {
        setCurrentWordIndex(currentWordIndex + 1);
      }, 400); 
      return () => clearTimeout(timer);
    } else {
      setShowStars(true); 
    }
  }, [currentWordIndex, words.length]);

  const generateStars = () => {
    const starElements = [];
    for (let i = 0; i < 8; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      };
      starElements.push(<div key={i} className="floating-circle" style={style} />);
    }
    setStars(starElements);
  };

  const handleButtonClick = () => {
    const updatedStars = stars.map((star, index) => {
      const dx = (Math.random() - 0.5) * 300;
      const dy = (Math.random() - 0.5) * 300;
      return React.cloneElement(star, {
        key: index,
        className: "floating-circle disperse",
        style: {
          ...star.props.style,
          '--dx': `${dx}px`,
          '--dy': `${dy}px`,
        },
      });
    });
    setStars(updatedStars);
    setTimeout(() => {
      setShowWelcomeScreen(false);
    }, 800);
  };

  return (
    <div className="welcome-screen fade-in">
      {showStars && stars}
      {currentWordIndex < words.length ? (
        <div className="greeting-animation">
          <Typography 
            variant="h2" 
            className={`greeting-word greeting-${getGreetingColorClass(currentWordIndex)}`}
            style={{ 
              fontFamily: '"Satoshi", sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              letterSpacing: '0.05em',
              color: getGreetingColor(currentWordIndex)
            }}
          >
            {words[currentWordIndex]}
          </Typography>
        </div>
      ) : (
        <Fade in={true} timeout={800}>
          <div className="main-content">
            <div className="title-container">
              <Typography 
                variant="h1" 
                className="main-title"
                style={{ 
                  fontFamily: '"Satoshi", sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  letterSpacing: '0.02em',
                  marginBottom: '0.5rem'
                }}
              >
                Hi. I'm Lena Li.
              </Typography>
              <Typography 
                variant="h1" 
                className="subtitle"
                style={{ 
                  fontFamily: '"Satoshi", sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(2rem, 6vw, 4rem)',
                  letterSpacing: '0.03em',
                  marginBottom: '3rem'
                }}
              >
                A Software Engineer.
              </Typography>
            </div>
            
            <Button
              onClick={handleButtonClick}
              variant="contained"
              className="enter-button scale-hover"
              style={{
                fontFamily: '"Satoshi", sans-serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <span className="button-text">Enter Site</span>
              <span className="button-shine" />
            </Button>
          </div>
        </Fade>
      )}
    </div>
  );
}

export default WelcomeScreen;
