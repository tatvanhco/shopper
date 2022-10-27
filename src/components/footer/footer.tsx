import '../../asset/globalStyle/globalStyle.scss';
import '../../asset/globalStyle/_grid.scss';
import { FiFacebook, FiInstagram, FiYoutube, FiTwitter } from 'react-icons/fi';

function footer() {
    return (
        <footer className="bg-cover bg-stone-900 bg-[url('https://yevgenysim-turkey.github.io/shopper/assets/img/patterns/pattern-2.svg')] text-white text-sm md:px-12 px-4 pt-16">
            <div className="flex flex-col mb-12 items-center">
                <h1 className="text-2xl font-bold mb-6 tracking-wide">Want style Ideas and Treats? </h1>
                <div className="flex gap-5">
                    <input
                        type="text"
                        placeholder="Enter Email *"
                        className=" text-white text-base border-none outline-none pl-8 py-4 bg-thirdColor md:w-[24rem] sm:w-[24rem] w-[18rem]"
                    />
                    <button className="bg-Gray500 text-white text-sm font-semibold px-8 py-4 tracking-wider">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6 sm:px-6 py:20">
                <div className="col-span-full lg:col-auto md:col-auto">
                    <h1 className="mb-3 text-3xl font-bold">Shopper.</h1>
                    <ul className="flex gap-3 text-footerColor">
                        <li className="md:my-0 pb-2 pt-2 text-base cursor-pointer">
                            <FiFacebook className="hover:text-footerColor2" />
                        </li>
                        <li className="md:my-0 pb-2 pt-2 text-base cursor-pointer">
                            <FiYoutube />
                        </li>
                        <li className="md:my-0 pb-2 pt-2 text-base cursor-pointer">
                            <FiTwitter />
                        </li>
                        <li className="md:my-0 pb-2 pt-2 text-base cursor-pointer">
                            <FiInstagram />
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="mb-3 font-semibold uppercase">Support</h1>
                    <ul className="text-footerColor">
                        <li>
                            <a href="" className="hover:text-[#a6a6a6]">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:hover:text-[#a6a6a6]">
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:hover:text-[#a6a6a6]">
                                Size Guide
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:text-[#a6a6a6]">
                                Shipping & Returns
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="mb-3 font-semibold uppercase">Shop</h1>
                    <ul className="text-footerColor">
                        <li>
                            <a href="" className="hover:text-[#a6a6a6]">
                                Men's Shopping
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:text-[#a6a6a6]">
                                Women's Shopping
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:text-[#a6a6a6]">
                                Kid's Shopping
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:text-[#a6a6a6]">
                                Discounts
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="mb-3 font-semibold uppercase">Company</h1>
                    <ul className="text-footerColor">
                        <li>
                            <a href="" className="hover:text-[#a6a6a6]">
                                Our Story
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:text-[#a6a6a6]">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:text-[#a6a6a6]">
                                Terms & Conditions
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:text-[#a6a6a6]">
                                Privacy & Cookie policy
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="mb-3 font-semibold uppercase">CONTACT</h1>
                    <ul className="text-footerColor">
                        <li>
                            <a href="" className="hover:text-[#a6a6a6]">
                                1-202-555-0105
                            </a>
                        </li>
                        <li>
                            <a href="" className="hover:text-[#a6a6a6]">
                                help@shopper.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="border-t border-thirdColor mt-12 pb-4" />
            <div className="flex items-center justify-center pb-4 text-sm text-center">
                <p>@shopper.com</p>
            </div>
        </footer>
    );
}

export default footer;
