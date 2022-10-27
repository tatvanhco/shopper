import { SidebarItems } from 'data/SidebarItems';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

function SideBar() {
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
                            <span className="text-[#1f1f1f]">{item.name}</span>
                            <FiChevronRight className="ml-auto" />
                        </NavLink>
                    );
                })}
            </div>
        </nav>
    );
}

export default SideBar;
