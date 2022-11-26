import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import '../../../asset/globalStyle/globalStyle.scss';
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiMenu } from 'react-icons/fi';
import { ModalSearch } from '../modal/modalSearch';
import { Box, SwipeableDrawer } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import * as cartServices from 'services/cartServices';
import { useAppSelector } from 'app/hooks';

type Anchor = 'top' | 'bottom' | 'right';

function Header({ totalCart }: any) {
    const count = useAppSelector((state) => state.cart.total);
    // console.log('hahah', count);

    const [openMain, setOpenMain] = useState(false);
    const [state, setState] = React.useState({
        right: false,
    });

    const [sumcart, setSumCart] = useState('');

    const test: any = sumcart?.length;
    useEffect(() => {
        cartServices.getCart().then((data) => {
            setSumCart(data);
        });
    }, [test]);

    const useAuth = () => {
        const checkLogin = localStorage.getItem('user_token');
        if (checkLogin) {
            return true;
        } else {
            return false;
        }
    };
    const user = useAuth();
    // console.log('hi');

    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }} role="presentation">
            <div className=" ">
                <div className="bg-white w-[450px] p-7">
                    <div className="flex px-4 items-center mb-6">
                        <strong className="mx-auto text-lg">Tìm kiếm</strong>
                        <ClearIcon
                            onClick={toggleDrawer(anchor, false)}
                            className="hover:cursor-pointer hover:opacity-50"
                        />
                    </div>
                    <ModalSearch />
                </div>
            </div>
        </Box>
    );

    return (
        <div className="header border-b">
            <div className="p-6 bg-white md:flex md:items-center justify-between lg:px-[2rem] xl:px-[10%] px-10">
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
                    {user && (
                        <>
                            <li>
                                <Link to={'/order/account-orders'}>
                                    <FiUser className="cursor-pointer hover:text-secondColor" />
                                </Link>
                            </li>
                            <li className="relative">
                                <Link to="/home/shopping-cart">
                                    <Badge badgeContent={count} color="error" className="w-5 h-5">
                                        <FiShoppingCart className="cursor-pointer hover:text-secondColor" />
                                    </Badge>
                                </Link>
                            </li>
                        </>
                    )}
                    {!user && (
                        <>
                            <li>
                                <Link to={'/login'}>
                                    <FiUser className="cursor-pointer hover:text-secondColor" />
                                </Link>
                            </li>
                            <li className="relative">
                                <Link to="/login">
                                    <Badge color="error" className="w-5 h-5">
                                        <FiShoppingCart className="cursor-pointer hover:text-secondColor" />
                                    </Badge>
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Header;
