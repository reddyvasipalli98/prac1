import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID XOfrZk6PiayQcj4036BR2jkemRhcBSOJiB5K-2nBkdM'
    }
});
