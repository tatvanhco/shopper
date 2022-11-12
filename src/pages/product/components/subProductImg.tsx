import { Rating } from '@mui/material';
import { data } from 'data/Productdb';
import { useState } from 'react';
import { FiHeart, FiShoppingCart, FiX } from 'react-icons/fi';
import { AddCartBtn } from './addCartBtn';
import { ProductDetail } from './ProductDetail';
import { SizeChart } from './SizeChart';

export const SubProductImg = () => {
    const [value, setValue] = useState<number | null>(4);

    return (
        <>
            <div className="pl-16 pr-4">
                <div className="grid grid-cols-2">
                    <div className="grid-cols-1">
                        <a className="text-[#767676]" href="">
                            {data.category}
                        </a>
                    </div>
                    {/* Rating */}
                    <div className="ml-auto flex items-center">
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <a className="ml-2 " href="">
                            Reviews (6)
                        </a>
                    </div>
                </div>
                {/* Heading */}
                <h3 className="mb-2 text-3xl font-semibold">{data.name}</h3>
                {/* Price */}
                <div className="mb-7">
                    <span className="text-[#a6a6a6] line-through font-semibold">{data.cost}</span>
                    <span className="text-secondColor font-bold text-2xl ml-2">{data.price}</span>
                    <span className="text-base ml-1">({data.status})</span>
                </div>
                {/* Form */}
                <form action="">
                    <div className="">
                        <ProductDetail />
                    </div>

                    {/* Size chart */}
                    <SizeChart />

                    <AddCartBtn />
                </form>
            </div>
        </>
    );
};
