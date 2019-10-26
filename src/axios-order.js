import axios from 'axios';
import firebaseURL from './config';

const instance = axios.create({
    baseURL: firebaseURL
});

export default instance;