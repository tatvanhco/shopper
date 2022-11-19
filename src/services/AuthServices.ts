import Axios from 'axios';
import { api } from './base';
export const postUser = (payload: { email: string; password: string }) => {
    return api
        .post('/auth/signin', payload)
        .then((response) => {
            return response;
        })
        .catch((error) => error.response);
};
