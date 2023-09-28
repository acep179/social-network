import axios from 'axios';

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL + process.env.NEXT_PUBLIC_API_VERSION,
});

API.defaults.headers.common["app-id"] = "65148ac78192bc711d644d51"

export { API }