import axios from "axios";

const api = axios.create({
    baseURL:'https://dummyjson.com',
    headers:{
        Accept:"application/json"
    }
});

export default api;