import { BodyContainer } from 'components/container';
import { LinkSite } from 'components/layouts/breadcrumb/BreadCrumb';
import { ContentCart } from './contentCart';
import { TotalCart } from './totalCart';

function ShoppingCart() {
    return (
        <div className="relative">
            <BodyContainer>
                <LinkSite locate="cart" />
                <div className="">
                    <div className="flex justify-center text-center my-14">
                        <h3 className="text-3xl font-semibold tracking-wide">Shopping Cart</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-14 sm:mx-10">
                        <ContentCart />
                        <div className="col-span-1">
                            <TotalCart />
                        </div>
                    </div>
                </div>
            </BodyContainer>
        </div>
    );
}

export default ShoppingCart;
