import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import { Box, Container, Typography } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import SearchEvent from '../../Events/components/SearchEvent';
import AdminEvents from '../components/AdminEvents';
import Pagination from '../../Events/components/Pagination';


const AdminPanel = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [eventsPerPage] = useState(5);

    const [data, setData] = useState([]);

    const onSubmit = async (inputValue) => {
        const response = await axios.get(`https://localhost:44390/api/Event/Search?search=${inputValue}`)
        setData(response.data.data.data)
    }

    useEffect(() => {
        const result = axios.get('https://localhost:44390/api/Event/').then((result) => {
            setData(result.data.reverse());
        });
    }, [data]);

    //get current event
    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = data?.slice(indexOfFirstEvent, indexOfLastEvent);

    const paginateHandler = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Box>
            <Box pt={10} pb={5}>
                <Container maxWidth='md'>
                    <Box sx={{ marginBottom: '20px' }}>
                        <NavLink className="wide-btn" to='/event/create'>
                            <Box style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                            }}>
                                <AddIcon />
                                <Typography>Створити подію </Typography>
                            </Box>
                        </NavLink>
                    </Box>
                    <Box sx={{ marginBottom: '20px' }}>
                        <NavLink className="wide-btn" to='/categories/'>
                            <Box style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                            }}>
                                <SettingsIcon />
                                <Typography>Керувати категоріями</Typography>
                            </Box>
                        </NavLink>

                    </Box>
                    <Box>
                        <NavLink className="wide-btn" to='/admin/register'>
                            <Box style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                            }}>
                                <SupervisorAccountIcon />
                                <Typography>Додати адміністатора</Typography>
                            </Box>
                        </NavLink>

                    </Box>


                </Container>
            </Box>
            <SearchEvent padding="2" onSubmit={onSubmit} />
            <AdminEvents events={currentEvents} />
            <Pagination eventsPerPage={eventsPerPage} totalEvents={data?.length} paginateHandler={paginateHandler} currentPage={currentPage} />
        </Box>
    )
}

export default AdminPanel;