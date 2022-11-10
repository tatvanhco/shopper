import React from 'react';
import { FiArrowRight, FiCircle } from 'react-icons/fi';

function ChoosePaymentMethod() {
    return (
        <div className="">
            <form action="" method="post">
                {/* payment Card */}
                <div className="border mb-5">
                    <div className="p-5">
                        <div className="flex items-center">
                            <input type="radio" name="payment" id="checkoutPaymentCOD" />
                            <label htmlFor="checkoutPaymentCOD" className="flex justify-between w-full ml-3">
                                Thanh toán khi nhận hàng
                                <p>img </p>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="border mb-5">
                    <div className="p-5 ">
                        <div className="flex items-center relative">
                            <input type="radio" name="payment" id="checkoutPaymentCard" className=" peer" />
                            <label htmlFor="checkoutPaymentCard" className="flex justify-between w-full ml-3">
                                Thẻ tín dụng / Ghi nợ
                                <p>img </p>
                            </label>
                            {/* <div
                                className="flex absolute w-4 h-4 rounded-full bg-[#e5e5e5] peer-checked:scale-100 
                                transition delay-100
                                "
                            > */}
                            {/*                             
                                className="
                                after: bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E')]
                                " */}
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="group flex items-center mt-5 text-white text-sm font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-4 px-8 tracking-wide"
                >
                    <a className="text-base font-semibold flex items-center ">Continue</a>
                    <FiArrowRight className="duration-200 ease-in-out ml-3 group-hover:translate-x-1" size={'16'} />
                </button>
            </form>
        </div>
    );
}

export default ChoosePaymentMethod;
