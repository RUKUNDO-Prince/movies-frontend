import axios from 'axios';

// axios.interceptors.request.use(function (config) {
//     config.headers['Access-Control-Allow-Origin'] = '*';
//     return config;
//   }, function (error) {
//     return Promise.reject(error);
//   });

export default axios.create({
    baseURL:'http://localhost:8080',
    // headers: {"ngrok-skip-browser-warning": "true"}
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true'
});