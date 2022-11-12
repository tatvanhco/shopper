import { Pagination } from '@mui/material';
import { ProductItems } from 'data/Productdb';
import React, { useState } from 'react';
import ProductCard from './ProductCard';

function OrderWishlist() {
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        totalRows: 11,
    });

    function handlePageChange(newPage: any) {
        // call API to re-fetch
        console.log('New page', newPage);
    }

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-8">
                {ProductItems.map((item, index) => {
                    return <ProductCard item={item}></ProductCard>;
                })}
            </div>

            <div className="float-right">
                <Pagination />
            </div>
        </>
    );
}

export default OrderWishlist;
