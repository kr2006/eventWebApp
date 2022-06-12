import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Box, Container, Typography, Grid, Button, FormControl, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';



const CategoriesPanel = () => {

    const [categories, setCategories] = useState();
    const [rerender, setRerender] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        axios.get('https://localhost:44390/api/Category').then((response) => {
            setCategories(response.data.reverse());
            console.log(categories);
        })
    }, [])

    const addCategoryHandler = (categoryName) => {
        axios.post('https://localhost:44390/api/Category/',
            { 'categoryName': categoryName })
            .then((response) =>
                console.log(response))
    }

    const deleteCategoryHandler = (id) => {
        axios.delete(`https://localhost:44390/api/Category/${id}`).then((response) => {
            setRerender(true);
        })
    }

    return (
        <Box className='my-container'>
            <Container maxWidth='md'>
                <Box sx={{ marginBottom: '50px' }}>
                    <Button className='btn-add-category' to='/event/create' onClick={(() => setShowForm(!showForm))}>
                        <Box style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                        }}>
                            <AddIcon />
                            <Typography>Додати категорію</Typography>
                        </Box>
                    </Button>
                    {showForm ? (
                        <Box sx={{
                            margin: '0 auto',
                            maxWidth: '600px',
                            width: '100%'
                        }}>
                            <form onSubmit={(() => addCategoryHandler(inputValue))}>
                                <FormControl fullWidth>
                                    <TextField
                                        variant="outlined"
                                        label="Додати категорію"
                                        value={inputValue}
                                        onChange={e => setInputValue(e.target.value)}
                                    />
                                </FormControl>
                            </form>
                        </Box>
                    ) :
                        (<div></div>)
                    }
                </Box>
                {
                    categories?.map((category) => (
                        <Box sx={{
                            padding: '10px 20px',
                            border: '1px solid #000',
                            margin: '0 auto 20px',
                            maxWidth: '600px'
                        }}>
                            <Grid container justifyContent='space-between' alignItems='center'>
                                <Grid item>
                                    <Typography>{category.categoryName}</Typography>
                                </Grid>
                                <Grid item>
                                    <Button onClick={() => deleteCategoryHandler(category.categoryId)}><ClearIcon /></Button>
                                </Grid>
                            </Grid>
                        </Box>
                    ))
                }
            </Container>
        </Box>
    );
};

export default CategoriesPanel;