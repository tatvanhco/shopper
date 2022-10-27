import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit2, FiX, FiPlus } from 'react-icons/fi';

function PaymentMethods() {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {/* Payment method Card */}
            <div className="flex flex-col relative bg-[#f5f5f5]">
                <div className="p-7">
                    {/* Heading */}
                    <h6 className="mb-6 text-xl font-semibold">Debit / Credit Card</h6>
                    {/* Text */}
                    <p className=" mb-5">
                        <strong>Card Number: </strong>
                        <br />
                        <span className="text-[#767676]">4242 ∙∙∙∙ ∙∙∙∙ 7856 (Mastercard)</span>
                    </p>
                    {/* Text */}
                    <p className="mb-5">
                        <strong>Expiry Date: </strong>
                        <br />
                        <span className="text-[#767676]">Feb 2022</span>
                    </p>
                    {/* Text */}
                    <p className="mb-0">
                        <strong>Name on Card: </strong>
                        <br />
                        <span className="text-[#767676]">Daniel Robinson</span>
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
            <div className="md:col-span-2">
                <Link
                    to={'/account-payment-edit'}
                    className="flex justify-center items-center border gap-2 p-4 font-semibold hover:border-[#1f1f1f]"
                >
                    Add Payment Method
                    <FiPlus />
                </Link>
            </div>
        </div>
    );
}

export default PaymentMethods;
