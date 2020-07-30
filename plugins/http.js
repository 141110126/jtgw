import axios from 'axios'
import api from '../httpConfig/api.js'
import vue from 'vue'

const instance = axios.create({
    baseURL: api,
    timeout: 5000,
})

vue.prototype.axios = instance;
// export default instance