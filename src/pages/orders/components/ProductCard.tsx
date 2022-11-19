import React, { useCallback } from 'react';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as productServices from 'services/productServices';
interface ProductCardProps {
    data: productServices.Product;
}
const ProductCard = ({ data }: ProductCardProps) => {
    return (
        <Link to={'/home/product/' + data.id}>
            <div className="flex flex-col relative" key={data.id}>
                <div className="">
                    <img src={data.avt} alt="" />
                </div>
                <div className="p-6 px-0 flex flex-col items-center">
                    <p>tên thể loại ở đây</p>
                    <div className="font-semibold">
                        <a href="">{data.name}</a>
                    </div>
                    <div className="text-[#767676] font-semibold"> {data.price} </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
