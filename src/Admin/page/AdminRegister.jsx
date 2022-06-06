import React, { useContext, useRef } from 'react';
import AuthContext from '../../context/AuthContext';
import { useForm } from "react-hook-form";

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { FormControl, TextField } from '@material-ui/core';

const AdminRegister = () => {

    const { registerUser } = useContext(AuthContext);

    const { register, errors, handleSubmit, watch } = useForm({});
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = (data) => {
        registerUser(data);
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <label>Password</label>
            <input
                name="password"
                type="password"
                ref={register("password", {
                    required: "You must specify a password",
                    minLength: {
                        value: 8,
                        message: "Password must have at least 8 characters"
                    }
                })}
            />
            {errors.password && <p>{errors.password.message}</p>}

            <label>Repeat password</label>
            <input type="text" name="newPassword" ref={register({
                validate: (value) => value === watch('password')
            })} placeholder="Новый пароль" required />

            {/* {errors.password_repeat && <p>{errors.password_repeat.message}</p>} */}

            <input type="submit" onClick={handleSubmit(onSubmit)} />
        </form>
    );

}


export default AdminRegister;