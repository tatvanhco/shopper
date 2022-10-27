import React from 'react';
import { FiHelpCircle } from 'react-icons/fi';

export default function AddPaymentMethod() {
    return (
        <div>
            <h6 className="mb-7 text-xl font-semibold">Add Debit / Credit Card</h6>
            <form action="">
                <div className="grid md:auto-rows-auto md:grid-cols-2 grid-cols-1 text-[15px]">
                    <div className="md:mr-4 mb-6">
                        <label htmlFor="cardNumber" className="inline-block text-base mb-2">
                            Card Number *
                        </label>
                        <input
                            type="text"
                            id="cardNumber"
                            placeholder="Card Number"
                            required
                            className="text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:mr-4 mb-6">
                        <label htmlFor="nameOnCard" className="inline-block text-base mb-2">
                            Name on Card *
                        </label>
                        <input
                            type="text"
                            id="nameOnCard"
                            placeholder="Name on Card"
                            required
                            className="text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:mr-4 mb-6 col-span-2">
                        <label className="inline-block text-base mb-2">Expiry Date *</label>
                        <div className="grid grid-cols-3 gap-8">
                            <div>
                                <select
                                    name=""
                                    id="paymentMonth"
                                    required
                                    className="block border border-[#e5e5e5] w-full p-3 outline-none focus:border-black"
                                >
                                    <option selected>Month *</option>
                                    <option>Jan</option>
                                    <option>Feb</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                </select>
                            </div>
                            <div>
                                <select
                                    name=""
                                    id="paymentYear"
                                    required
                                    className="block border border-[#e5e5e5] w-full p-3 outline-none focus:border-black"
                                >
                                    <option selected>Year*</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                </select>
                            </div>
                            <div className="flex border border-[#e5e5e5] focus-within:border-black">
                                <input
                                    type="text"
                                    id="paymentCardCVV"
                                    placeholder="CVV *"
                                    aria-label="CVV *"
                                    required
                                    className="text-[15px] py-3 px-5  focus:outline-none  w-full"
                                />
                                <div className="py-3 px-5 flex items-center group">
                                    <FiHelpCircle className="text-[#767676] "></FiHelpCircle>
                                    <span className="absolute hidden group-hover:flex transition-opacity bg-[#f5f5f5] px-3 py-3 text-[0.7rem] -right-1 -translate-x-28">
                                        The CVV Number on your credit card or debit card <br /> is a 3 digit number on
                                        VISA, MasterCard and <br /> Discover branded credit and debit cards.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 flex gap-3 mb-3">
                        <input
                            type="checkbox"
                            id="defaultPaymentMethod"
                            className="peer relative appearance-none w-[20px] h-[20px]
                                        border rounded-none focus:outline-none 
                                        bg-[#e5e5e5]
                                        checked:bg-black
                                        after: content-['']
                                        after: left-0
                                        after: top-0
                                        after: bg-no-repeat
                                        after: bg-center
                                        after: bg-[length:16px]
                                        after: bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAoUlEQVRIie3Tqw0CQRQF0A0JBr8bEvrA0gECjcJBUFSAoAZaoAEqYQVNYDAYPgfBJIyDTWYQZK+/500m7xVFmzZNggrznHjtlUVqvMQh4Ef0/xTHoAEe/3mN6lNhiBPWyV8eSmNcQ2mVFI/KU9zxwCwpHiHLANwwSYpH2CZAF4yyrCK2ATwH9LttaTCgg5130h5RGNLFPgseDemhzIK3+UmeJtBAj7yn5iIAAAAASUVORK5CYII=')]
                                        "
                        />
                        <label
                            htmlFor="defaultPaymentMethod"
                            className="text-[#767676] peer-checked:text-[#1f1f1f] cursor-pointer"
                        >
                            Default payment method
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-5 text-white text-sm font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-4 px-8 tracking-wide"
                >
                    Add Card
                </button>
            </form>
        </div>
    );
}
