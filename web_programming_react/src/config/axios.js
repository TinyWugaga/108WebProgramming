import axios from 'axios';

export const Axios =
    axios.create({
        baseURL: "/",
        headers: {'content-type': 'application/json'}
    });
