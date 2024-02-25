import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Content from './components/Content';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { LifeStrategyContext } from './context';
import { initialState } from './state';

export default function App() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const localState = JSON.parse(localStorage.getItem('state'));
    if (localState) {
      console.log('Recommendation localState:', localState);
      
      setState(localState);
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
            // alignItems: 'flex-end'
            // backgroundColor: 'rgba(255, 255, 120, 0.6)',
            // backgroundColor: '#f5f5aa',
          }}>
            <Box
              sx={{
                // height: '60%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Menu />
              <Content />
            </Box>
            <Footer />
        </Container>
    </LifeStrategyContext.Provider>
  );
};
