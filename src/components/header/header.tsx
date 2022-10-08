import clsx from 'clsx';
import { Fragment, useState } from 'react';
import styles from './header.module.scss';
import '../../asset/globalStyle/globalStyle.scss';
import { MenuItems } from './MenuItems';

import {
    FiFacebook,
    FiInstagram,
    FiYoutube,
    FiTwitter,
    FiTruck,
    FiSearch,
    FiUser,
    FiHeart,
    FiShoppingCart,
    FiMenu,
} from 'react-icons/fi';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

function Header() {
    let [open, setOpen] = useState(false);
    let [openMain, setOpenMain] = useState(false);

    return (
        <div className="header">
            {/* Header top */}
            <div className="md:flex w-full top-0 md:items-center md:justify-between py-1 px-12 bg-f5f5f5">
                <div className="flex flex-shrink-0 justify-between items-center md:mr-8">
                    <div className="flex">
                        <FiTruck className="text-sm mr-3" />
                        <p className="text-xs font-normal">FREE SHIPPING WORLDWIDE</p>
                    </div>
                    <span onClick={() => setOpen(!open)} className="text-2xl cursor-pointer md:hidden block">
                        <FiMenu />
                    </span>
                </div>
                <div
                    className={`md:flex md:items-center justify-between w-full z-[1] md:py-0 py-2 px-12 md:pl-0 absolute md:static left-0 ${
                        open ? 'top-auto bg-gray-100' : 'top-[-490px]'
                    }`}
                >
                    <ul className="md:flex items-center gap-8">
                        <li className="md:my-0 pb-2 pt-2 text-sm font-medium cursor-pointer items-center flex gap-2">
                            <img
                                className="inline"
                                src="https://yevgenysim-turkey.github.io/shopper/assets/img/flags/usa.svg"
                            ></img>
                            <p>United States</p>
                        </li>
                        <li className="md:my-0 pb-2 pt-2 text-sm font-medium cursor-pointer">USD</li>
                        <li className="md:my-0 pb-2 pt-2 text-sm font-medium cursor-pointer">English</li>
                    </ul>
                    <div className="md:flex ml-auto">
                        <ul className="md:flex items-center mr-10 gap-8">
                            <li className="md:my-0 pb-2 pt-2 text-sm font-medium cursor-pointer">Shipping</li>
                            <li className="md:my-0 pb-2 pt-2 text-sm cursor-pointer">FAQ</li>
                            <li className="md:my-0 pb-2 pt-2 text-sm cursor-pointer">Contact</li>
                        </ul>
                        <ul className="flex gap-3">
                            <li className="md:my-0 pb-2 pt-2 text-base cursor-pointer">
                                <FiFacebook />
                            </li>
                            <li className="md:my-0 pb-2 pt-2 text-base cursor-pointer">
                                <FiTwitter />
                            </li>
                            <li className="md:my-0 pb-2 pt-2 text-base cursor-pointer">
                                <FiInstagram />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* nav */}
            <div className="p-6 bg-white md:flex md:items-center justify-between px-12">
                <div className="flex justify-between">
                    <span className="text-3xl font-bold">Shopper.</span>
                    <span onClick={() => setOpenMain(!openMain)} className="text-2xl cursor-pointer md:hidden block">
                        <FiMenu />
                    </span>
                </div>
                <ul
                    className={`md:flex md:items-center md:justify-between z-[1] md:z-auto md:static absolute 
                    w-full left-0 md:w-auto md:py-0 md:pl-0 px-12 md:px-0 gap-7
                    md:top-[-400px] ${openMain ? 'top-auto pb-8 bg-white' : 'top-[-400px]'} `}
                >
                    <li className="my-6 md:my-0">
                        <a href="" className="text-base font-semibold hover:text-secondColor">
                            Home
                        </a>
                    </li>
                    <li className="my-6 md:my-0">
                        <a href="" className="text-base font-semibold hover:text-secondColor">
                            Catalog
                        </a>
                    </li>
                    <li className="my-6 md:my-0">
                        <a href="" className="text-base font-semibold hover:text-secondColor">
                            Shop
                        </a>
                    </li>
                    <li className="first:my-6 md:my-0">
                        <a href="" className="text-base font-semibold hover:text-secondColor">
                            Pages
                        </a>
                    </li>
                    <li className="my-6 md:my-0">
                        <a href="" className="text-base font-semibold hover:text-secondColor">
                            Blog
                        </a>
                    </li>
                    <li className="my-6 md:my-0">
                        <a href="" className="text-base font-semibold hover:text-secondColor">
                            Docs
                        </a>
                    </li>
                </ul>
                <ul
                    className={`flex gap-4 items-center justify-between z-[1] md:z-auto md:static absolute left-0 md:w-auto md:py-0 py-3 px-12 ${
                        openMain ? 'pt-4 top-96' : 'top-[-400px]'
                    }`}
                >
                    <li>
                        <FiSearch className="cursor-pointer hover:text-secondColor" />
                    </li>
                    <li>
                        <FiUser className="cursor-pointer hover:text-secondColor" />
                    </li>
                    <li>
                        <FiHeart className="cursor-pointer hover:text-secondColor" />
                    </li>
                    <li className="relative">
                        <FiShoppingCart className="cursor-pointer hover:text-secondColor" />
                        <div className="w-5 h-5 rounded-full border border-white border-1 bg-secondColor flex items-center justify-center absolute -top-3 -right-3">
                            <p className="text-xs text-white font-medium">2</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="flex items-center justify-center bg-neutral-800 bg-[url('https://yevgenysim-turkey.github.io/shopper/assets/img/patterns/pattern-1.svg')] py-3">
                <span className="text-white uppercase text-xs font-semibold tracking-wider">
                    ⚡️ Happy Holiday Deals on Everything ⚡️
                </span>
            </div>

            {/* <div className={clsx(styles.headerBottom, 'd-flex')}>
                <span className={styles.brandName}>Shopper.</span>
                <Navigation />
                <MobileNavigation />
            </div> */}
        </div>
    );
}

export default Header;
