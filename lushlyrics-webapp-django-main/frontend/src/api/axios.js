// src/api/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/', // Your Django backend URL
});

export default instance;
