import { Rating } from '@mui/material';
import { data } from 'data/Productdb';
import { useEffect, useState } from 'react';
import { FiHeart, FiShoppingCart, FiX } from 'react-icons/fi';
import { AddCartBtn } from './addCartBtn';
import { ProductDetail } from './ProductDetail';
import { SizeChart } from './SizeChart';
import { useNavigate, useParams } from 'react-router-dom';
import * as productServices from 'services/productServices';
import * as cartServices from 'services/cartServices';
import { DateSchema } from 'yup';

export const SubProductImg = () => {
    const [sizeId, setSizeId] = useState<string>();
    const [quantity, setQuantity] = useState<number>();

    const [productCart, setProductCart] = useState<cartServices.orderItems>();
    const [value, setValue] = useState<number | null>(4);
    const [product, setProduct] = useState<productServices.ProductDetail>();
    const id: string = useParams().id as string;
    const navigate = useNavigate();

    useEffect(() => {
        productServices.getProduct({ id: id }).then((data: productServices.ProductDetail) => setProduct(data));
    }, []);

    useEffect(() => {
        cartServices.getCart().then((data: cartServices.orderItems) => setProductCart(data));
    }, []);

    const handleAdd = (quantity: any) => {
        if (!sizeId) {
            alert('vui lòng chọn kích cỡ');
            return;
        }
        if (!quantity) {
            alert('vui lòng chọn số lượng cần mua');
            return;
        }
        cartServices
            .postCart({
                productId: product?.id || '1',
                sizeId: sizeId || 'S',
                quantity: quantity,
            })
            .then((data: any) => {
                console.log('data', data);
                console.log('send', data.data);

                console.log('status', data.status);

                if (data.data.status == 1) {
                    // setProductCart(data.data)
                } else {
                    alert('vui lòng đăng nhập trước khi mua hàng');
                    navigate('/login');
                }
            });
    };

    return (
        <>
            <div className="md:pl-16 md:pr-4">
                <div className="grid grid-cols-2 pb-4">
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
                        <a className="ml-2" href="">
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
                        <ProductDetail Sizes={product?.sizes} selectSize={(e: any) => setSizeId(e)} />
                    </div>

                    {/* Size chart */}
                    <SizeChart />

                    <AddCartBtn handleAdd={handleAdd} />
                </form>
            </div>
        </>
    );
};
