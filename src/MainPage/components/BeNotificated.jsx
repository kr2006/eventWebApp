import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const BeNotificated = () => {
    return(
        <Box className='my-container' align='center'>
        <Container maxWidth="md">
            <Box align='center'>
                <Typography variant='h2'>будь в курсі ВСІХ подій:</Typography>
            </Box>
            <Box mb={6}>
                <Box className="be-notificated-child" sx={{
                    padding: '10px',
                    color: '#fff',
                    fontWeight: '900',
                    fontSize: '30px',
                    height: '60px',
                    width: '60px',
                    backgroundColor: '#000'
                }}>1
                </Box>
                <Box className="be-notificated-parent"sx={{
                    width: '100%',
                    border: '1px solid #000',
                    height: '60px',
                    lineHeight: '60px',
                    fontSize: '25px',
                    fontWeight: '900'
                }}>
                    Запусти телеграм бота
                </Box>
            </Box>
            <Box mb={6}>
                <Box className="be-notificated-child" sx={{
                    padding: '10px',
                    color: '#fff',
                    fontWeight: '900',
                    fontSize: '30px',
                    height: '60px',
                    width: '60px',
                    backgroundColor: '#000'
                }}>2
                </Box>
                <Box className="be-notificated-parent"sx={{
                    width: '100%',
                    border: '1px solid #000',
                    height: '60px',
                    lineHeight: '60px',
                    fontSize: '25px',
                    fontWeight: '900'
                }}>
                    Обери свої вподобання
                </Box>
            </Box>
            <Box mb={6}>
                <Box className="be-notificated-child" sx={{
                    padding: '10px',
                    color: '#fff',
                    fontWeight: '900',
                    fontSize: '30px',
                    height: '60px',
                    width: '60px',
                    backgroundColor: '#000'
                }}>3
                </Box>
                <Box className="be-notificated-parent"sx={{
                    width: '100%',
                    border: '1px solid #000',
                    height: '60px',
                    lineHeight: '60px',
                    fontSize: '25px',
                    fontWeight: '900'
                }}>
                    Будь в курсі всіх подій
                </Box>
            </Box>


                <Button variant="outlined">підписатись на події</Button>
        </Container>
    </Box>

    )
}

export default BeNotificated;