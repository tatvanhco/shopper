import clsx from 'clsx';
import { useEffect, useState } from 'react';
import * as productServices from 'services/productServices';
import { SuggestCard } from './suggestCard';

export const Suggestion = () => {
    const [products, setProducts] = useState<productServices.Product[]>([]);
    useEffect(() => {
        productServices.getProducts().then((data) => {
            setProducts(data);
        });
    }, []);
    return (
        <div className="my-10">
            <h2 className="text-center text-3xl font-semibold my-10">Có thể bạn sẽ thích</h2>
            <div className="grid grid-cols-2 grid-rows-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 gap-8">
                {products?.map((item, index) => {
                    return index < 4 && <SuggestCard items={item}></SuggestCard>;
                })}
            </div>
        </div>
    );
};
