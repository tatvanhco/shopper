import Axios from 'axios';
import { api } from './base';

export interface Orders {
    order_id: number;
    order_date: string;
    order_receive: string;
    order_total: string;
    order_status: string;
    user_id: string;
    locate_id: string;
    deleted_at: string;
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
