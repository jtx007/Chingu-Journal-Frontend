import axios from 'axios';

export default axios.create({
    baseURL: 'https://chingubackendapi.herokuapp.com/api/v1'
})