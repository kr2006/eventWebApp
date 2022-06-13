import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import moment from 'moment';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import BeNotificated from '../../MainPage/components/BeNotificated';


const EventDetails = () => {
    const { id } = useParams();

    const [event, setEvent] = useState({});

    useEffect(() => {
        const url = `https://localhost:44390/api/Event/${id}`;
        const result = axios.get(url).then((response) => {
            setEvent(response.data[0]);
            console.log(event.eventCategories);
        });
    }, []);

    const date = moment(event.startAt).format('DD/MM');
    const time = moment(event.startAt).format('HH:mm');
    //const time = moment(event.startAt, "hh:mm: A").format('hh:mm');


    return (
        <Box>
            <Box className='my-container' sx={{ backgroundColor: '#000' }}>
                <Container maxWidth="md">
                    <Box sx={{
                        border: '1px solid #fff',
                        padding: '20px 35px',
                        maxWidth: '700px',
                        margin: '0 auto',
                        textAlign: 'center',
                        marginBottom: '40px'
                    }}>
                        <Typography variant='h4' color="secondary">
                            {event.title}    :    {date}
                        </Typography>
                    </Box>
                    <Grid container spacing={2} justifyContent='center'>
                        {event.eventCategories?.map((category) => (
                            <Grid item>
                                <Typography variant='body2' color="secondary">#{category.category.categoryName}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            <Box className='my-container'>
                <Container maxWidth="md">
                    <Box mb={5}>
                        <Grid container alignItems='center'>
                            <Box sx={{ marginRight: '20px' }} className='event-details-title'>
                                <Typography variant='h4'>Підпишись, щоб не забути</Typography>
                            </Box>
                            <Box className='event-details-title'>
                                <a href="https://t.me/NotificationsOfBot">
                                    <Button>
                                        <NotificationsActiveOutlinedIcon fontSize='large' />
                                    </Button>
                                </a>
                            </Box>

                        </Grid>
                    </Box>
                    <Box>
                        <Grid container>
                            <Grid item xs={3}>
                                <Box sx={{ border: '1px solid #fff', padding: '10px', textAlign: 'center', backgroundColor: '#000', color: '#fff' }}>Коли?</Box>
                                <Box sx={{ border: '1px solid #000', padding: '10px', textAlign: 'center', borderTop: 'none' }}>{date}</Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box sx={{ border: '1px solid #fff', padding: '10px', textAlign: 'center', backgroundColor: '#000', color: '#fff' }}>О котрій?</Box>
                                <Box sx={{ border: '1px solid #000', padding: '10px', textAlign: 'center', borderTop: 'none' }}>{time}</Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box sx={{ border: '1px solid #fff', padding: '10px', textAlign: 'center', backgroundColor: '#000', color: '#fff' }}>Скільки?</Box>
                                <Box sx={{ border: '1px solid #000', padding: '10px', textAlign: 'center', borderTop: 'none' }}>
                                    {(event.price <= 0) ? 'Безкоштовно' : event.price + " UAH"}
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                                <Box sx={{ border: '1px solid #fff', padding: '10px', textAlign: 'center', backgroundColor: '#000', color: '#fff' }}>Де?</Box>
                                <Box sx={{ border: '1px solid #000', padding: '10px', textAlign: 'center', borderTop: 'none' }}>{event.location}</Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Box className='my-container'>
                <Container maxWidth="md">
                    <Box mb={5}>
                        <Typography variant='h4'>ПРО ПОДІЮ</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body1'>
                            {event.description}
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <BeNotificated />
        </Box>
    )
}


export default EventDetails;