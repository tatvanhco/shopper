import { BodyContainer } from 'components/container';
import Features from 'components/Features';
import { LinkSite } from 'components/layouts/breadcrumb/BreadCrumb';
import { NavDesc } from './components/NavDesc';
import { ProductImg } from './components/productImg';
import { ReviewComment } from './components/reviewComment';
import { Suggestion } from './components/suggestion';

export const Product = () => {
    return (
        <div className="mt-5">
            <BodyContainer>
                <LinkSite locate="shop" />
                <ProductImg />
                <NavDesc />
                <Suggestion />
                <ReviewComment />
            </BodyContainer>
            <div className="bg-gray-100">
                <BodyContainer>
                    <Features />
                </BodyContainer>
            </div>
        </div>
    );
};
