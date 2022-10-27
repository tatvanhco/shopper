import React from 'react';
import { FiSearch } from 'react-icons/fi';

function Modal() {
    //return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="bg-white w-[450px] p-7">
                <div className="flex px-4 items-center mb-6">
                    <strong className="mx-auto text-xl">Search Products</strong>
                    <FiSearch className="" />
                </div>
                <hr className="mb-6" />
                <form action="">
                    <div className="grid grid-cols-1 grid-rows-2 text-base">
                        <div>
                            <label htmlFor="modalSearchCategories" className="hidden">
                                Category:
                            </label>
                            <select
                                name=""
                                id="modalSearchCategories"
                                className="w-full py-3 px-5 border border-[#e5e5e5] "
                            >
                                <option selected value="">
                                    All Categories
                                </option>
                                <option value="">Women</option>
                                <option value="">Men</option>
                                <option value="">Kids</option>
                            </select>
                        </div>
                        <div className="flex items-center relative">
                            <input
                                type="search"
                                placeholder="Search"
                                className="block mb-6 text-[15px] py-3 px-5 w-full border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                            />
                            <button type="submit" className=" absolute top-0 right-0 py-4 px-5 text-sm font-medium">
                                <FiSearch className="w-[16px] h-[16px] " />
                            </button>
                        </div>
                    </div>
                </form>

                <hr className="mb-6" />
                {/* Body Result */}
                <div className="grid grid-rows-5 grid-cols-1">
                    <p className="">Search Results:</p>
                    <div className="">
                        <div>image</div>
                        <div>
                            <p>
                                <a href="">name</a>
                                <br />
                                <span>price</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
