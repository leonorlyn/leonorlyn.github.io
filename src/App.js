import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MainPage from './components/MainPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style/global.css';
import WelcomeScreen from './components/WelcomeScreen';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFB7A5', // Accent Coral
    },
    secondary: {
      main: '#A4D4AE', // Accent Green
    },
    background: {
      default: '#FFF9F4', // Soft warm white
      paper: '#E6E1DC', // Secondary border/block color
    },
    text: {
      primary: '#2F2F2F', // Dark gray
      secondary: '#666666',
    },
    custom: {
      coral: '#FFB7A5',
      green: '#A4D4AE', 
      lavender: '#CAB8FF',
      warmWhite: '#FFF9F4',
      lightGray: '#E6E1DC',
    }
  },
  typography: {
    fontFamily: '"Satoshi", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '0.05em',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '0.03em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
});

function App() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <div>
        {showWelcomeScreen ? (
          <WelcomeScreen setShowWelcomeScreen={setShowWelcomeScreen} />
        ) : (
          <>
            <MainPage/>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
