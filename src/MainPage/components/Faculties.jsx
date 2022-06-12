import React from 'react';
import axios from 'axios';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FilterEventsByDate from './FilterEventsByDate';


const Faculties = () => {
    const filterEvents = (category) => {
        console.log(category);
        const result = axios.get('https://localhost:44390/api/Event/Filter', category).then((response) => {
            console.log(response)
        })
    }
    return (
        <Box p={12} align='center' sx={{ background: '#000', color: '#fff' }}>
            <Container maxWidth="md">
                <Box align='center'>
                    <Typography variant='h2'>Переглянь події свого факультету:</Typography>
                </Box>
                <Box mb={8}>
                    <Grid container mb={3}>
                        <Grid item xs={6}>
                            <Box sx={{
                                background: '#fff',
                                p: 5,
                                align: 'center',
                                color: '#000',
                                border: '1px solid #000',
                                fontSize: '40px',
                                height: '110px'
                            }}>
                                <Button className="simple-btn" onClick={() => filterEvents(["Економіка"])}>Економіка</Button>
                            </Box>
                            <Box sx={{
                                background: '#fff',
                                p: 5,
                                align: 'center',
                                color: '#000',
                                border: '1px solid #000',
                                fontSize: '40px',
                                height: '110px'
                            }}>
                                <Button className="simple-btn">Право</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{
                                background: '#fff',
                                p: 5,
                                align: 'center',
                                color: '#000',
                                border: '1px solid #000',
                                fontSize: '40px',
                                height: '110px'
                            }}>
                                <Button className="simple-btn">Міжнародні відносини</Button>
                            </Box>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Box sx={{
                                        background: '#fff',
                                        p: 5,
                                        align: 'center',
                                        color: '#000',
                                        border: '1px solid #000',
                                        fontSize: '40px',
                                        height: '110px'
                                    }}>
                                        <Button className="simple-btn">ГУМ</Button>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box sx={{
                                        background: '#fff',
                                        p: 5,
                                        align: 'center',
                                        color: '#000',
                                        border: '1px solid #000',
                                        fontSize: '40px',
                                        height: '110px'
                                    }}>
                                        <Button className="simple-btn">РГМ</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Button variant="outlined" color="secondary">підписатись на розсилку </Button>
            </Container>
        </Box>
    )
}


export default Faculties;