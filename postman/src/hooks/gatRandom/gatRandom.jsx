import axios from "axios";

export const gatRandom = () => {
    const url = 'https://api.freeapi.app/api/v1/public/';
    return axios.create({ baseURL: url });
};



