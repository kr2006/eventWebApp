import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const AdminPrivateRoute = ({ children }) => {
  const {tokens} = useContext(AuthContext);
  return tokens ? children : <Navigate to="/login"/>;
};

export default AdminPrivateRoute;