import { ProductItems } from 'data/ProductItems';
import React from 'react';
import ProductCard from './ProductCard';

function OrderWishlist() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-8">
            {ProductItems.map((item, index) => {
                return <ProductCard item={item}></ProductCard>;
            })}
        </div>
    );
}

export default OrderWishlist;
