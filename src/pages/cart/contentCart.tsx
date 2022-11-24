import React, { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import { Link, useNavigate } from 'react-router-dom';
import * as cartServices from 'services/cartServices';
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from '@mui/material';
import { set } from 'immer/dist/internal';
interface ContentCartProps {
    data: cartServices.orderItems[];
}
export const ContentCart: React.FC<ContentCartProps> = ({ data }) => {
    const navigate = useNavigate();
    const handleDelete = (id: any) => {
        cartServices.deleteCart(id);
        navigate('/home/shopping-cart');
    };

    return (
        <div className="col-span-2 md:px-0 px-8 md:mr-16">
            <Scrollbars style={{ width: '100%', height: 420 }}>
                {data?.map((item) => {
                    return (
                        <div key={item.cartId} className="flex p-6 border-y border-gray-200 w-full">
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
                                        value={item.quantity}
                                    />
                                    <Button onClick={() => handleDelete(item.cartId)} className="text-black ">
                                        Xóa
                                        <ClearIcon />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Scrollbars>
        </div>
    );
};
