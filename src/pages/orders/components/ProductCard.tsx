import React from 'react';
import { FiX } from 'react-icons/fi';

const ProductCard = ({ item }: IProductCardProps) => {
    return (
        <div className="flex flex-col bg-slate-600" key={item.id}>
            {/* Image product */}
            <div className="">
                <div
                    className="mt-5 ml-40 w-[40px] h-[40px] absolute rounded-full bg-white flex items-center justify-center cursor-pointer
                                        hover:text-white hover:bg-secondColor"
                >
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
