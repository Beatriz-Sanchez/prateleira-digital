import apiInstance from './apiInstance';

export default {
    name: 'api',
    methods: {
        get(url) { return apiInstance.get(url); },
        put(url, data) { return apiInstance.put(url, data); },
        post(url, data) { return apiInstance.post(url, data); },
        delete(url) { return apiInstance.delete(url); },
    },
};
