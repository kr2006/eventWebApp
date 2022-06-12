import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UpcomingEvents from '../../shared/UpcomingEvents';
import SearchEvent from '../components/SearchEvent';
import Events from '../components/Events';
import Pagination from '../components/Pagination';
import BeNotificated from '../../MainPage/components/BeNotificated';

const AllEvents = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(4);

  const [data, setData] = useState([]);

  
  //get current event
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = data?.slice(indexOfFirstEvent, indexOfLastEvent);
  //const currentEvents = data;

  const paginateHandler = (pageNumber) => setCurrentPage(pageNumber);

  const onSubmit = async (inputValue) => {
    const response = await axios.get(`https://localhost:44390/api/Event/Search?search=${inputValue}`)
    setData(response.data.data.data);
  }

  useEffect(() => {
    const result = axios.get('https://localhost:44390/api/Event/').then((response) => {
      setData(response.data.reverse());
      console.log(response.data);
    });
  }, []);

  const sendSearchResult = (data) => {
    setData(data);
  }


  return (
    <div>
      <SearchEvent padding="12" onSubmit={onSubmit} />
      <Events events={currentEvents} />
      <Pagination eventsPerPage={eventsPerPage} totalEvents={data?.length} paginateHandler={paginateHandler} currentPage={currentPage} />
      <BeNotificated />
    </div>
  )
}

export default AllEvents;