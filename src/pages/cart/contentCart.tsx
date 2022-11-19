import React, { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom';
import * as cartServices from 'services/cartServices';
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from '@mui/material';
interface ContentCartProps {
    data: cartServices.orderItems[];
}
export const ContentCart: React.FC<ContentCartProps> = ({ data }) => {
    return (
        <div className="col-span-2 md:px-0 px-8 md:mr-16">
            <Scrollbars style={{ width: 700, height: 420 }}>
                {data?.map((item) => {
                    return (
                        <div key={item.cartId} className="flex p-6 border-y border-gray-200">
                            <div className="mr-8">
                                <img
                                    className="object-cover object-center w-[10rem] h-[10rem]"
                                    src={item.product.avt}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col justify-between py-5 w-full">
                                <div className="flex justify-between">
                                    <p className="font-semibold">{item.product.name}</p>
                                    <p>{item.product.price} VND</p>
                                </div>
                                <div className="flex justify-between">
                                    <input
                                        className="border border-gray-400 rounded"
                                        type="number"
                                        name="quality"
                                        id="quality"
                                    />
                                    <Button className="text-black ">
                                        Xóa
                                        <ClearIcon />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Scrollbars>
            <div className="flex justify-between mt-4">
                <div className="flex">
                    <div className="">
                        <p className="mb-2">Mời nhập mã code:</p>
                        <input
                            type="text"
                            className="block mb-6 text-[15px] py-3 pl-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-[15rem]"
                            placeholder="Mời nhập mã giảm giá"
                        />
                    </div>
                    <div className="mt-9 ml-5 rounded">
                        <Link to="" className="py-4 px-5 bg-black text-white">
                            Xác nhận
                        </Link>
                    </div>
                </div>
                <div className="mt-9 rounded">
                    <Link to="" className="py-4 px-5 border border-black  hover:bg-black hover:text-white">
                        Thêm vào giỏ hàng
                    </Link>
                </div>
            </div>
        </div>
    );
};
