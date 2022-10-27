import React from 'react';
import { FiEdit2, FiX, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Address() {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {/* Address Card */}
            <div className="flex flex-col relative bg-[#f5f5f5]">
                <div className="p-7">
                    {/* Heading */}
                    <h6 className="mb-6 text-xl font-semibold">Shipping Address</h6>
                    {/* Text */}
                    <p className="text-[#767676]">
                        Paap pspa
                        <br />
                        123 Ng
                        <br />
                        Phuog 9
                        <br />
                        Quận 1
                        <br />
                        TP Hồ Chí Minh
                    </p>
                    {/* Action */}
                    <div className="absolute top-5 right-5 flex gap-2">
                        <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center cursor-pointer hover:text-white hover:bg-secondColor">
                            <FiEdit2 />
                        </div>
                        <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center cursor-pointer hover:text-white hover:bg-secondColor">
                            <FiX />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col border">2 </div>
            <div className="md:col-span-2">
                <Link
                    to={'/account-address-edit'}
                    className="flex justify-center items-center border gap-2 p-4 font-semibold hover:border-[#1f1f1f]"
                >
                    Add Address
                    <FiPlus />
                </Link>
            </div>
        </div>
    );
}

export default Address;
