import Features from 'components/Features';
import BreadCrumb from 'components/layouts/breadcrumb/BreadCrumb';
import React from 'react';

function ShoppingCart() {
    return (
        <section className="pb-20 lg:px-[2rem] xl:px-[20%]">
            <BreadCrumb />
            <div className="">
                <div className="flex justify-center text-center my-14">
                    <h3 className="text-3xl font-semibold tracking-wide">Shopping Cart</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-14 sm:mx-10">
                    <div className="col-span-2 md:px-0 px-8 md:mr-16">2</div>
                    <div className="col-span-1">1</div>
                </div>
                {/* row */}
                <div>
                    {/* col */}
                    <div></div>
                    {/* col */}
                    <div></div>
                </div>
            </div>
            <Features />
        </section>
    );
}

export default ShoppingCart;
