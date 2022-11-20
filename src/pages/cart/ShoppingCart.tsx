import { BodyContainer } from 'components/container';
import { LinkSite } from 'components/layouts/breadcrumb/BreadCrumb';
import { ContentCart } from './contentCart';
import { TotalCart } from './totalCart';
import { useEffect, useState } from 'react';
import * as cartServices from 'services/cartServices';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

function ShoppingCart() {
    const [carts, setCarts] = useState<cartServices.orderItems[]>();
    useEffect(() => {
        cartServices.getCart().then((data) => {
            setCarts(data);
        });
    }, []);
    return (
        <div className="relative">
            <BodyContainer>
                <LinkSite locate="cart" />
                <div className="">
                    <div className="flex justify-center text-center my-14">
                        <h3 className="text-3xl font-semibold tracking-wide">Shopping Cart</h3>
                    </div>
                    {carts && (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-14 sm:mx-10">
                                <ContentCart data={carts} />
                                <div className="col-span-1">
                                    <TotalCart data={carts} />;
                                </div>
                            </div>
                        </>
                    )}
                    {!carts && (
                        <div className="">
                            <div className="text-center mt-[20%] text-4xl font-semibold">không có sản phẩm nào </div>
                            <Link to="/shop" className=" text-base font-semibold flex justify-center items-center mt-5">
                                <FiArrowLeft className="text-black duration-300 mr-2 group-hover:mr-4" size={'20'} />
                                <p className="text-xl">Shop Now</p>
                            </Link>
                        </div>
                    )}
                </div>
            </BodyContainer>
        </div>
    );
}

export default ShoppingCart;
