import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { FormControl, TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';

const EditEvent = (props) => {
    const { id } = useParams();

    const navigate = useNavigate();

    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm({
        defaultValues: {
            checkbox: false,
        }
    });


    const [data, setData] = useState();

    useEffect(() => {
        const url = 'https://localhost:44390/api/Event/' + id;
        const result = axios.get(url).then((response) => {
            console.log(response);
            //var date = moment(response.data.startAt).format('YYYY-MM-DD');
            //var time = moment(response.data.startAt).format('hh:mm');
            console.log(moment(response.data.startAt).format('YYYY-MM-DD'));
            console.log(response.data.startAt);

            setValue("title", response.data[0].title);
            setValue("shortDesc", response.data[0].shortDesc);
            setValue("description", response.data[0].description);
            setValue("eventLink", response.data[0].eventLink);
            setValue("start", moment(response.data[0].startAt).format('YYYY-MM-DD'));
            setValue("startAt", moment(response.data[0].startAt).format('hh:mm'));
            setValue("price", response.data[0].price);
            setValue("location", response.data[0].location);
            setValue("category", false);
        });

    }, []);

    const onSubmit = (formData) => {
        console.log(formData);
        var date = formData.start + " " + formData.startAt;
        formData.startAt = moment(date).toDate();
        console.log(formData.startAt);
        const url = 'https://localhost:44390/api/Event/' + id;
        const result = axios.put(url, formData).then((result) => {
            console.log(result);
            navigate(`/event/details/${id}`);
        });
    }

    return (
        <Box p={12}>
            <Container maxWidth='md'>
                <form className='form-create' onSubmit={handleSubmit(onSubmit)}>
                    <FormControl fullWidth>
                        <TextField
                            variant="outlined"
                            label="Назва події"
                            margin="normal"
                            defaultValue=""
                            {...register("title", { required: true })}
                            sx={{
                                width: '100%'
                            }}
                            focused />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            variant="outlined"
                            label="Короткий опис події"
                            margin="normal"
                            defaultValue={data?.shortDesc}
                            {...register("shortDesc", { required: true })}
                            sx={{
                                width: '100%'
                            }}
                            focused />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            variant="outlined"
                            label="Загальний опис події"
                            margin="normal"
                            defaultValue=""
                            {...register("description", { required: true })}
                            sx={{
                                width: '100%'
                            }}
                            focused />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            variant="outlined"
                            label="Посилання"
                            margin="normal"
                            defaultValue=""
                            {...register("eventLink")}
                            sx={{
                                width: '100%'
                            }}
                            focused />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            type="date"
                            variant="outlined"
                            margin="normal"
                            defaultValue=""
                            {...register("start")}
                            sx={{
                                width: '100%'
                            }}
                            focused />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            type="time"
                            variant="outlined"
                            margin="normal"
                            defaultValue=""
                            {...register("startAt")}
                            sx={{
                                width: '100%'
                            }}
                            focused />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            type="number"
                            variant="outlined"
                            label="Ціна"
                            margin="normal"
                            defaultValue=""
                            {...register("price")}
                            sx={{
                                width: '100%'
                            }}
                            focused />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            variant="outlined"
                            label="Місце проведення"
                            margin="normal"
                            defaultValue=""
                            {...register("location")}
                            sx={{
                                width: '100%'
                            }}
                            focused />
                    </FormControl>

                    {errors.exampleRequired && <span>This field is required</span>}
                    <Box sx={{
                        textAlign: 'center',
                        marginTop: '20px'
                    }}>
                        <Button type="submit" variant='outlined' color='primary'>Зберегти зміни</Button>
                    </Box>
                </form>
            </Container>
        </Box>
    )
}

export default EditEvent;