import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Link } from 'react-scroll';
import Introduction from './Introduction'; 
import Experience from './Experience'; 
import Portfolio from './Portfolio';
import '../style/mainpage.css'; 

const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;


const MainPage = () => {
  const parallax = useRef(null);


  return (
    <div style={{ width: '100%', height: '100%', background: '#253237', display: 'flex' }}>
      <nav className="side-nav">
        <ul>
          <li>
            <Link
              to="introduction"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => parallax.current.scrollTo(0)}
            >
              Introduction
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => parallax.current.scrollTo(1)}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => parallax.current.scrollTo(2)}
            >
              Project Showcase
            </Link>
          </li>
        </ul>
      </nav>


      <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={3}>
        {/* Background Layers */}
        <ParallaxLayer
          offset={100}
          speed={50}
          factor={3}
          style={{
            backgroundSize: 'cover',
          }}
        />

        {/* Introduction Section */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '50px',
          }}
        >
          <div id="introduction">
            <Introduction />
          </div>
        </ParallaxLayer>

        {/* Experience Section */}
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '50px',
            backgroundColor: '#805E73',
          }}
        >
          <div id="experience">
            <Experience />
          </div>
        </ParallaxLayer>

        {/* Project Showcase Section */}
        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '50px',
            backgroundColor: '#87BCDE',
          }}
        >
          <div id="portfolio">
            <Portfolio />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={-0.4} style={{ pointerEvents: 'none' }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        {/* Scroll Interactions */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <img src={url('bash')} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}>
          <img src={url('clients-main')} style={{ width: '40%' }} />
        </ParallaxLayer>
      </Parallax>
    </div>
    </div>
  );
};

export default MainPage;
