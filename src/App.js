import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MainPage from './components/MainPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import WelcomeScreen from './components/WelcomeScreen';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FE6B8B',
    },
    secondary: {
      main: '#7a7a70',
    },
  },
});

function App() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* {showWelcomeScreen ? (
          <WelcomeScreen setShowWelcomeScreen={setShowWelcomeScreen} />
        ) : (
          <>
            <MainPage/>
          </>
        )} */}
        <MainPage/>
      </div>
    </ThemeProvider>
  );
}

export default App;
