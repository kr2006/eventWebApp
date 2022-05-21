import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Carousel, {consts} from 'react-elastic-carousel';

import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';

import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';


const FilterEventsByDate = () => {

    //const [events, setEvents] = useState([]);

    useEffect(() => {
        const result = axios.get('https://localhost:44390/api/Event/').then((result)=>{
            var date = new Date();

            var today = (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear();
            var tomorrow = (date.getMonth()+1) + '/' + (date.getDate()+1) + '/' + date.getFullYear();
            var startOfTheWeek = (date.getMonth()+1) + '/' + (date.getDate() - date.getDay() + 1) + '/' + date.getFullYear();
            var ednOfTheWeek = (date.getMonth()+1) + '/' + (date.getDate() - date.getDay() + 7) + '/' + date.getFullYear();
            var saturday = (date.getMonth()+1) + '/' + (date.getDate() - date.getDay() + 6) + '/' + date.getFullYear();
            console.log('saturday '+saturday)
            //const eventsToday = result.data.filter(x => x.start == today);
        });
    }, []);

    
    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <ArrowBack fontSize='large' color='#fff'/> : <ArrowForward fontSize='large'/>
        return (
          <Button onClick={onClick} disabled={isEdge}>
            {pointer}
          </Button>
        )
      }

    

    const events = [
        {
            eventTitle: 'Гальшка',
            eventDescription: 'Гальшка Острозької Академії - це щорічний конкурс дівчат, які змагаються за звання бути "Гальшкою". Подія, що охоплює всі ...',
            eventDate: '22/08',
            eventStartAt: '19:00'
        },
        {
            eventTitle: 'Гальшка',
            eventDescription: 'Гальшка Острозької Академії - це щорічний конкурс дівчат, які змагаються за звання бути "Гальшкою". Подія, що охоплює всі ...',
            eventDate: '22/08',
            eventStartAt: '19:00'
        },
        {
            eventTitle: 'Гальшка',
            eventDescription: 'Гальшка Острозької Академії - це щорічний конкурс дівчат, які змагаються за звання бути "Гальшкою". Подія, що охоплює всі ...',
            eventDate: '22/08',
            eventStartAt: '19:00'
        },
    ]

    return(
        <Box p={12} sx={{backgroundColor: '#000'}} className='filter-event-by-date'>
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
                        <Carousel renderArrow={myArrow}>
                        {events.map((event, index) => (
                            <Box sx={{
                                width: '100%',
                                backgroundColor: '#fff',
                                color: '#000',
                                padding: '15px 40px',
                                textTransform: 'uppercase',
                                fontSize: '30px',
                                margin: '40px 0px',
                            }}>
                                <Grid container justifyContent='space-between'>
                                    <Grid item>{events[index].eventTitle}</Grid>
                                    <Grid item>{events[index].eventDate}</Grid>
                                </Grid>
                            </Box>
                        ))}
                        </Carousel>
                    </TabPanelUnstyled>
                    <TabPanelUnstyled value={1}>Завтра</TabPanelUnstyled>
                    <TabPanelUnstyled value={2}>Цього тижня</TabPanelUnstyled>
                    <TabPanelUnstyled value={3}>Цих вихідних</TabPanelUnstyled>
                </TabsUnstyled>
            </Container>
        </Box>
    )
}

export default FilterEventsByDate;