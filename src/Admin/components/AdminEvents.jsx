import React from 'react';
import moment from 'moment';

import {Box, Container  } from '@material-ui/core';

import AdminEventItem from './AdminEventItem';

const AdminEvents = (props) => {  
    return(
        <Box className='my-container'>
            <Container maxWidth="md">
                {props.events.map((event) => (
                        <AdminEventItem 
                            key={event.eventId}
                            id={event.eventId}
                            title={event.title}
                            date={moment(event.startAt).format('DD/MM')}
                        />
                    ))}
            </Container>
        </Box>
    )

}

export default AdminEvents;