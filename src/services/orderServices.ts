import Axios from 'axios';
import { api } from './base';

export interface Orders {
    id: number;
    date: string;
    receive: string;
    total: number;
    status: string;
    locateId: string;
    detail: detailItems[];
}

export interface detailItems {
    product: detail_products;
    size: detail_sizes;
}

interface detail_products {
    id: number;
    name: string;
    image: string;
    price: number;
}

interface detail_sizes {
    id: number;
    name: string;
    quantity: number;
}

export const getOrders = () => {
    return api
        .get('/orders')
        .then((response) => response.data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => error.response);
};

export const getOrder = (payload: { id: string }) => {
    return api
        .get('/orders/' + payload.id)
        .then((response) => response.data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => error.response);
};

export const createOrder = (payload: any) => {
    return api
        .post('/orders', payload)
        .then((response) => {
            return response.data;
        })
        .catch((error) => error.response);
};

export const deleteOrder = (payload: any) => {
    return api
        .delete('/orders/' + payload)
        .then((response) => {
            return response;
        })
        .catch((error) => error.response);
};
