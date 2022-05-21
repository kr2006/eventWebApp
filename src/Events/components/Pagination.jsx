import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const Pagination = ({eventsPerPage, totalEvents, paginateHandler, currentPage}) => {
    
    const pageNumbers =[];

    for(let i = 1; i<=Math.ceil(totalEvents/eventsPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <Box p={10} sx={{paddingTop: '0px'}}>
        <Container maxWidth="md">
            <Grid container justifyContent='center'>
                <Grid item>
                    {pageNumbers.map(number=>(
                        <a onClick={()=>paginateHandler(number)} href="#" className={`pagination-btn ${currentPage==number ? "active" : ""}`}> {number} </a>
                    ))}
                </Grid>
            </Grid>
            </Container> 
        </Box>
    )
}

export default Pagination;