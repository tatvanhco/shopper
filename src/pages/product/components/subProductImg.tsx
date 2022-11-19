import { Rating } from '@mui/material';
import { data } from 'data/Productdb';
import { useEffect, useState } from 'react';
import { FiHeart, FiShoppingCart, FiX } from 'react-icons/fi';
import { AddCartBtn } from './addCartBtn';
import { ProductDetail } from './ProductDetail';
import { SizeChart } from './SizeChart';
import { useParams } from 'react-router-dom';
import * as productServices from 'services/productServices';
import * as cartServices from 'services/cartServices';

export const SubProductImg = () => {
    const [productCart, setProductCart] = useState<cartServices.orderItems>();
    const [value, setValue] = useState<number | null>(4);
    const [product, setProduct] = useState<productServices.ProductDetail>();
    const id: string = useParams().id as string;
    useEffect(() => {
        productServices.getProduct({ id: id }).then((data: productServices.ProductDetail) => setProduct(data));
    }, []);
    useEffect(() => {
        cartServices.getCart().then((data: cartServices.orderItems) => setProductCart(data));
    }, []);

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
                <h3 className="mb-2 text-3xl font-semibold">{product?.name}</h3>
                {/* Price */}
                <div className="mb-7">
                    <span className="text-[#a6a6a6] line-through font-semibold">{data.cost}</span>
                    <span className="text-secondColor font-bold text-2xl ml-2">{product?.price}</span>
                    <span className="text-base ml-1">({product?.status})</span>
                    <span className="text-mainColor font-bold text-2xl ml-2">VND</span>
                </div>
                {/* Form */}
                <form action="">
                    <div className="">
                        <ProductDetail Sizes={product?.sizes} />
                    </div>

                    {/* Size chart */}
                    <SizeChart />

                    <AddCartBtn  />
                </form>
            </div>
        </>
    );
};
