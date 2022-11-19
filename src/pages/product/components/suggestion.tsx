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
            <div className="max-w-[100rem]">
                <div className={clsx('flex')}>
                    {products?.map((item, index) => {
                        return index < 4 && <SuggestCard items={item}></SuggestCard>;
                    })}
                </div>
            </div>
        </div>
    );
};
