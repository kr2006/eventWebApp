import React, { useContext, useRef, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import { useForm } from "react-hook-form";

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { FormControl, TextField } from '@material-ui/core';

const AdminRegister = () => {

    const { registerUser } = useContext(AuthContext);


    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
        mode: "onTouched"
    });

    const password = watch("password");

    const onSubmit = (data) => {
        registerUser({
            "FirstName": data.firstName,
            "LastName": data.lastName,
            "Email": data.email,
            "Password": data.password,
            "roles": ["Admin"]
        });
    }


    return (
        <Box className='my-container'>
            <Container maxWidth='md'>
                <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
                    <FormControl fullWidth>
                        <TextField
                            variant="outlined"
                            label="Ім'я"
                            margin="normal"
                            defaultValue=""
                            {...register("firstName", { required: true })}
                            sx={{
                                width: '100%'
                            }}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            variant="outlined"
                            label="Прізвище"
                            margin="normal"
                            defaultValue=""
                            {...register("lastName", { required: true })}
                            sx={{
                                width: '100%'
                            }}
                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <TextField
                            variant="outlined"
                            label="Email"
                            margin="normal"
                            defaultValue=""
                            {...register("email", { required: true })}
                            sx={{
                                width: '100%'
                            }}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            variant="outlined"
                            label="Пароль"
                            type="password"
                            margin="normal"
                            defaultValue=""
                            {...register("password", {
                                required: true
                            })}
                            sx={{
                                width: '100%'
                            }}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            variant="outlined"
                            label="Повторити пароль"
                            type="password"
                            margin="normal"
                            defaultValue=""
                            {...register("confirm_password", {
                                required: true,
                                validate: (val) => {
                                    if (watch('password') != val) {
                                        return "Your passwords do no match";
                                    }
                                },
                            })}
                            sx={{
                                width: '100%'
                            }}
                        />
                    </FormControl>
                    <p className='alerts'>{errors.confirm_password?.message}</p>

                    <input className="input-submit" type="submit" value="Додати користувача" />
                </form>

            </Container>
        </Box>
    )

}


export default AdminRegister;