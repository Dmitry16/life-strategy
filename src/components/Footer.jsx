// Footer component using MUI Typography and Box components:
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from './Copyright';

const Footer = () => {
    return (
        <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 0, 
            position: 'sticky', 
            zIndex: 2,
            bgcolor: '#FFFFFF',
            bottom: 0, 
            width: '100%',
            height: '5em' 
        }}>
            <Typography variant="body2" color="text.darkBlue" align="center">
                MustHave Technologies © {new Date().getFullYear()}.
            </Typography>
        </Box>
    );
}

export default Footer;