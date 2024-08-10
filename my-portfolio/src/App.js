import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MainPage from './components/MainPage';
import WelcomeScreen from './components/WelcomeScreen';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FE6B8B',
    },
    secondary: {
      main: '#FFCC99',
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
