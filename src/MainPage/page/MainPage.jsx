import React from 'react';

import IntroMainPage from '../components/IntroMainPage';
import UpcomingEvents from '../../shared/UpcomingEvents';
import Faculties from '../components/Faculties';
import AllEventsMainPage from '../components/AllEventsMainPage';
import FilterEventsByDate from '../components/FilterEventsByDate';
import BeNotificated from '../components/BeNotificated';


const MainPage = () => {
    return (
        <div>
            <IntroMainPage />
            <UpcomingEvents />
            <Faculties />
            <AllEventsMainPage />
            <FilterEventsByDate />
            <BeNotificated />
        </div>
    )
}

export default MainPage;