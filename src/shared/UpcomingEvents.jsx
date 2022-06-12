import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

//slider
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const UpcomingEvents = () => {

    const [upcomingEvents, setUpcomingEvents] = useState([]);

    useEffect(() => {
        const result = axios.get('https://localhost:44390/api/Event/').then((result) => {
            const sorted_events = result.data.sort(function (a, b) {
                return new Date(b.startAt) - new Date(a.startAt);
            });
            sorted_events.reverse();
            const upcomingEvents = sorted_events.slice(0, 6);
            for (var i = 0; i < upcomingEvents.length; i++) {
                upcomingEvents[i].startAt = moment(upcomingEvents[i].startAt).format('DD/MM');
            }
            setUpcomingEvents(upcomingEvents);
        });
    }, []);


    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = upcomingEvents?.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box className="my-container">
            <Container maxWidth="md">
                <Box align='center'>
                    <Typography variant='h2'>Скоро:</Typography>
                </Box>
                <Box sx={{ maxWidth: 800, margin: '0 auto' }}>
                    <AutoPlaySwipeableViews
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {upcomingEvents?.map((step, index) => (
                            <div key={step.eventTitle}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Box
                                        component="span"
                                        sx={{
                                            border: '1px solid #000',
                                            p: 4,
                                            display: 'block',
                                            maxWidth: '800px',
                                            overflow: 'hidden',
                                            width: '100%',
                                        }}
                                    >
                                        <Grid container justifyContent='space-between'  className="upcoming-container">
                                            <Grid item>
                                                <Typography variant='h4' className="upcoming-text title">{upcomingEvents[activeStep]?.title}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant='h4' className="upcoming-text-remove">:</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant='h4' className="upcoming-text">{upcomingEvents[activeStep]?.startAt}</Typography>
                                            </Grid>
                                        </Grid>
                                    </ Box>
                                ) : null}
                            </div>
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
                </Box>
            </Container>
        </Box>
    )
}

export default UpcomingEvents;