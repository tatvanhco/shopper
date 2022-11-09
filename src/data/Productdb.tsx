import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const ProductItems = [
    {
        id: 1,
        name: 'Leather mid-heel Sandals',
        price: '$129.00',
        size: 'S',
        color: 'red',
        category: 'Shoes',
        img: 'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-5.jpg',
    },
    {
        id: 2,
        name: 'Cotton floral print Dress',
        price: '$40.00',
        size: 'S',
        color: 'red',
        category: 'Dresses',
        img: 'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-5.jpg',
    },
    {
        id: 3,
        name: 'Leather Sneakers',
        price: '$85.00',
        size: 'S',
        color: 'red',
        category: 'Shoes',
        img: 'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-5.jpg',
    },
    {
        id: 4,
        name: 'Cropped cotton Top',
        price: '$29.00',
        size: 'S',
        color: 'red',
        category: 'Tops',
        img: 'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-5.jpg',
    },
    {
        id: 5,
        name: 'LFloral print midi Dress',
        price: '$50.00',
        size: 'S',
        color: 'red',
        category: 'Dresses',
        img: 'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-5.jpg',
    },
    {
        id: 6,
        name: 'Suede cross body Bag',
        price: '$49.00',
        size: 'S',
        color: 'red',
        category: 'Bags',
        img: 'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-5.jpg',
    },
    {
        id: 7,
        name: 'Printed A-line Skirt',
        price: '$79.00',
        size: 'S',
        color: 'red',
        category: 'Skirts',
        img: 'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-5.jpg',
    },
    {
        id: 8,
        name: 'Heel strappy Sandals',
        price: '$90.00',
        size: 'S',
        color: 'red',
        category: 'Shoes',
        img: 'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-5.jpg',
    },
];

export const ProductImages = [
    {
        url: 'https://cdn.tgdd.vn/Files/2021/01/29/1323895/top-11-thuong-hieu-thoi-trang-nam-noi-tieng-tai-viet-nam-ma-nam-gioi-can-biet-202101291511591277.jpg',
        link: (
            <Link
                to="/shop"
                className="text-base font-semibold flex items-center w-[100] h-[25px] absolute bg-white p-3 top-[50%] right-[50%]"
            >
                Shop Now
                <FiArrowRight className="duration-300 ml-2 hover:ml-4" size={'16'} />
            </Link>
        ),
    },
    {
        url: 'https://cdn.tgdd.vn/Files/2021/01/29/1323895/top-11-thuong-hieu-thoi-trang-nam-noi-tieng-tai-viet-nam-ma-nam-gioi-can-biet-202101291513044276.jpg',
        link: (
            <Link
                to="/shop"
                className="text-base font-semibold flex items-center w-[100] h-[25px] absolute bg-white p-3 top-[50%] right-[50%]"
            >
                Shop Now
                <FiArrowRight className="duration-300 ml-2 hover:ml-4" size={'16'} />
            </Link>
        ),
    },
    {
        url: 'https://cdn.tgdd.vn/Files/2021/01/29/1323895/top-11-thuong-hieu-thoi-trang-nam-noi-tieng-tai-viet-nam-ma-nam-gioi-can-biet-202101291513392063.jpg',
        link: (
            <Link
                to="/shop"
                className="text-base font-semibold flex items-center w-[100] h-[25px] absolute bg-white p-3 top-[50%] right-[50%]"
            >
                Shop Now
                <FiArrowRight className="duration-300 ml-2 hover:ml-4" size={'16'} />
            </Link>
        ),
    },
    {
        url: 'https://cdn.tgdd.vn/Files/2021/01/29/1323895/top-11-thuong-hieu-thoi-trang-nam-noi-tieng-tai-viet-nam-ma-nam-gioi-can-biet-202101291517534515.jpg',
        link: (
            <Link
                to="/shop"
                className="text-base font-semibold flex items-center w-[100] h-[25px] absolute bg-white py-4 top-[50%] right-[50%]"
            >
                Shop Now
                <FiArrowRight className="duration-300 ml-2 hover:ml-4" size={'16'} />
            </Link>
        ),
    },
];
