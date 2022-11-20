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

interface PostCart {
    productId: string;
    sizeId: string;
    quantity: number;
}
export const postCart = (payload: PostCart) => {
    return api
        .post('/cart', payload)
        .then((response) => {
            return response;
        })
        .catch((error) => error.response);
};

export const deleteCart = (payload: string) => {
    return api
        .delete('/cart/' + payload)
        .then((response) => {
            return response;
        })
        .catch((error) => error.response);
};
