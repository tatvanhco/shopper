import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from '../../data/MenuItems';
import Modal from 'components/modal/modal';

import '../../asset/globalStyle/globalStyle.scss';
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
import BasicMenu from 'components/menu/basicMenu';

function Header() {
    let [open, setOpen] = useState(false);
    let [openMain, setOpenMain] = useState(false);

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="header">
            {/* Header top */}
            <div className="md:flex w-full top-0 md:items-center md:justify-between md:py-1 py-2 md:px-12 px-20 bg-f5f5f5">
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
                    className={`md:flex md:items-center justify-between w-full z-[1] md:py-0 py-2 md:px-0 px-12 md:pl-0 absolute md:static left-0 ${
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
                        <BasicMenu />
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
            <div className="p-6 bg-white md:flex md:items-center justify-between md:px-12 px-20">
                <div className="flex justify-between">
                    <Link to={'/'}>
                        <span className="text-3xl font-bold">Shopper.</span>
                    </Link>
                    <span onClick={() => setOpenMain(!openMain)} className="text-2xl cursor-pointer md:hidden block">
                        <FiMenu />
                    </span>
                </div>
                <ul
                    className={`md:flex md:items-center md:justify-between z-[1] md:z-auto md:static absolute 
                    w-full left-0 md:w-auto md:py-0 md:pl-0 px-12 md:px-0 gap-7
                    md:top-[-400px] ${openMain ? 'top-auto pb-8 bg-white' : 'top-[-400px]'} `}
                >
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} className="my-6 md:my-0">
                                <Link to={item.url} className="text-base font-semibold hover:text-secondColor">
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <ul
                    className={`flex gap-4 items-center justify-between z-[1] md:z-auto md:static absolute left-0 md:w-auto md:py-0 py-3 md:px-0 px-12 ${
                        openMain ? 'pt-4 top-96' : 'top-[-400px]'
                    }`}
                >
                    <li>
                        <FiSearch
                            className="cursor-pointer hover:text-secondColor"
                            onClick={() => setShowModal(true)}
                        />
                    </li>
                    <li>
                        <Link to={'/account-orders'}>
                            <FiUser className="cursor-pointer hover:text-secondColor" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/account-wishlist'}>
                            <FiHeart className="cursor-pointer hover:text-secondColor" />
                        </Link>
                    </li>
                    <li className="relative">
                        <FiShoppingCart className="cursor-pointer hover:text-secondColor" />
                        <div className="w-5 h-5 rounded-full border border-white border-1 bg-secondColor flex items-center justify-center absolute -top-3 -right-3">
                            <p className="text-xs text-white font-medium">2</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
