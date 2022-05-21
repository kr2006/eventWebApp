import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const IntroMainPage = () => {
    return(
        <Box p={15} sx={{backgroundColor: '#000'}}>
            <Container maxWidth="md">
                <Grid container spacing={8} justifyContent='center' alignItems="center">
                    <Grid item>
                        <Box sx={{
                            width: 150,
                            height: 150, 
                            backgroundColor: '#fff'
                        }}>
                            <Typography align='center' variant='h3'>OA</Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box
                            sx={{
                                px: '40px',
                                py: '10px',
                                mb: 3,
                                color: '#fff',
                                border: '1px solid #fff',
                                fontSize: '30px',
                                width: 'fit-content'
                            }}>
                            ВСІ ПОДІЇ
                        </Box>
                        <Box
                            sx={{
                                px: '40px',
                                py: '10px',
                                color: '#fff',
                                border: '1px solid #fff',
                                fontSize: '30px'
                            }}>
                            В ОДНОМУ МІСЦІ
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    )
}

export default IntroMainPage;