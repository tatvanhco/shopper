import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from 'components/layouts/sidebar/siderbar';
import ChoosePaymentMethod from './components/ChoosePaymentMethod';
import { LinkSite } from 'components/layouts/breadcrumb/BreadCrumb';

function Orders() {
    return (
        <section className="pb-20 lg:px-[2rem] xl:px-[20%]">
            <LinkSite locate="user"/>
            <div className="">
                <div className="flex justify-center text-center my-14">
                    <h3 className="text-3xl font-semibold tracking-wide">My Account</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-14 sm:mx-10">
                    <div className="md:col-span-1 col-span-2 md:mr-16">
                        <SideBar />
                    </div>
                    <div className="col-span-2 md:px-0 px-8">
                        <Outlet />

                        {/* <ChoosePaymentMethod /> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Orders;
