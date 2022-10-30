import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import '../../../asset/globalStyle/globalStyle.scss';
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiMenu } from 'react-icons/fi';

function Header() {
    let [openMain, setOpenMain] = useState(false);

    return (
        <div className="header border-b">
            {/* nav */}
            <div className="p-6 bg-white md:flex md:items-center justify-between lg:px-[2rem] xl:px-[20%] px-10 ">
                <div className="flex justify-between">
                    <Link to="/home">
                        <span className="text-3xl font-bold">Shopper.</span>
                    </Link>
                    <span className="text-2xl cursor-pointer md:hidden block mt-2">
                        <FiMenu />
                    </span>
                </div>
                <ul
                    className={`flex gap-4 items-center justify-between z-[1] md:z-auto md:static absolute left-0 md:w-auto md:py-0 py-3 md:px-0 px-12 ${
                        openMain ? 'pt-4 top-96' : 'top-[-400px]'
                    }`}
                >
                    <li>
                        <FiSearch className="cursor-pointer hover:text-secondColor" />
                    </li>
                    <li>
                        <Link to={'/order/account-orders'}>
                            <FiUser className="cursor-pointer hover:text-secondColor" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/order/account-wishlist'}>
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
