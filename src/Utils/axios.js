import axios from 'axios';
import { BASE_URL } from '../Config/environment';

const toast = {}
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 0,
    headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    // Do something with response error
    if (typeof error === "undefined") {
        // request cancelled
        // when backend server is not available at all
        toast.info("We cannot seem to reach our servers. Please check your internet connection and try again", { autoClose: false });
        return Promise.reject(error);
    } else if (typeof error.response === "undefined") {
        // when request is timeout
        toast.info("We cannot seem to reach our servers. Please check your internet connection and try again", { autoClose: false });
        return Promise.reject(error.response);
    } else if (error.response.status === 401) {
        // check body for error type
        return logout(error);
    } else {
        // we don't know what's going on
        return Promise.reject(error.response);
    }
});

export const rootURL = BASE_URL;
export default instance;

