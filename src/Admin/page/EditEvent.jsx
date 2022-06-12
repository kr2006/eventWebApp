import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { FormControl, TextField, Button } from '@material-ui/core';
import AuthContext from '../../context/AuthContext';

const EditEvent = (props) => {
    const { id } = useParams();
    const { token } = useContext(AuthContext);

    const navigate = useNavigate();

    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm({
        defaultValues: {
            checkbox: false,
        }
    });


    const [data, setData] = useState();
    const [categories, setCategories] = useState();
    var [categoryIds, setCategoriesIds] = useState([]);

    const addCategoryId = (id) => {
        categoryIds.includes(id) ? setCategoriesIds(categoryIds = categoryIds.filter(c => c !== id)) : setCategoriesIds(categoryIds = categoryIds.concat(id));
        console.log(categoryIds);
    };

    useEffect(() => {
        const url = 'https://localhost:44390/api/Event/' + id;
        const result = axios.get(url).then((response) => {
            setData(response.data[0]);

            setValue("title", response.data[0].title);
            setValue("shortDesc", response.data[0].shortDesc);
            setValue("description", response.data[0].description);
            setValue("eventLink", response.data[0].eventLink);
            setValue("start", moment(response.data[0].startAt).format('YYYY-MM-DD'));
            setValue("startAt", moment(response.data[0].startAt).format('hh:mm'));
            setValue("price", response.data[0].price);
            setValue("location", response.data[0].location);
        });

    }, []);

    useEffect(() => {
        const eventCategories = data?.eventCategories;
            eventCategories?.forEach(item => categoryIds.push(item.categoryId));
            console.log(categoryIds);
            console.log("hahahahah");
        const categories = axios.get('https://localhost:44390/api/Category').then((response) => {
            setCategories(response.data);
        })
    }, [data])

    const onSubmit = (formData) => {
        console.log(formData);
        var date = formData.start + " " + formData.startAt;
        formData.startAt = moment(date).toDate();
        console.log(formData.startAt);
        formData.CategoryIds = categoryIds;
        const url = 'https://localhost:44390/api/Event/' + id;
        const result = axios.put(url, formData, {
            headers: {
                Authorization: 'Bearer ' + Object.values({ token })[0]
            }
        }).then((result) => {
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
                    <Box sx={{ margin: '30px 0px 10px' }}>
                        Категорії:
                    </Box>

                    <Box sx={{ marginLeft: '-10px' }}>
                        <Grid container>
                            {categories?.map((c) => (
                                <Grid item>
                                    <Box sx={{ margin: "8px" }}>
                                        <Button
                                            variant='outlined'
                                            color='primary'
                                            className={categoryIds.includes(c.categoryId) ? "category-btn active" : "category-btn"}
                                            onClick={() => {
                                                addCategoryId(c.categoryId)
                                            }}
                                        >
                                            {c.categoryName}
                                        </Button>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    <Box sx={{
                        textAlign: 'center',
                        marginTop: '40px'
                    }}>
                        <Button type="submit" variant='outlined' color='primary'>Зберегти зміни</Button>
                    </Box>
                </form>


            </Container>
        </Box>
    )
}

export default EditEvent;