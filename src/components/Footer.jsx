import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

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
            <Link href="https://dmitry16.github.io/mimas-tek/" underline="none">
                <Typography variant="body2" color="text.darkBlue" align="center">
                    Mimas_Tek © {new Date().getFullYear()}.
                </Typography>
            </Link>
            {/* <Typography variant="body2" color="text.darkBlue" align="center">
                Mimas_Tek © {new Date().getFullYear()}.
            </Typography> */}
        </Box>
    );
}

export default Footer;
