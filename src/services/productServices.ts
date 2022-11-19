import Axios from 'axios';
import { api } from './base';
interface ProductRequest {}
interface ProductResonse {
    data: Product[];
}
interface ProductDetailResponse {
    data: ProductDetail[];
}
export interface Product {
    id: any;
    name: string;
    price: number;
    avt: string;
    status: number;
}
export interface ProductDetail {
    id: string;
    name: string;
    price: number;
    avt: string;
    status: number;
    desc: string;
    images: ProductImage[];
    sizes: ProductSize[];
}
export interface ProductImage {
    id: string;
    link: string;
}
export interface ProductSize {
    id: string;
    name: string;
    quantity: number;
}
export interface Categories {
    id: string;
    name: string;
    childs: Childs[];
}

export interface Childs {
    id: string;
    name: string;
}

export const getProducts = () => {
    return api
        .get('/products')
        .then((response) => response.data)
        .then((response: ProductResonse) => {
            return response.data;
        })
        .catch((error) => error.response);
};

export const getProduct = (payload: { id: string }) => {
    return api
        .get('/products/' + payload.id)
        .then((response) => response.data)
        .then((response: ProductDetailResponse) => {
            return response.data;
        })
        .catch((error) => error.response);
};

export const getCateGory = () => {
    return api
        .get('/categories')
        .then((response) => response.data)
        .then((response: ProductDetailResponse) => {
            return response.data;
        })
        .catch((error) => error.response);
};
