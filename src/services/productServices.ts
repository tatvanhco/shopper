import { api } from './base';
interface ProductRequest {}
export interface ProductResonse {
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
    categoryId: number;
    category: string;
}
export interface ProductDetail {
    id: string;
    name: string;
    price: number;
    avt: string;
    status: number;
    desc: string;
    categoryId: number;
    category: string;
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
            console.log('data', response.data);

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

export const getSortProduct = (payload: any) => {
    return api
        .get('/products?sort=' + payload)
        .then((response) => response.data)
        .then((response: ProductDetailResponse) => {
            return response.data;
        })
        .catch((error) => error.response);
};

export const getChangePage = (payload: any) => {
    return api
        .get('/products?page=' + payload)
        .then((response) => response.data)
        .then((response: ProductDetailResponse) => {
            return response.data;
        })
        .catch((error) => error.response);
};

export const getSortCategory = (payload: any) => {
    return api
        .get('/products?category=' + payload)
        .then((response) => response.data)
        .then((response: ProductDetailResponse) => {
            return response.data;
        })
        .catch((error) => error.response);
};
