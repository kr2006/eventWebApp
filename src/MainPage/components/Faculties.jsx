import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FilterEventsByDate from './FilterEventsByDate';


const Faculties = () => {

    const navigate = useNavigate();

    const filterEvents = (category) => {
        const result = axios.post('https://localhost:44390/api/Event/Filter', { categories: category }).then((response) => {
            console.log(response)
            navigate('/events', {
                state: {
                    category: category
                }
            })
        })
    }
    return (
        <Box align='center' sx={{ background: '#000', color: '#fff' }} className="my-container">
            <Container maxWidth="md">
                <Box align='center'>
                    <Typography variant='h2'>Переглянь події свого факультету:</Typography>
                </Box>
                <Box mb={8}>
                    <Grid container mb={3} className="faculties-container">
                        <Grid item xs={6} className="faculties-grid-item">
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
                                <Button className="simple-btn" onClick={() => filterEvents(["Право"])}>Право</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={6} className="faculties-grid-item">
                            <Box sx={{
                                background: '#fff',
                                p: 5,
                                align: 'center',
                                color: '#000',
                                border: '1px solid #000',
                                fontSize: '40px',
                                height: '110px'
                            }}>
                                <Button className="simple-btn" onClick={() => filterEvents(["Міжнародні відносини"])}>Міжнародні відносини</Button>
                            </Box>
                            <Grid container className='faculties-border'>
                                <Grid item xs={6} className='faculties-border'>
                                    <Box sx={{
                                        background: '#fff',
                                        p: 5,
                                        align: 'center',
                                        color: '#000',
                                        border: '1px solid #000',
                                        fontSize: '40px',
                                        height: '110px'
                                    }}>
                                        <Button className="simple-btn" onClick={() => filterEvents(["ГУМ"])}>ГУМ</Button>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} className='faculties-border'>
                                    <Box sx={{
                                        background: '#fff',
                                        p: 5,
                                        align: 'center',
                                        color: '#000',
                                        border: '1px solid #000',
                                        fontSize: '40px',
                                        height: '110px'
                                    }}>
                                        <Button className="simple-btn" onClick={() => filterEvents(["РГМ"])}>РГМ</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <a href="https://t.me/NotificationsOfBot">
                    <Button variant="outlined" color="secondary">
                        підписатись на розсилку
                    </Button>
                </a>
            </Container>
        </Box>
    )
}


export default Faculties;