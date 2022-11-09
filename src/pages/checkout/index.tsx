import { BodyContainer } from 'components/container';
import Features from 'components/Features';
import { LinkSite } from 'components/layouts/breadcrumb/BreadCrumb';
import { Link } from 'react-router-dom';
import { ContentCheckOut } from './contentCheckout';
import { SubCheckOut } from './subCheckout';

export const CheckOut = () => {
    return (
        <div className="">
            <div className="">
                <BodyContainer>
                    <LinkSite locate="checkout" />
                    <div className="">
                        <div className="text-center my-14">
                            <h3 className="text-3xl font-semibold tracking-wide mb-3">Shopping Cart</h3>
                            <p>
                                Bạn đã có tài khoản chưa?
                                <Link to="/login" className="font-semibold">
                                    {' '}
                                    Nhấn và đây để đăng nhập
                                </Link>
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 sm:mx-10">
                            <ContentCheckOut />
                            <SubCheckOut />
                        </div>
                    </div>
                </BodyContainer>
            </div>
            <div className="bg-gray-100">
                <BodyContainer>
                    <Features />
                </BodyContainer>
            </div>
        </div>
    );
};
