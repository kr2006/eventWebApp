import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import moment from 'moment';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Carousel, { consts } from 'react-elastic-carousel';

import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import MobileStepper from '@material-ui/core/MobileStepper';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const FilterEventsByDate = () => {

    const [events, setEvents] = useState();

    var today = moment().format('L');
    var tomorrow = moment().add(1, 'days').format('L');
    var startWeek = moment().startOf('isoweek').format('L');
    var endWeek = moment().endOf('isoweek').format('L');
    var saturday = moment().endOf('isoweek').add(-1, 'days').format('L');

    const eventsToday = events?.filter(x => moment(x.startAt).format('L') === today);
    const eventsTomorrow = events?.filter(x => moment(x.startAt).format('L') === tomorrow);
    const eventsThisWeek = events?.filter(x => moment(x.startAt).format('L') >= startWeek && moment(x.startAt).format('L') <= endWeek);
    console.log(eventsThisWeek?.[2]);
    const eventsThisWeekend = events?.filter(x => moment(x.startAt).format('L') >= saturday && moment(x.startAt).format('L') <= endWeek);


    useEffect(() => {
        const result = axios.get('https://localhost:44390/api/Event/').then((result) => {
            setEvents(result.data);
            console.log(result.data);
        });
    }, []);


    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <ArrowBack fontSize='large' color='#fff' /> : <ArrowForward fontSize='large' />
        return (
            <Button onClick={onClick} disabled={isEdge}>
                {pointer}
            </Button>
        )
    }

    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = eventsThisWeek?.length;

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
        <Box  sx={{ backgroundColor: '#000' }} className='filter-event-by-date my-container'>
            <Container maxWidth='md'>
                <Box align='center'>
                    <Typography variant='h2' color="secondary">знайди собі подію:</Typography>
                </Box>
                <TabsUnstyled defaultValue={0}>
                    <TabsListUnstyled>
                        <TabUnstyled>Сьогодні</TabUnstyled>
                        <TabUnstyled>Завтра</TabUnstyled>
                        <TabUnstyled>Цього тижня</TabUnstyled>
                        <TabUnstyled>Цих вихідних</TabUnstyled>
                    </TabsListUnstyled>
                    <TabPanelUnstyled value={0}>
                        {eventsToday?.map((event, index) => (
                            <Box sx={{
                                width: '100%',
                                border: '1px solid #fff',
                                padding: '15px 40px',
                                textTransform: 'uppercase',
                                fontSize: '30px',
                                margin: '40px 0px',
                            }}>
                                <Grid container justifyContent='space-between' className="upcoming-container">
                                    <Grid item className="upcoming-text title">{eventsToday[index]?.title}  </Grid>
                                    <Grid item className="upcoming-text">{moment(eventsToday[index]?.startAt).format('DD/MM')}</Grid>
                                </Grid>
                            </Box>
                        ))}
                    </TabPanelUnstyled>
                    <TabPanelUnstyled value={1}>
                        {eventsTomorrow?.map((event, index) => (
                            <Box sx={{
                                width: '100%',
                                border: '1px solid #fff',
                                padding: '15px 40px',
                                textTransform: 'uppercase',
                                fontSize: '30px',
                                margin: '40px 0px',
                            }}>
                                <Grid container justifyContent='space-between' className="upcoming-container">
                                    <Grid item className="upcoming-text title">{eventsTomorrow[index]?.title}</Grid>
                                    <Grid item className="upcoming-text">{moment(eventsTomorrow[index]?.startAt).format('DD/MM')}</Grid>
                                </Grid>
                            </Box>
                        ))}
                    </TabPanelUnstyled>
                    <TabPanelUnstyled value={2}>
                        <Box sx={{ maxWidth: 800, margin: '0 auto' }}>
                            <AutoPlaySwipeableViews
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                            >
                                {eventsThisWeek?.map((step, index) => (
                                    <div key={step.eventTitle}>
                                        {Math.abs(activeStep - index) <= 2 ? (
                                            <Box
                                                component="span"
                                                sx={{
                                                    border: '1px solid #fff',
                                                    padding: '15px 40px',
                                                    display: 'block',
                                                    width: '100%',
                                                    overflow: 'hidden',
                                                    width: '100%',
                                                }}
                                            >
                                                <Grid container justifyContent='space-between' className="upcoming-container">
                                                    <Grid item>
                                                        <Typography variant='h4' className="upcoming-text title">{eventsThisWeek[activeStep]?.title}</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant='h4' className="upcoming-text">{moment(eventsThisWeek[activeStep]?.startAt).format('DD/MM')}</Typography>
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
                    </TabPanelUnstyled>
                    <TabPanelUnstyled value={3}>
                        {eventsThisWeekend?.map((event, index) => (
                            <Box sx={{
                                width: '100%',
                                border: '1px solid #fff',
                                padding: '15px 40px',
                                textTransform: 'uppercase',
                                fontSize: '30px',
                                margin: '40px 0px',
                            }}>
                                <Grid container justifyContent='space-between' className="upcoming-container">
                                    <Grid item className="upcoming-text title">{eventsThisWeekend[index]?.title}</Grid>
                                    <Grid item className="upcoming-text">{moment(eventsThisWeekend[index]?.startAt).format('DD/MM')}</Grid>
                                </Grid>
                            </Box>
                        ))}
                    </TabPanelUnstyled>
                </TabsUnstyled>
            </Container>
        </Box>
    )
}

export default FilterEventsByDate;