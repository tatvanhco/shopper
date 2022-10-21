import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import SideBar from 'components/sidebar/siderbar';

function Orders() {
    return (
        <section className="pt-7 pb-12 bg-yellow-200">
            <div className="bg-red-200 mx-10">
                <div className="flex justify-center text-center">
                    <h3 className="mb-10 text-3xl font-semibold tracking-wide">My Account</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
                    <div className="col-span-1 mr-16">
                        <SideBar />
                    </div>
                    <Outlet />
                </div>
            </div>
        </section>
    );
}

export default Orders;
