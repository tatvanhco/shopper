import { FiHeart, FiShoppingCart } from 'react-icons/fi';

export const AddCartBtn = () => {
    return (
        <>
            <div className="mb-8 gap-x-5 flex flex-wrap">
                <div>
                    <select name="" id="size" className="block border border-[#e5e5e5] w-[6rem] p-3 outline-none">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
                <div className="">
                    <button
                        type="submit"
                        className="flex items-center text-white text-[15px] font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-3 px-10 tracking-wide"
                    >
                        Add to Cart
                        <FiShoppingCart size={16} className="ml-2" />
                    </button>
                </div>
                <div>
                    <button
                        className="flex items-center text-[15px] font-semibold border border-[#1f1f1f] py-3 px-6 tracking-wide
                                hover:text-white hover:bg-[#1f1f1f]"
                    >
                        Wishlist
                        <FiHeart size={16} className="ml-2" />
                    </button>
                </div>
            </div>
        </>
    );
};
