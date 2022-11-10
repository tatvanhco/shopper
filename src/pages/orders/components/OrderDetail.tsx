import React from 'react';

function OrderDetail() {
    return (
        <div>
            {/* Order */}
            <div className="border mb-5">
                {/* Order body */}
                <div className="p-8 pb-0">
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
                            <p className="text-[0.9375rem] font-bold">136.000</p>
                        </div>
                    </div>
                </div>
                <div className="p-8">
                    <h6 className="mb-7 text-xl font-semibold">Order Items (2)</h6>
                    <hr />
                    {/* List product */}
                    <ul className="flex flex-col">
                        <li className="block border-b">
                            <div className="flex items-center pt-4 pb-6">
                                <div className="sm:w-1/3 md:w-1/4 lg:w-1/6">
                                    <a href="">
                                        <img
                                            src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-7.jpg"
                                            alt=""
                                            className="w-[84px] h-[99px]"
                                        />
                                    </a>
                                </div>
                                <div className="w-auto">
                                    {/* Title */}
                                    <p className="mb-4 text-[.9375rem] font-semibold">
                                        <a href="">Giày thể thao x 1</a>
                                        <br />
                                        <span className="text-[#767676]">40.000</span>
                                    </p>
                                    {/* Text */}
                                    <div className="text-[.9375rem] text-[#767676]">
                                        Size: M
                                        <br />
                                        Color: White Blue
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="block">
                            <div className="flex items-center pt-4 pb-6">
                                <div className="sm:w-1/3 md:w-1/4 lg:w-1/6">
                                    <a href="">
                                        <img
                                            src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-7.jpg"
                                            alt=""
                                            className="w-[84px] h-[99px]"
                                        />
                                    </a>
                                </div>
                                <div className="w-auto">
                                    {/* Title */}
                                    <p className="mb-4 text-[.9375rem] font-semibold">
                                        <a href="">Giày thể thao x 1</a>
                                        <br />
                                        <span className="text-[#767676]">40.000</span>
                                    </p>
                                    {/* Text */}
                                    <div className="text-[.9375rem] text-[#767676]">
                                        Size: M
                                        <br />
                                        Color: White Blue
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Total */}
            <div className="border mb-5 p-8">
                <h6 className="mb-5 text-xl font-semibold">Order Total</h6>
                <ul className="flex flex-col">
                    <li className="flex border-b py-5 pt-0">
                        <span>Subtotal</span>
                        <span className="ml-auto">128.000</span>
                    </li>
                    <li className="flex border-b py-5">
                        <span>Tax</span>
                        <span className="ml-auto">0</span>
                    </li>
                    <li className="flex border-b py-5">
                        <span>Shipping</span>
                        <span className="ml-auto">8.000</span>
                    </li>
                    <li className="flex text-[1.25rem] font-semibold py-5 pb-0">
                        <span>Total</span>
                        <span className="ml-auto">136.000</span>
                    </li>
                </ul>
            </div>
            {/* Details */}
            <div className="border flex flex-col">
                <div className="p-8">
                    <h6 className="mb-5 text-xl font-semibold">Billing & Shipping Details</h6>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                        <div className="">
                            <p className="mb-4 font-semibold">Billing Address:</p>
                            <p className="text-[#525252] md:mb-0 mb-7">
                                Nguyen,
                                <br />
                                123 Nguyen Hue,
                                <br />
                                P.Ben Nge,
                                <br />
                                Q1,
                                <br />
                                HCM
                                <br />
                                0937 678 910
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 font-semibold">Shipping Address:</p>
                            <p className="text-[#525252] md:mb-0 mb-7">
                                Nguyen,
                                <br />
                                123 Nguyen Hue,
                                <br />
                                P.Ben Nge,
                                <br />
                                Q1,
                                <br />
                                HCM
                                <br />
                                0937 678 910
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 font-semibold">Shipping Method:</p>
                            <p className="text-[#525252] mb-7">
                                Standart Shipping <br />
                                (5 - 7 days)
                            </p>

                            <p className="mb-4 font-semibold">Payment Method:</p>
                            <p className="text-[#525252] mb-0">Debit Mastercard</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
