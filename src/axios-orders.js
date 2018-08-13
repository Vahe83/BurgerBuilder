import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-firebase.firebaseio.com/'
});

export default instance;