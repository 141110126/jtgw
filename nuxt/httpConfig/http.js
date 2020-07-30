import axios from 'axios'
import api from './api.js'
const instance = axios.create({
    baseURL: api,
    timeout: 5000,
})
export default instance