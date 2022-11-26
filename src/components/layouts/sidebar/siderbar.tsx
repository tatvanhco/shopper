import { SidebarItems } from 'data/SidebarItems';
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import clsx from 'clsx';

function SideBar() {
    const useAuth = () => {
        const checkLogin = localStorage.getItem('user_token');
        if (checkLogin) {
            return true;
        } else {
            return false;
        }
    };
    const location = useLocation();
    const navigate = useNavigate();
    const user = useAuth();

    const handleLogout = () => {
        localStorage.removeItem('user_token');
        navigate('/login');
    };
    return (
        <nav className="mb-10 md:px-2 px-10">
            <div className="flex flex-col">
                {SidebarItems.map((item, index) => {
                    return (
                        <NavLink
                            key={index}
                            to={item.url}
                            className="flex items-center border border-[#e5e5e5] border-x-0 py-5"
                        >
                            <p
                                className={clsx(
                                    location.pathname === `${item.url}` ? 'text-[#000]' : 'text-[#7c7c7c]',
                                    'font-bold',
                                )}
                            >
                                {item.name}
                            </p>
                            <FiChevronRight className="ml-auto" />
                        </NavLink>
                    );
                })}
                <NavLink
                    to="/login"
                    onClick={handleLogout}
                    className="flex items-center border border-[#e5e5e5] border-x-0 py-5"
                >
                    <span className="font-bold text-[#7c7c7c]">Đăng xuất</span>
                    <FiChevronRight className="ml-auto" />
                </NavLink>
            </div>
        </nav>
    );
}

export default SideBar;
