import React from 'react';
import { NavLink } from "react-router-dom";

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const EventItem = (props) => {
    return (
        <Box sx={{
            border: '1px solid #000',
            marginBottom: '50px',
        }}>
            <Box sx={{
                minWidth: '100%',
                padding: '10px 15px',
                backgroundColor: '#000',
                textTransform: 'uppercase',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#fff'
            }} className="event-card">
                <NavLink to={"/event/details/" + props.id}>
                    <Typography variant='h4' color="secondary">{props.name}</Typography>
                </NavLink>
                <a href="https://t.me/NotificationsOfBot" className="upcoming-text-remove" >
                    <Button color="secondary">
                        <NotificationsActiveOutlinedIcon fontSize='large' />
                    </Button>
                </a>

            </Box>
            <Box sx={{
                padding: '20px 15px',
            }}>
                <Box sx={{ marginBottom: '25px' }}>
                    <Typography variant='body1'>
                        {props.descr}
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    {
                        props.eventCategories?.map((category) => (
                            <Grid item>
                                <Typography variant='body2'>#{category.category.categoryName}</Typography>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
            <Box className='event-card-info'>
                <Grid container>
                    <Grid item xs={3}>
                        <Box sx={{
                            border: '1px solid #000',
                            padding: '15px 0px 8px',
                            fontSize: '20px',
                            fontWeight: 900,
                            textAlign: 'center',
                            borderBottom: 'none'
                        }}>
                            <Grid container justifyContent='center'>
                                <Grid item><CalendarTodayIcon /></Grid>
                                <Grid item> {props.date}</Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{
                            border: '1px solid #000',
                            padding: '15px 0px 8px',
                            fontSize: '20px',
                            fontWeight: 900,
                            textAlign: 'center',
                            borderBottom: 'none'
                        }}>
                            <Grid container justifyContent='center'>
                                <Grid item><AccessTimeIcon /></Grid>
                                <Grid item> {props.time}</Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{
                            border: '1px solid #000',
                            padding: '15px 0px 8px',
                            fontSize: '20px',
                            fontWeight: 900,
                            textAlign: 'center',
                            borderBottom: 'none'
                        }}>
                            <Grid container justifyContent='center'>
                                <Grid item><ConfirmationNumberOutlinedIcon /></Grid>
                                <Grid item> {props.price}</Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{
                            border: '1px solid #000',
                            padding: '15px 0px 8px',
                            fontSize: '20px',
                            fontWeight: 900,
                            textAlign: 'center',
                            borderBottom: 'none'
                        }}>
                            <Grid container justifyContent='center'>
                                <Grid item><LocationOnIcon /></Grid>
                                <Grid item> {props.location}</Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default EventItem;