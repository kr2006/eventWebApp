import React from 'react';
import moment from 'moment';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import EventItem from './EventItem';

const Events = (events) => {
    return(
        <Box className='my-container'>
           <Container maxWidth="md">
                {events.events?.map((event) => (
                    <EventItem 
                        id={event.eventId}
                        name={event.title}
                        descr={event.description}
                        date={moment(event.startAt).format('DD/MM')}
                        time={moment(event.startAt).format('hh:mm')}
                        price={(event.price <= 0) ? 'Безкоштовно' : event.price+" UAH"}
                        location={event.location}
                        eventCategories={event.eventCategories}
                    />
                ))}
            </Container> 
        </Box>
    )
}


export default Events;