import { BodyContainer } from 'components/container';
import Features from 'components/Features';
import { LinkSite } from 'components/layouts/breadcrumb/BreadCrumb';
import { useEffect, useState } from 'react';
import { ContentCheckOut } from './contentCheckout';
import { SubCheckOut } from './subCheckout';
import * as cartServices from 'services/cartServices';

export const CheckOut = () => {
    const [value, setValue] = useState('25000');
    const [checkout, setCheckout] = useState<cartServices.orderItems[]>();
    useEffect(() => {
        cartServices.getCart().then((data) => {
            setCheckout(data);
        });
    }, []);
    const cartIds: number[] = [];
    checkout?.forEach((e) => {
        cartIds.push(e.cartId);
    });

    return (
        <div className="">
            <div className="">
                <BodyContainer>
                    <LinkSite locate="checkout" />
                    <div className="">
                        <div className="text-center my-14">
                            <h3 className="text-3xl font-semibold tracking-wide mb-3">Check Out</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 sm:mx-10">
                            {checkout ? <ContentCheckOut data={checkout} /> : null}
                            {checkout ? <SubCheckOut data={checkout} cartIds={cartIds}/> : null}
                        </div>
                    </div>
                </BodyContainer>
            </div>
            <div className="bg-gray-100 mt-[20%]">
                <BodyContainer>
                    <Features />
                </BodyContainer>
            </div>
        </div>
    );
};
