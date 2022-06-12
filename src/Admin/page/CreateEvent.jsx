import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

import AddIcon from '@material-ui/icons/Add';
import { Button, FormControl, TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const CreateEvent = () => {

  const [categories, setCategories] = useState();

  var [categoryIds, setCategoriesIds] = useState([]);

  const addCategoryId = (id) => {
    categoryIds.includes(id) ? setCategoriesIds(categoryIds = categoryIds.filter(c => c !== id)) : setCategoriesIds(categoryIds = categoryIds.concat(id));
    console.log(categoryIds);
  };

  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => {
    data.startAt = data.start + " " + data.startAt;
    data.startAt = moment(data.startAt).format();
    data.CategoryIds = categoryIds;
    axios.post('https://localhost:44390/api/Event/CreateWithCategories', data);
    navigate("/admin");
  };

  useEffect(() => {
    const categories = axios.get('https://localhost:44390/api/Category').then((response) => {
      setCategories(response.data);
      console.log(response.data)
    })
  }, [])

  return (
    <Box p={12} >
      <Container maxWidth='md'>
        <form className='form-create' onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth>
            <TextField
              variant="outlined"
              label="Назва події"
              margin="normal"
              defaultValue=""
              {...register("title", { required: true, maxLength: 20, })}
              sx={{
                width: '100%'
              }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              variant="outlined"
              label="Короткий опис події"
              margin="normal"
              defaultValue=""
              {...register("shortDesc", { required: true })}
              sx={{
                width: '100%'
              }}
            />
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
            />
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
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              type="date"
              variant="outlined"
              margin="normal"
              defaultValue=""
              {...register("start", { required: true })}
              sx={{
                width: '100%'
              }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              type="time"
              variant="outlined"
              margin="normal"
              defaultValue=""
              {...register("startAt", { required: true })}
              sx={{
                width: '100%'
              }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              type="number"
              variant="outlined"
              label="Ціна"
              margin="normal"
              defaultValue=""
              {...register("price", { required: true })}
              sx={{
                width: '100%'
              }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              variant="outlined"
              label="Місце проведення"
              margin="normal"
              defaultValue=""
              {...register("location", { required: true })}
              sx={{
                width: '100%'
              }}
            />
          </FormControl>
          <Box sx={{ margin: '30px 0px 10px' }}>
            Оберіть категорії:
          </Box>

          <Box sx={{ marginLeft: '-10px' }}>
            <Grid container>
              {categories?.map((c) => (
                <Grid item>
                  <Box sx={{ margin: "8px" }}>
                    <Button variant='outlined' color='primary' className={categoryIds.includes(c.categoryId) ? "category-btn active" : "category-btn"} onClick={() => {
                      addCategoryId(c.categoryId)
                    }}>{c.categoryName}</Button>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>


          {errors.exampleRequired && <span>This field is required</span>}

          <Box sx={{
            textAlign: 'center',
            marginTop: '50px'
          }}>
            <Button type="submit" variant='outlined' color='primary'>
              <AddIcon />Створити подію
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  )
};

export default CreateEvent;