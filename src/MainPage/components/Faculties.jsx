import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const Faculties = () => {
    return(
        <Box p={12} align='center' sx={{background: '#000', color: '#fff'}}>
            <Container maxWidth="md">
                <Box align='center'>
                    <Typography variant='h2'>Переглянь події свого факультету:</Typography>
                </Box>
                <Box mb={8}>
                <Grid container mb={3}>
                        <Grid item xs={6}>
                            <Box sx={{
                                background: '#fff', 
                                p:5, 
                                align: 'center', 
                                color:'#000',
                                border: '1px solid #000',
                                fontSize: '40px',
                                height: '110px'
                                 }}>
                                економіка
                            </Box>
                            <Box sx={{
                                background: '#fff', 
                                p:5, 
                                align: 'center', 
                                color:'#000',
                                border: '1px solid #000',
                                fontSize: '40px',
                                height: '110px'
                                }}>
                                право
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{
                                background: '#fff', 
                                p:5, 
                                align: 'center', 
                                color:'#000',
                                border: '1px solid #000',
                                fontSize: '40px',
                                height: '110px'
                            }}>
                                міжнародні відносини
                            </Box>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Box sx={{
                                        background: '#fff', 
                                        p:5, 
                                        align: 'center', 
                                        color:'#000',
                                        border: '1px solid #000',
                                        fontSize: '40px',
                                        height: '110px'
                                    }}>
                                    ГУМ
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box sx={{
                                        background: '#fff', 
                                        p:5, 
                                        align: 'center', 
                                        color:'#000',
                                        border: '1px solid #000',
                                        fontSize: '40px',
                                        height: '110px'
                                    }}>
                                    РГМ
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