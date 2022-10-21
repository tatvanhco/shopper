import { ProductItems } from 'data/ProductItems';
import { FiChevronRight, FiX } from 'react-icons/fi';
import React from 'react';
import ProductCard from './ProductCard';

function OrderWishlist() {
    return (
        <div className="col-span-2 grid grid-cols-3 grid-rows-2 gap-8">
            {ProductItems.map((item, index) => {
                return <ProductCard item={item}></ProductCard>;
            })}
        </div>
    );
}

export default OrderWishlist;
