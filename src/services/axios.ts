import axios from 'axios';

const timeout = 30000; // 30 seconds

export const api = axios.create({ timeout, baseURL: 'http://localhost:3000' });
