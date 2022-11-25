import React, { useCallback } from 'react';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as productServices from 'services/productServices';
interface ProductCardProps {
    data: productServices.Product;
}
const ProductCard = ({ data }: ProductCardProps) => {
    const format = (n: any, currency: any) => {
        return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + currency;
    };
    return (
        <Link to={'/home/product/' + data.id}>
            <div className="flex flex-col relative" key={data.id}>
                <div className="">
                    <img src={data.avt} alt="" />
                </div>
                <div className="p-6 px-0 flex flex-col items-center">
                    <p>{data.category}</p>
                    <div className="font-semibold">
                        <p className="text-center">{data.name}</p>
                    </div>
                    <div className="text-[#767676] font-semibold">{format(data.price, ' VND')}</div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
