import axios from 'axios';

export default axios.create({
    baseURL:'http://localhost:8080',
    // headers: {"ngrok-skip-browser-warning": "true"}
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true'
});