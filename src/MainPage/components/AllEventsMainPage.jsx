import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel, { consts } from 'react-elastic-carousel';
import moment from 'moment';
import '../../App.css';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { NavLink } from 'react-router-dom';
import MobileStepper from '@material-ui/core/MobileStepper';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const AllEventsMainPage = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const result = axios.get('https://localhost:44390/api/Event/').then((result) => {
            const sorted_events = result.data.sort(function (a, b) {
                return new Date(b.startAt) - new Date(a.startAt);
            });
            sorted_events.reverse();
            const events = sorted_events.slice(0, 8);
            setEvents(events);
        });
    }, []);


    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = events?.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };


    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <ArrowBack fontSize='large' /> : <ArrowForward fontSize='large' />
        return (
            <Button onClick={onClick} disabled={isEdge}>
                {pointer}
            </Button>
        )
    }

    return (
        <Box className='my-container'>
            <Container maxWidth='md'>
                <Box align='center'>
                    <Box align='center'>
                        <Typography variant='h2'>всі події:</Typography>
                    </Box>
                    <AutoPlaySwipeableViews
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {events.map((event, index) => (
                            <Box sx={{
                                maxWidth: '420px',
                                mb: 13,
                            }} className="events-main-page">
                                <Box sx={{
                                    p: 3,
                                    backgroundColor: '#000',
                                    height: '110px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <NavLink to={"event/details/" + events[index].eventId}>
                                        <Typography color="secondary" variant='h4' className="h4">{events[index].title}</Typography>
                                    </NavLink>
                                </Box>
                                <Box sx={{
                                    p: 3,
                                    border: '1px solid #000',
                                    borderBottom: '0px'
                                }}>
                                    <Box sx={{ mb: 4, textAlign: 'left' }}>
                                        <Typography variant='body1'>{events[index].shortDesc}</Typography>
                                    </Box>
                                    <Grid container spacing={2}>
                                        {event.eventCategories?.map((category) => (
                                            <Grid item>
                                                <Typography variant='body2'>#{category.category.categoryName}</Typography>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Box sx={{
                                            p: 3,
                                            border: '1px solid #000',
                                            textAlign: 'center',
                                            fontSize: '30px',
                                            fontWeight: 900,
                                        }}>
                                            {moment(events[index].startAt).format('hh:mm')}
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box sx={{
                                            p: 3,
                                            border: '1px solid #000',
                                            textAlign: 'center',
                                            fontSize: '30px',
                                            fontWeight: 900,
                                        }}>
                                            {moment(events[index].startAt).format('DD/MM')}
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        ))}
                    </AutoPlaySwipeableViews>
                    <MobileStepper
                        position='static'
                        variant=''
                        nextButton={
                            <Button
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                <ArrowForward fontSize='large' />
                            </Button>
                        }
                        backButton={
                            <Button onClick={handleBack} disabled={activeStep === 0}>
                                <ArrowBack fontSize='large' />
                            </Button>
                        }
                    />

                    <Box sx={{ mt: 5 }}>
                        <Button variant="outlined" color="primary"><NavLink to="/events">Переглянути всі події</NavLink></Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default AllEventsMainPage;