import { Pagination } from '@mui/material';
import { ProductItems } from 'data/Productdb';
import React, { useEffect, useState } from 'react';
import * as productServices from 'services/productServices';
import { WishlistCard } from './wishlistCard';
function OrderWishlist() {
    const [products, setProducts] = useState<productServices.Product[]>([]);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        totalRows: 11,
    });

    useEffect(() => {
        productServices.getProducts().then((data) => {
            setProducts(data);
        });
    }, []);

    function handlePageChange(newPage: any) {
        // call API to re-fetch
        console.log('New page', newPage);
    }

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-8">
                {products.map((item) => {
                    return <WishlistCard data={item}></WishlistCard>;
                })}
            </div>

            <div className="float-right">
                <Pagination />
            </div>
        </>
    );
}

export default OrderWishlist;
