import React from 'react';
import OrderCard from './OrderCard';
import { Link } from 'react-router-dom';

function OrderContainer() {
    return (
        // Order Card
        <div className="mb-5 border ">
            {/* Card body */}
            <div className="p-8 pb-0">
                {/* Info */}
                <div className="grid grid-rows-1 grid-cols-2 md:grid-cols-4 bg-[#f5f5f5] px-5 py-4">
                    <div className="md:mb-0 mb-5">
                        <h6 className="text-[0.6875rem] font-semibold text-[#767676] uppercase tracking-wide mb-3">
                            Order No:
                        </h6>
                        <p className="text-[0.9375rem] font-semibold">66788943</p>
                    </div>
                    <div className="">
                        <h6 className="text-[0.6875rem] font-semibold text-[#767676] uppercase tracking-wide mb-3">
                            SHIPPED DATE:
                        </h6>
                        <p className="text-[0.9375rem] font-bold">01 Oct, 2019</p>
                    </div>
                    <div className="">
                        <h6 className="text-[0.6875rem] font-bold text-[#767676] uppercase tracking-wide mb-3">
                            Status:
                        </h6>
                        <p className="text-[0.9375rem] font-bold">Awaiting Delivery</p>
                    </div>
                    <div className="">
                        <h6 className="text-[0.6875rem] font-bold text-[#767676] uppercase tracking-wide mb-3">
                            Order Amount:
                        </h6>
                        <p className="text-[0.9375rem] font-bold">259.000</p>
                    </div>
                </div>
            </div>
            {/* Card Footer */}
            <div className="p-8">
                <div className="grid grid-rows-1 md:grid-cols-2 grid-cols-1 items-center">
                    <div className="grid grid-cols-4 grid-rows-1 gap-5 relative md:h-[64px] h-[96px] md:mb-0 mb-4">
                        <div className='bg-cover bg-center bg-[url("https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-5.jpg")]'></div>
                        <div className='bg-cover bg-center bg-[url("https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-5.jpg")]'></div>
                        <div className='bg-cover bg-center bg-[url("https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-5.jpg")]'></div>
                        <div className="flex justify-center items-center cursor-pointer bg-[#f5f5f5]">
                            <a href="" className="">
                                <div className="text-xs font-bold">
                                    +2
                                    <br />
                                    more
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:pl-8 gap-4">
                        {/* <div className="w-full border border-[#1f1f1f] text-center px-3 py-3 cursor-pointer group hover:bg-[#1f1f1f]"> */}
                        <Link
                            to={'/account-order-detail'}
                            className="text-sm font-bold tracking-wide border border-[#1f1f1f] px-3 py-3 flex justify-center items-center hover:text-white hover:bg-[#1f1f1f]"
                        >
                            Order Details
                        </Link>
                        <Link
                            to={'/track-order'}
                            className="text-sm font-bold tracking-wide border border-[#1f1f1f] px-3 py-3 flex justify-center items-center hover:text-white hover:bg-[#1f1f1f]"
                        >
                            Track order
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderContainer;
