import React from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import Header from './shared/Header';
import Footer from './shared/Footer';
import MainPage from './MainPage/page/MainPage';
import AllEvents from './Events/page/AllEvents';
import EventDetails from './Events/page/EventDetails';
import AdminLogin from './Admin/page/AdminLogin';
import AdminPanel from './Admin/page/AdminPanel';
import CreateEvent from './Admin/page/CreateEvent';
import EditEvent from './Admin/page/EditEvent';
import CategoriesPanel from './Admin/page/CategoriesPanel';
import { theme } from './Theme';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/events" element={<AllEvents />} />
          <Route exact path="/event/details/:id" element={<EventDetails />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/events" element={<AdminPanel />} />
          <Route path="/event/create" element={<CreateEvent />} />
          <Route path="/event/edit/:id" element={<EditEvent />} />
          <Route path="/categories" element={<CategoriesPanel />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
