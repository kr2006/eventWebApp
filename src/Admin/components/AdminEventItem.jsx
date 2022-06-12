import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Modal, Typography } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AuthContext from '../../context/AuthContext';


const AdminEventItem = (props) => {
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);

    const deleteEventHandler = () => {
        const url = 'https://localhost:44390/api/Event/' + props.id;
        const result = axios.delete(url, {
            headers: {
                Authorization: 'Bearer ' + Object.values({ token })[0]
            }
        }
        );
        navigate('/admin');
    }


    return (
        <Box>
            <Box sx={{
                border: '1px solid #000',
                padding: '20px',
                marginBottom: '25px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Box>
                    <NavLink to={"/event/details/" + props.id}>
                        {props.title}  /  {props.date}
                    </NavLink>
                </Box>
                <Box>
                    <Box sx={{ marginRight: '20px', display: 'inline' }}>
                        <Link to={'/event/edit/' + props.id}><EditIcon /></Link>
                    </Box>
                    <Box sx={{ display: 'inline' }}>
                        <Button onClick={deleteEventHandler}><DeleteIcon /></Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default AdminEventItem; 