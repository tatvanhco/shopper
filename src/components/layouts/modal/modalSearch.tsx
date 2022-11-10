import { ProductItems } from 'data/Productdb';
import { url } from 'inspector';
import React from 'react';
import { FiArrowRight, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const ModalSearch = () => {
    return (
        <>
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
                            className="block mb-6 text-[15px] py-3 pl-5 pr-[4rem] border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                        <button type="submit" className=" absolute top-0 right-0 py-4 px-5 text-sm font-medium">
                            <FiSearch className="w-[16px] h-[16px]" />
                        </button>
                    </div>
                </div>
            </form>

            <hr className="mb-6" />
            <p className="">Search Results:</p>
            <div className="grid grid-rows-5 grid-cols-1">
                {ProductItems.map((item, index) => {
                    return (
                        <div key={index} className="flex items-center mt-5 mb-2">
                            <div>
                                <img className="w-[5rem] h-[5rem] mr-3" src={item.img} alt="" />
                            </div>
                            <div className="mx-2">
                                <Link className="" to="/product">
                                    {item.name}
                                </Link>
                                <br />
                                <span className="">{item.price}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="group float-left p-3 mb-10">
                <Link to="/shop" className=" text-base font-semibold flex justify-center items-center">
                    Shop Now
                    <FiArrowRight className="text-black duration-300 ml-2 group-hover:ml-4" size={'16'} />
                </Link>
            </div>
        </>
    );
};
