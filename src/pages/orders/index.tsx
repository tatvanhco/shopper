import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from 'components/sidebar/siderbar';

function Orders() {
    return (
        <section className="pb-20">
            <div className="border-t pt-5">
                <span className="mx-10">breadcrumb..</span>
            </div>
            <div className="">
                <div className="flex justify-center text-center my-14">
                    <h3 className="text-3xl font-semibold tracking-wide">My Account</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-14 sm:mx-10">
                    <div className="md:col-span-1 col-span-2 md:mr-16">
                        <SideBar />
                    </div>
                    <div className="col-span-2 md:mx-0 mx-10">
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Orders;
