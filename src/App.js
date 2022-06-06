import React from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import AdminPrivateRoute from './utils/AdminPrivateRoute.route';
import { AuthProvider } from './context/AuthContext';

import Header from './shared/Header';
import Footer from './shared/Footer';
import MainPage from './MainPage/page/MainPage';
import AllEvents from './Events/page/AllEvents';
import EventDetails from './Events/page/EventDetails';
import AdminLogin from './Admin/page/AdminLogin';
import AdminRegister from './Admin/page/AdminRegister';
import AdminPanel from './Admin/page/AdminPanel';
import CreateEvent from './Admin/page/CreateEvent';
import EditEvent from './Admin/page/EditEvent';
import CategoriesPanel from './Admin/page/CategoriesPanel';
import { theme } from './Theme';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/events" element={<AllEvents />} />
        <Route exact path="/event/details/:id" element={<EventDetails />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <AdminPrivateRoute>
              <AdminPanel />
            </AdminPrivateRoute>
          }
        />
        <Route path="/event/create" element={
          <AdminPrivateRoute>
            <CreateEvent />
          </AdminPrivateRoute>
        } />
        <Route path="/event/edit/:id" element={
          <AdminPrivateRoute>
            <EditEvent />
          </AdminPrivateRoute>
        } />
        <Route path="/categories" element={
          <AdminPrivateRoute>
            <CategoriesPanel />
          </AdminPrivateRoute>
        } />
        <Route path="/admin/register" element={
          <AdminPrivateRoute>
            <AdminRegister />
          </AdminPrivateRoute>
        } />

      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
