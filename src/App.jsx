import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';

export default function App() {
  return (
    <Container maxWidth="xl" sx={{backgroundColor: '#ddddee'}}>
      <Container maxWidth="md"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(255, 255, 120, 0.6)',
          // backgroundColor: '#f5f5aa',
        }}>
        <Box sx={{}}>
          <Menu />
        </Box>
        <Box sx={{}}>
          <Content />
        </Box>
        <Box sx={{mb: 2}}>
          <Footer />
        </Box>
      </Container>
    </Container>
  );
};
