import React, { useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import { useDebouncedCallback } from 'use-debounce'

import { TextField, Box, Container, FormControl, Grid } from '@material-ui/core';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const SearchEvent = ({ onSubmit }) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [value, setValue] = useState('');

    const setSearch = useDebouncedCallback((searchKiller) => {
        onSubmit(searchKiller);
    }, 400);

    return (
        <Box p={3} pb={3}>
            <Container maxWidth='md'>
                <Box mb={5}>
                    <FormControl fullWidth>
                        <TextField
                            {...register("data")}
                            variant="outlined"
                            label="Знайти подію..."
                            onChange={e => setSearch(e.target.value)}
                            sx={{
                                width: '100%'
                            }}
                        />
                    </FormControl>
                </Box>
                <Box>
                    <Grid container justifyContent='space-between' spacing={5}>
                        <Grid item xs={6}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>

                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={6}>
                            {/* <FormControl fullWidth>
                                <InputLabel variant='outlined' id="demo-simple-select-label">Обрати факультет</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue={10}
                                label="Обрати факультет"
                                onChange={handleChange}
                                variant="outlined"
                                >
                                <MenuItem value={10}>Всі факультети</MenuItem>
                                <MenuItem value={20}>Економіка</MenuItem>
                                <MenuItem value={30}>Право</MenuItem>
                                <MenuItem value={40}>Міжнародні відносини</MenuItem>
                                <MenuItem value={40}>ГУМ</MenuItem>
                                <MenuItem value={40}>РГМ</MenuItem>
                                </Select>
                            </FormControl>                    */}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default SearchEvent;