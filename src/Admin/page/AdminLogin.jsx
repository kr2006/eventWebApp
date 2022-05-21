import React from 'react';
import { useForm } from "react-hook-form";

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { FormControl, TextField, Button, Input } from '@material-ui/core';



const AdminLogin = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Box p={12}>
            <Container maxWidth='md'>
                <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
                    <FormControl fullWidth>
                        <TextField
                            variant="outlined"
                            label="login"
                            margin="normal"
                            defaultValue=""
                            {...register("login", { required: true })}
                            sx={{
                                width: '100%'
                            }}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            variant="outlined"
                            label="password"
                            type="password"
                            margin="normal"
                            defaultValue=""
                            {...register("password", { required: true })}
                            sx={{
                                width: '100%'
                            }}
                        />
                    </FormControl>


                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="input-submit" type="submit" value="Увійти" />
                </form>

            </Container>
        </Box>
    )
}


export default AdminLogin;