import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonRouter from '../router/ButtonRouter';

const Menu = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        }}>
            <Toolbar sx={{}} disableGutters>
                <ButtonRouter text='Home' href={'/'}/>
                <ButtonRouter text='Create Life Strategy' href={'/create-life-strategy'}/>
                <ButtonRouter text='Login' href={'/login'}/>
                <ButtonRouter text='About' href={'/about'}/>
            </Toolbar>
        </Box>
    );
}

export default Menu;