import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Link } from 'react-scroll';
import Introduction from './Introduction'; 
import AboutMe from './AboutMe'; 
import Portfolio from './Portfolio';
import '../style/mainpage.css'; 
import star from '../assets/3Dstar.png';
import planet from '../assets/planet.png';
import alien from '../assets/alien.png';
import solar from '../assets/solar.png';



const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;


const MainPage = () => {
  const parallax = useRef(null);
  return (
    // Navigation
    <div style={{ width: '100%', height: '100%', display: 'flex' }}>
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


      {/* main page scroll */}
      <div style={{ width: '100%', height: '100%' }}>
      <Parallax ref={parallax} pages={3}>

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            Index:10,
            backgroundColor: 'rgba(23, 22, 22, 0.4)'
          }}
        />


        {/* Introduction Section */}
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{
            zIndex: 1,
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
            zIndex: 1,
          }}
        >
          <div id="experience">
            <AboutMe />
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
            backgroundImage: 'rgba(0, 0, 0, 0.4)'
          }}
        >
          <div id="portfolio">
            <Portfolio />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer offset={0} speed={-0.4} factor={1} style={{ pointerEvents: 'none', zIndex:3 }}>
          <img src={star} style={{ width: '5%', marginLeft: '78%', marginTop:'10%', filter: 'saturate(0.8)'}} />
          <img src={star} style={{ width: '5%', marginLeft: '90%', marginTop:'30%'}} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.8} factor={1} style={{ pointerEvents: 'none', zIndex:3 }}>
          <img src={planet} style={{ width: '10%', marginLeft: '10%', marginTop:'35%', filter: 'saturate(0.7)'}} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={1} style={{ pointerEvents: 'none' }}>
          <img src={solar} style={{ marginTop: '-0%', marginLeft:'0%', width: '35%'}} />
        </ParallaxLayer>

        {/* Scroll Interactions */}
        <ParallaxLayer
          offset={0}
          speed={3}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
        </ParallaxLayer>
      </Parallax>
    </div>
    </div>
  );
};

export default MainPage;
