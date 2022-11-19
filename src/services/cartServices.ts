import Axios from 'axios';
import { api } from './base';

export interface Orders {
    status: number;
    message: string;
    data: orderItems[];
}

export interface orderItems {
    cartId: number;
    product: productItems;
    size: productSize[];
    quantity: number;
}

export interface productItems {
    id: any;
    name: string;
    price: string;
    avt: string;
    status: string;
}

export interface productSize {
    id: number;
    name: string;
    status: string;
}

export const getCart = () => {
    return api
        .get('/cart')
        .then((response) => response.data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => error.response);
};

export const postCart = () => {
    return api
        .post('/cart')
        .then((response) => {
            return response;
        })
        .catch((error) => error.response);
};
