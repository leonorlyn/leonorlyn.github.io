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
      }, 300); 
      return () => clearTimeout(timer);
    } else {
      // type text
      setShowStars(true); 
    }
  }, [currentWordIndex, words.length]);

  const generateStars = () => {
    const starElements = [];
    for (let i = 0; i < 5; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      };
      starElements.push(<div key={i} className="star" style={style} />);
    }
    setStars(starElements);
  };

  const handleButtonClick = () => {
    const updatedStars = stars.map((star, index) => {
      const dx = (Math.random() - 0.5) * 200;
      const dy = (Math.random() - 0.5) * 200;
      return React.cloneElement(star, {
        key: index,
        className: "star disperse",
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
    }, 1000);
  };

  return (
    <div className="welcomeScreen" style={{ textAlign: 'center', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {showStars && stars}
      {currentWordIndex < words.length ? (
        <Typography variant="h4">{words[currentWordIndex]}</Typography>
      ) : (
        <div className="welcomeScreen" style={{ textAlign: 'center', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {currentWordIndex < words.length ? (
          <Typography variant="h4">{typedText}</Typography>
        ) : (
          <Fade in={true} timeout={500}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <Typography variant="h1" style={{ fontWeight: 'bold', color: 'white' }}>Hi. I'm Lena Li.</Typography>
              <Typography variant="h1" style={{ fontWeight: 'bold', color: 'white' }}>A Software Engineer.</Typography>
              <Typography variant="h6" style={{ marginTop: '20px', color: 'white' }}>
                I'm passionate about crafting the world with technology
              </Typography>
              <Button
                onClick={handleButtonClick}
                variant="contained"
                className="fancy-button"
                style={{
                  marginTop: '40px',
                  color: 'white',
                  padding: '10px 20px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  borderRadius: '25px',
                  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                  position: 'relative',
                }}
                >
                <span
                  className="shine"
                />
                  Enter Site
                </Button>
            </div>
          </Fade>
        )}
      </div>
      )}
    </div>
  );
}

export default WelcomeScreen;
