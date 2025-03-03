import axios from "axios";


const gatApi = () => {
    const url = 'https://jsonplaceholder.typicode.com/';
    const data = axios.create({
        baseURL: url,
    });
    return data;
};

export const useApi = () => {
    return gatApi();
};