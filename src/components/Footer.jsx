// Footer component using MUI Typography and Box components:
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from './Copyright';

const Footer = () => {
    return (
        <Box sx={{ 
            display: 'flex',
            justifyContent: 'center',
            mb: 2, 
            height: '6em', 
            position: 'sticky', 
            bottom: 0, 
            width: '100%' 
        }}>
            <Typography variant="body2" color="text.darkBlue" align="center">
                {'Dmytro Davydov © '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );
}

export default Footer;