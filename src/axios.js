// src/axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8081', // Ganti dengan URL backend Spring Anda
});

export default instance;