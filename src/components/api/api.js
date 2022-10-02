import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1',
});

export default {
    name: 'api',
    methods: {
        get(url) { return axiosInstance.get(url); },
        put(url, data) { return axiosInstance.put(url, data); },
        post(url, data) { return axiosInstance.post(url, data); },
        delete(url) { return axiosInstance.delete(url); },
    },
};
