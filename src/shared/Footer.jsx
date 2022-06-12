import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const Footer = () => {
    return(
        <Box sx={{backgroundColor: '#000'}} className="my-container">
        <Container maxWidth="md">
            <Grid container spacing={8} justifyContent='center' alignItems="center">
                <Grid item className="intro-main-box">
                    <Box sx={{
                        width: 150,
                        height: 150, 
                        backgroundColor: '#fff'
                    }}className="intro-main-box">
                        <Typography align='center' variant='h3'>OA</Typography>
                    </Box>
                </Grid>
                <Grid item>
                    <Box
                        sx={{
                            color: '#fff',
                            border: '1px solid #fff',
                            fontSize: '30px',
                            height: 150, 
                            lineHeight: '150px', 
                            textTransform: 'uppercase',
                            width: '100%',
                            padding: '0px 40px'
                        }}>
                        тут не нудно
                    </Box>
                </Grid>
            </Grid>
            <Box textAlign='center' sx={{marginTop: '20px'}}>
                <Typography color="secondary">Острог / 2022</Typography>
            </Box>
        </Container>
    </Box>

    )
}

export default Footer;