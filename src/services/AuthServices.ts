import Axios from 'axios';
import { api } from './base';

interface signUpUser {
    email: string;
    name: string;
    password: string;
    district: string;
    ward: string;
    city: string;
    street: string;
    phone: number;
}

export const postUser = (payload: { email: string; password: string }) => {
    return api
        .post('/auth/signin', payload)
        .then((response) => {
            return response;
        })
        .catch((error) => error.response);
};

export const signUp = (payload: signUpUser) => {
    return api
        .post('/auth/signup', payload)
        .then((response) => {
            return response;
        })
        .catch((error) => error.response);
};
