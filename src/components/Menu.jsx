import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonRouter from '../router/ButtonRouter';
import { Link, MemoryRouter } from 'react-router-dom';


const Menu = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        }}>
            <Toolbar sx={{}} disableGutters>
                {/* <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton> */}
                {/* <Typography variant="h6">
                    Dmytro Davydov
                </Typography> */}
                <ButtonRouter text='Home' href={'/'}/>
                <ButtonRouter text='Resume' href={'/resume'}/>
                <ButtonRouter text='Skillset' href={'/skillset'}/>
                <ButtonRouter text='Portfolio' href={'/portfolio'}/>
                <ButtonRouter text='Contacts' href={'/contacts'}/>
                <ButtonRouter text='Blog' href={'/blog'}/>
                {/* <ButtonRouter text='My Philosophy' href={'/my-philosophy'}/>
                <ButtonRouter text='My Passions' href={'/my-passions'}/>
                <ButtonRouter text='Help Ukraine' href={'/help-ukraine'}/> */}
            </Toolbar>
        </Box>
    );
}

export default Menu;