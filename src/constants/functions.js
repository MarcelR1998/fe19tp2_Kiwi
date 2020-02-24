import axios from 'axios';

const delay = interval => new Promise(resolve => setTimeout(resolve, interval));

export const sendMessage = async params => {
    await delay(1000);
    console.log("HEJ")
    return axios(params);
};
