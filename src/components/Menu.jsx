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
            position: 'sticky',
            top: 0,
            zIndex: 2,
            bgcolor: '#FFFFFF',
            // alignSelf: 'flex-start',
            height: '7em'
        }}>
            <Toolbar sx={{}} disableGutters>
                <ButtonRouter text='Home' href={'/life-strategy'}/>
                <ButtonRouter text='Strategize' href={'/life-strategy/strategize'}/>
                {/* <ButtonRouter text='Login' href={'/login'}/> */}
                <ButtonRouter text='How-To' href={'/life-strategy/how-to'}/>
                <ButtonRouter text='About' href={'/life-strategy/about'}/>
            </Toolbar>
        </Box>
    );
}

export default Menu;