import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Content from './components/Content';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { LifeStrategyContext } from './context';
import { initialState } from './state';

export default function App() {
  const [state, setState] = useState(initialState);

  return (
    <LifeStrategyContext.Provider value={{state, setState}}>
      <Container maxWidth="xl" sx={{
        // backgroundColor: '#ddddee'
      }}>
        <Container maxWidth="lg"
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'stretch'

            // backgroundColor: 'rgba(255, 255, 120, 0.6)',
            // backgroundColor: '#f5f5aa',
          }}>
          {/* <Box sx={{ flexGrow: '1' }}> */}
            <Menu />
          {/* </Box> */}
          {/* <Box sx={{ flexGrow: '2' }}> */}
            <Content />
          {/* </Box> */}
          {/* <Box sx={{mb: 2, flexGrow: '1'}}> */}
            <Footer />
          {/* </Box> */}
        </Container>
      </Container>
    </LifeStrategyContext.Provider>
  );
};
