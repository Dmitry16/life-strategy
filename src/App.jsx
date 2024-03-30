import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Routes from './router/Routes';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { LifeStrategyContext } from './context';
import { initialState } from './state';
import { calculateAndAddStatusToLifeUnitsAndAreas } from './utils/status';

export default function App() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const localStorageState = JSON.parse(localStorage.getItem('state'));
    if (localStorageState) {      
      setState(localStorageState);
    } else {
      const updatedStateWithAreaStatus = calculateAndAddStatusToLifeUnitsAndAreas(state);
      localStorage.setItem('state', JSON.stringify(updatedStateWithAreaStatus));
      setState(updatedStateWithAreaStatus);
    }
  }, []);

  return (
    <LifeStrategyContext.Provider value={{state, setState}}>
        <Container maxWidth="lg" height="100vh"
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Menu />
              <Routes />
            </Box>
            <Footer />
        </Container>
    </LifeStrategyContext.Provider>
  );
};
