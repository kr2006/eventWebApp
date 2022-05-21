import React from 'react';
import { NavLink } from "react-router-dom";

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const EventItem = (props) => {
    return(
        <Box sx={{border: '1px solid #000',                 
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
            }}>
                <NavLink to={"/event/details/" + props.id}>
                    <Typography variant='h4' color="secondary">{props.name}</Typography>
                </NavLink>
                <NotificationsActiveOutlinedIcon fontSize='large'/>
            </Box>
            <Box sx={{
                padding: '20px 15px',
            }}>
                <Box sx={{marginBottom: '25px'}}>
                    <Typography variant='body1'>
                    {props.descr}                    
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    {
                        props.eventCategories?.map((category) =>(
                            <Grid item>
                                <Typography variant='body2'>#{category.category.categoryName}</Typography>
                            </Grid>    
                        ))
                    }
                </Grid>
            </Box>
            <Box>
                <Grid container>
                    <Grid item xs={3}>
                        <Box sx={{
                            border: '1px solid #000',
                            padding: '10px',
                            fontSize: '20px',
                            fontWeight: 900,
                            textAlign: 'center'
                        }}>
                            <Box component='span' sx={{marginRight: '15px'}}><CalendarTodayIcon /></Box>
                            {props.date}
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{
                            border: '1px solid #000',
                            padding: '10px',
                            fontSize: '20px',
                            fontWeight: 900,
                            textAlign: 'center'
                        }}>
                            <Box component='span' sx={{marginRight: '15px'}}><AccessTimeIcon /></Box>
                            {props.time}
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{
                            border: '1px solid #000',
                            padding: '10px',
                            fontSize: '20px',
                            fontWeight: 900,
                            textAlign: 'center'
                        }}>
                            <Box component='span' sx={{marginRight: '15px'}}><ConfirmationNumberOutlinedIcon /></Box>
                            {props.price}
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{
                            border: '1px solid #000',
                            padding: '10px',
                            fontSize: '20px',
                            fontWeight: 900,
                            textAlign: 'center'
                        }}>
                            <Box component='span' sx={{marginRight: '15px'}}><LocationOnIcon /></Box>
                            {props.location}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default EventItem;