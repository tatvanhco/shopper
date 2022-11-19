import '../../asset/globalStyle/globalStyle.scss';
import { FiArrowRight, FiHeart } from 'react-icons/fi';
import Features from 'components/Features';
import { BodyContainer } from 'components/container';
import { Link } from 'react-router-dom';
import { ProductItems } from 'data/Productdb';
import * as productServices from 'services/productServices';
import { useEffect, useState } from 'react';
import ProductCard from 'pages/orders/components/ProductCard';

function Home() {
    const [products, setProducts] = useState<productServices.Product[]>([]);
    useEffect(() => {
        productServices.getProducts().then((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <div className="home">
            <div className="mb-4 flex items-center justify-center bg-neutral-800 bg-[url('https://yevgenysim-turkey.github.io/shopper/assets/img/patterns/pattern-1.svg')] py-3">
                <span className="text-white uppercase text-xs font-semibold tracking-wider">
                    ⚡️ Happy Holiday Deals on Everything ⚡️
                </span>
            </div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                <div className="bg-cover bg-[url('https://yevgenysim-turkey.github.io/shopper/assets/img/covers/cover-1.jpg')]">
                    <div className="flex flex-col text-center p-10">
                        <div className="mt-32">
                            <h1 className="text-5xl font-extrabold text-white">Women</h1>
                        </div>
                        <div className="group mt-32 w-48 m-auto bg-white border-white p-3">
                            <Link to="/shop" className=" text-base font-semibold flex justify-center items-center">
                                Shop Now
                                <FiArrowRight className="text-black duration-300 ml-2 group-hover:ml-4" size={'16'} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-cover bg-[url('https://yevgenysim-turkey.github.io/shopper/assets/img/covers/cover-2.jpg')]">
                    <div className="flex flex-col text-center p-10">
                        <div className="mt-32">
                            <h1 className="text-5xl font-extrabold text-white">Men</h1>
                        </div>
                        <div className="group mt-32 w-40 m-auto bg-white border-white p-3">
                            <Link to="/shop" className=" text-base font-semibold flex justify-center items-center">
                                Shop Now
                                <FiArrowRight className="text-black duration-300 ml-2 group-hover:ml-4" size={'16'} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-cover bg-[url('https://yevgenysim-turkey.github.io/shopper/assets/img/covers/cover-3.jpg')]">
                    <div className="flex flex-col text-center p-10">
                        <div className="mt-32">
                            <h1 className="text-5xl font-extrabold text-white">Kids</h1>
                        </div>
                        <div className="group mt-32 w-40 m-auto bg-white border-white p-3">
                            <Link to="/shop" className=" text-base font-semibold flex justify-center items-center">
                                Shop Now
                                <FiArrowRight className="text-black duration-300 ml-2 group-hover:ml-4" size={'16'} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <BodyContainer>
                <Features />
                <section className="pt-20">
                    <div className="row justify-center">
                        <div className="flex flex-col sm:basis-2/3 text-center px-8">
                            <h6 className="mb-3 text-Gray400 text-sm tracking-wide">NEW COLLECTION</h6>

                            <h2 className="mb-4 text-4xl font-semibold">Best Picks 2022</h2>

                            <p className="mb-6 text-Gray500">
                                Appear, dry there darkness they're seas, dry waters thing fly midst. Beast, above fly
                                brought Very green.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 grid-rows-4 md:grid-rows-2 md:grid-cols-3 mt-16 gap-8">
                        <div className="group text-white bg-red-200 flex justify-center items-center bg-cover bg-center min-h-[25rem] bg-[url('https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-1.jpg')]">
                            <div className="">
                                <h4 className="e text-2xl md:text-3xl font-semibold mb-3">Bags Collection</h4>
                                <Link to="/shop" className="text-base font-semibold flex items-center ">
                                    Shop Now
                                    <FiArrowRight className="duration-300 ml-2 group-hover:ml-4" size={'16'} />
                                </Link>
                            </div>
                        </div>
                        <div className="group bg-yellow-200 text-black md:col-span-2 flex pl-14 bg-cover bg-center bg-[url('https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-2.jpg')] relative">
                            <div className="absolute mt-6 right-10 w-[6rem] h-[6rem] rounded-full text-white bg-secondColor flex flex-col items-center justify-center">
                                <strong>save</strong>
                                <span className="text-[28px] font-semibold">30%</span>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="text-2xl md:text-3xl font-semibold mb-3">Printed men’s Shirts</h4>
                                <Link to="/shop" className="text-base font-semibold flex items-center ">
                                    Shop Now
                                    <FiArrowRight className="duration-300 ml-2 group-hover:ml-4" size={'16'} />
                                </Link>
                            </div>
                        </div>
                        <div className="group bg-yellow-200 text-black md:col-span-2 flex pl-14 bg-cover bg-center bg-[url('https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-3.jpg')]">
                            <div className="flex flex-col justify-center">
                                <h4 className="text-2xl md:text-3xl font-semibold mb-3">Basic women's Dresses</h4>
                                <Link to="/shop" className="text-base font-semibold flex items-center ">
                                    Shop Now
                                    <FiArrowRight className="duration-300 ml-2 group-hover:ml-4" size={'16'} />
                                </Link>
                            </div>
                        </div>
                        <div className="group text-white bg-red-200 flex justify-center items-center bg-cover bg-center min-h-[25rem] bg-[url('https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-4.jpg')]">
                            <div className="">
                                <h4 className="e text-2xl md:text-3xl font-semibold mb-3">Sweatshirts</h4>
                                <Link to="/shop" className="text-base font-semibold flex items-center ">
                                    Shop Now
                                    <FiArrowRight className="duration-300 ml-2 group-hover:ml-4" size={'16'} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-20">
                    <div className="row justify-center ">
                        <div className="flex flex-col sm:basis-2/3 text-center px-8">
                            <h2 className="mb-4 text-4xl font-semibold">Top month Sellers</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {products.map((item, index) => {
                            return index < 8 && <ProductCard data={item}></ProductCard>;
                        })}
                    </div>
                </section>
            </BodyContainer>

            <section className="bg-f5f5f5">
                <BodyContainer>
                    <div className="py-16">
                        <div className="flex flex-col sm:basis-2/3 text-center px-8">
                            <h2 className="mb-4 text-4xl font-semibold tracking-wide">@shopper</h2>
                            <p className="mb-6 text-Gray500 text-lg">
                                Appear, dry there darkness they're seas, dry waters.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 mb-10 mx-1">
                            <div className="flex items-center relative mx-3">
                                <img
                                    className=""
                                    src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-16.jpg"
                                    alt=""
                                />

                                <div className="w-full flex justify-center items-center transition ease-in-out bg-yellow-200 absolute text-white">
                                    <FiHeart /> 248
                                    <FiHeart /> 7
                                </div>
                            </div>
                            <div className="flex items-center relative mx-3">
                                <img
                                    className=""
                                    src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-18.jpg"
                                    alt=""
                                />

                                <div className="w-full flex justify-center items-center transition ease-in-out bg-yellow-200 absolute text-white">
                                    <FiHeart /> 248
                                    <FiHeart /> 7
                                </div>
                            </div>
                            <div className="flex items-center relative mx-3">
                                <img
                                    className=""
                                    src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-14.jpg"
                                    alt=""
                                />

                                <div className="w-full flex justify-center items-center transition ease-in-out bg-yellow-200 absolute text-white">
                                    <FiHeart /> 248
                                    <FiHeart /> 7
                                </div>
                            </div>
                            <div className="flex items-center relative mx-3">
                                <img
                                    className=""
                                    src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-12.jpg"
                                    alt=""
                                />

                                <div className="w-full flex justify-center items-center transition ease-in-out bg-yellow-200 absolute text-white">
                                    <FiHeart /> 248
                                    <FiHeart /> 7
                                </div>
                            </div>
                            <div className="flex items-center relative mx-3">
                                <img
                                    className=""
                                    src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-14.jpg"
                                    alt=""
                                />

                                <div className="w-full flex justify-center items-center transition ease-in-out bg-yellow-200 absolute text-white">
                                    <FiHeart /> 248
                                    <FiHeart /> 7
                                </div>
                            </div>
                            <div className="flex items-center relative mx-3">
                                <img
                                    className=""
                                    src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-13.jpg"
                                    alt=""
                                />

                                <div className="w-full flex justify-center items-center transition ease-in-out bg-yellow-200 absolute text-white">
                                    <FiHeart /> 248
                                    <FiHeart /> 7
                                </div>
                            </div>
                        </div>
                    </div>
                </BodyContainer>
            </section>
        </div>
    );
}

export default Home;
