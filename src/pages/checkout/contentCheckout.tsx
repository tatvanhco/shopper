import { useEffect, useState } from 'react';
// import { BillDetails } from './BillDetails';
// import { Payment } from './Payment';
// import { ShippDetail } from './ShippDetail';
import Scrollbars from 'react-custom-scrollbars-2';
import * as cartServices from 'services/cartServices';

interface ContentCheckOutProps {
    data: cartServices.orderItems[];
}

export const ContentCheckOut: React.FC<ContentCheckOutProps> = ({ data }) => {
    const format = (n: any, currency: any) => {
        return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + currency;
    };
    
    

    return (
        <div className="col-span-2 md:px-0 px-8 md:mr-16">
            <h2 className="text-2xl font-semibold mb-4">tổng số sản phẩm ({data.length})</h2>
            <Scrollbars style={{ width: '100%', height: 300, padding: 0 }}>
                {data.map((item, index) => {
                    return (
                        <div key={index} className="flex items-center py-5 pr-5 border-y border-gray-200">
                            <div className="mr-5">
                                <img
                                    className="object-cover object-center w-[7rem] h-[7rem]"
                                    src={item.product.avt}
                                    alt=""
                                />
                            </div>
                            <div className="w-full">
                                <div className="mb-3 flex justify-between">
                                    <p className="font-semibold">{item.product.name}</p>
                                    <p className="mr-4">{format(item.product.price, ' VND')}</p>
                                </div>
                                <p>số lượng: {item.quantity}</p>
                            </div>
                        </div>
                    );
                })}
            </Scrollbars>
        </div>
    );
};
