import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom';

import SearchEvent from '../components/SearchEvent';
import Events from '../components/Events';
import Pagination from '../components/Pagination';
import BeNotificated from '../../MainPage/components/BeNotificated';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


const AllEvents = () => {
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(4);

  const [data, setData] = useState([]);
  var [categories, setCategories] = useState([]);
  var [categoriesFilter, setCategoriesFilter] = useState([]);

  const addCategory = (category) => {
    categoriesFilter.includes(category) ? setCategoriesFilter(categoriesFilter = categoriesFilter.filter(c => c !== category)) : setCategoriesFilter(categoriesFilter = categoriesFilter.concat(category));
    const result = axios.post('https://localhost:44390/api/Event/Filter', {categories: categoriesFilter}).then((response) => {
      console.log(response);
      setData(response.data.data);
  })

  };



  //get current event
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = data?.slice(indexOfFirstEvent, indexOfLastEvent);
  //const currentEvents = data;

  const paginateHandler = (pageNumber) => setCurrentPage(pageNumber);

  const onSubmit = async (inputValue) => {
    const response = await axios.get(`https://localhost:44390/api/Event/Search?search=${inputValue}`)
    setData(response.data.data);
  }

  useEffect(() => {
    const result = axios.get('https://localhost:44390/api/Event/').then((response) => {
      setData(response.data.reverse());
      console.log(response.data);
      addCategory(location.state?.category);
    });
  }, []);

  const sendSearchResult = (data) => {
    setData(data);
  }

  useEffect(() => {
    const categories = axios.get('https://localhost:44390/api/Category').then((response) => {
      setCategories(response.data);
    })
  }, [data])


  return (
    <div>
      <SearchEvent padding="12" onSubmit={onSubmit} />
      <Box className='my-container' sx={{paddingBottom: '0px'}}>
        <Container maxWidth='md'>
          <Grid container>
            {categories?.map((c) => (
              <Grid item>
                <Box sx={{ margin: "8px" }}>
                  <Button
                    variant='outlined'
                    color='primary'
                    className={categoriesFilter.includes(c.categoryName) ? "category-btn active" : "category-btn"} onClick={()=>addCategory(c.categoryName)}
                  >
                    {c.categoryName}
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Events events={currentEvents} />
      <Pagination eventsPerPage={eventsPerPage} totalEvents={data?.length} paginateHandler={paginateHandler} currentPage={currentPage} />
      <BeNotificated />
    </div>
  )
}

export default AllEvents;