import React from 'react';
import { FiX } from 'react-icons/fi';

const ProductCard = ({ item }: IProductCardProps) => {
    return (
        <div className="flex flex-col relative" key={item.id}>
            {/* Image product */}
            <div className="">
                <div className="top-5 right-5 absolute w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center cursor-pointer hover:text-white hover:bg-secondColor">
                    <FiX />
                </div>
                <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-5.jpg" alt="" />
            </div>
            {/* Info product*/}
            <div className="p-6 px-0 flex flex-col items-center">
                <div className="font-semibold">
                    <a href="">{item.name}</a>
                </div>
                <div className="text-[#767676] font-semibold"> {item.price} </div>
            </div>
        </div>
    );
};

export default ProductCard;
