import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as orderServices from 'services/orderServices';

function OrderDetail() {
    const [orderItem, setOrderItem] = useState<orderServices.Orders>();
    const id: string = useParams().id as string;
    useEffect(() => {
        orderServices.getOrder({ id: id }).then((data) => setOrderItem(data));
    }, []);
    console.log(orderItem);

    // const totalProducts = () => {
    //     let tong: any;
    //     orderItem?.detail.map((item) => {
    //         const priceItems = item.product.price;
    //         const quantityItems = item.size.quantity;
    //         tong = priceItems * quantityItems;
    //     });
    //     return tong;
    // };

    // const total: number = totalProducts();
    const tax: number = 0;
    // console.log('tong', total);

    const format = (n: any) => {
        return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    };

    return (
        <div>
            <div className="border mb-5">
                <div className="p-8 pb-0">
                    <div className="grid grid-rows-1 grid-cols-2 md:grid-cols-4 bg-[#f5f5f5] px-5 py-4">
                        <div className="md:mb-0 mb-5">
                            <h6 className="text-[0.6875rem] font-semibold text-[#767676] uppercase tracking-wide mb-3">
                                Order No:
                            </h6>
                            <p className="text-[0.9375rem] font-semibold">{orderItem?.id}</p>
                        </div>
                        <div className="">
                            <h6 className="text-[0.6875rem] font-semibold text-[#767676] uppercase tracking-wide mb-3">
                                SHIPPED DATE:
                            </h6>
                            <p className="text-[0.9375rem] font-bold">{orderItem?.date}</p>
                        </div>
                        <div className="">
                            <h6 className="text-[0.6875rem] font-bold text-[#767676] uppercase tracking-wide mb-3">
                                Status:
                            </h6>
                            <p className="text-[0.9375rem] font-bold">{orderItem?.status}</p>
                        </div>
                        <div className="">
                            <h6 className="text-[0.6875rem] font-bold text-[#767676] uppercase tracking-wide mb-3">
                                Order Amount:
                            </h6>
                            <p className="text-[0.9375rem] font-bold">{orderItem?.total} VND</p>
                        </div>
                    </div>
                </div>
                <div className="p-8">
                    <h6 className="mb-7 text-xl font-semibold">Order Items {orderItem?.detail.length}</h6>
                    <hr />
                    <ul className="flex flex-col">
                        {orderItem?.detail.map((item, index) => {
                            return (
                                <li key={index} className="block border-b">
                                    <div className="flex items-center pt-4 pb-6">
                                        <div className="sm:w-1/3 md:w-1/4 lg:w-1/6">
                                            <a href="">
                                                <img src={item.product.image} alt="" className="w-[84px] h-[99px]" />
                                            </a>
                                        </div>
                                        <div className="w-auto">
                                            <p className="mb-4 text-[.9375rem] font-semibold">
                                                <a href="">
                                                    {item.product.name} x {item.size.quantity}
                                                </a>
                                                <br />
                                                <span className="text-[#767676]">{item.product.price}</span>
                                            </p>
                                            <div className="text-[.9375rem] text-[#767676]">
                                                Size: {item.size.name}
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className="border mb-5 p-8">
                <h6 className="mb-5 text-xl font-semibold">Order Total</h6>
                <ul className="flex flex-col">
                    <li className="flex border-b py-5 pt-0">
                        <span>Subtotal</span>
                        <span className="ml-auto">{orderItem?.total} VND</span>
                    </li>
                    <li className="flex border-b py-5">
                        <span>Tax</span>
                        <span className="ml-auto">{tax} VND</span>
                    </li>
                    <li className="flex text-[1.25rem] font-semibold py-5 pb-0">
                        <span>Total</span>
                        <span className="ml-auto">
                            {orderItem?.total} {+tax} VND
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default OrderDetail;
