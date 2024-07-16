import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import axios from 'axios';

const App = () => {
  const handleLogin = async (email, password) => {
    try {
      // const response = await axios.post('http://localhost:8000/auth/jwt/create/', {
      //   email,
      //   password,
      // });
      // const { auth_token } = response.data;

      // // Store token in localStorage
      // localStorage.setItem('auth_token', auth_token);

      // // Redirect to '/api/'
      // return window.location.href = 'http://localhost:8000/';
      const { access, refresh } = response.data;
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      window.location.href = 'http://localhost:8000/api/';  // Redirect to the Django website
    } catch (error) {
      console.error('Login failed', error);
    }
  };
  useEffect(() =>{
    if (window.location.pathname === '/api/logout/') {
      // Clear localStorage or sessionStorage
      localStorage.removeItem('token'); // Adjust 'token' to your specific key

      // Redirect to frontend login page
      window.location.href = '/login'; // Adjust '/login' to your frontend login route
    }
  }, []);


  return (
    <Routes>
      <Route path="" element={<Login onLogin={handleLogin} />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route path="/reset-password/:uid/:token" element={<ResetPassword/>} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
