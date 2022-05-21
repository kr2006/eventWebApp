import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

import AddIcon from '@material-ui/icons/Add';
import { Button, FormControl, TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';


const CreateEvent = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => { 
    data.startAt = data.start + " " + data.startAt;
    console.log(data.startAt);                      
    data.startAt = moment(data.startAt).format(); 
    axios.post('https://localhost:44390/api/Event/', data);
    navigate("/admin");
  };

  console.log(watch("example")); 


  return (
    <Box p={12}>
      <Container maxWidth='md'>
        <form className='form-create' onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
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


          {errors.exampleRequired && <span>This field is required</span>}

          <Box sx={{
            textAlign: 'center',
            marginTop: '20px'
          }}>
            <Button type="submit" variant='outlined' color='primary'>
              <AddIcon />Створити
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  )
};

export default CreateEvent;