import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://192.168.0.167:3000'
});


/* Modem com wifi: 
192.168.0.167 */

/* Modem sem wifi: 
192.168.0.120 */