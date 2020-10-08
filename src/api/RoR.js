import axios from 'axios';
const baseURL = process.env.API_RoR || 'http://localhost:5000';

export default axios.create({
    baseURL,
})