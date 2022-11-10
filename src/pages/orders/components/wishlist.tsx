import { PaginationSize } from 'components/layouts/Paginations/Paginations';
import { ProductItems } from 'data/Productdb';
import React from 'react';
import ProductCard from './ProductCard';

function OrderWishlist() {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-8 mb-8">
                {ProductItems.map((item, index) => {
                    return <ProductCard item={item}></ProductCard>;
                })}
            </div>
            <PaginationSize />
        </>
    );
}

export default OrderWishlist;
