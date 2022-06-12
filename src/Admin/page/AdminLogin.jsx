import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { useForm } from "react-hook-form";

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { FormControl, TextField } from '@material-ui/core';

const AdminLogin = () => {

    const { loginUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        loginUser(data);
    }

    return (
        <Box className='my-container'>
            <Container maxWidth='md'>
                <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
                    <FormControl fullWidth>
                        <TextField
                            variant="outlined"
                            label="Email"
                            margin="normal"
                            defaultValue=""
                            {...register("Email", { required: true })}
                            sx={{
                                width: '100%'
                            }}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField
                            variant="outlined"
                            label="Password"
                            type="password"
                            margin="normal"
                            defaultValue=""
                            {...register("Password", { required: true })}
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