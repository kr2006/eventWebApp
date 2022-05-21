import React, { useState } from 'react';

//MUI imports
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import SearchIcon from '@material-ui/icons/Search';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';

import Logo from '../img/logo.png';
import { Typography } from '@material-ui/core';

import { Link, NavLink } from "react-router-dom";



const Header = () =>{
    const [ isActive, setIsActive ] = useState(false);
    const [ isOpen, setIsOpen ] = useState(false);

    const handleSearchInput = () => {
        setIsActive(!isActive);
    }
    const handleDateMenu = () => {
        setIsOpen(!isOpen);
    }


    return(
        <Box p={2}>
            <Container maxWidth="md">
                <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item>
                        <Box display="flex" alignItems='center'>
                            <Box component="img" sx={{width: 38, height: 55}} src={Logo}></Box>
                            <Box sx={{ml: 2}}>
                            <Typography variant="body1" sx={{fontWeingt:800}}>
                                <NavLink to='/'>
                                    ПОДІЇ ОА
                                </NavLink>
                            </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box display="flex" alignItems='center'>
                            <Box sx={{mr: 4}}>
                                <Link to='/'>Навчання</Link>
                            </Box>
                            <Box sx={{mr: 4}}>
                                <Link to='/'>Розваги</Link>
                            </Box>
                            <Box>
                                <Link to='/events'>Всі події</Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item>
                        {isActive && (
                            <Input>
                            </Input>
                        )}
                        <Button onClick={handleSearchInput} >
                            <SearchIcon/>
                        </Button>
                        <Button 
                            onClick={handleDateMenu}
                            id="fade-button"
                            aria-controls={isOpen ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={isOpen ? 'true' : undefined}
                        >
                            <CalendarTodayIcon />
                        </Button>
                        <Menu
                            MenuListProps={{
                            'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={isOpen}
                            open={isOpen}
                            onClose={handleDateMenu}
                        >
                            <MenuItem onClick={handleDateMenu}>СЬОГОДНІ</MenuItem>
                            <MenuItem onClick={handleDateMenu}>ЗАВТРА</MenuItem>
                            <MenuItem onClick={handleDateMenu}>ЦЬОГО ТИЖНЯ</MenuItem>
                            <MenuItem onClick={handleDateMenu}>ЦИХ ВИХІДНИХ</MenuItem>
                        </Menu>
                        <Button>
                            <NotificationsActiveOutlinedIcon />
                        </Button>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Header;
