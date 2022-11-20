import { BodyContainer } from 'components/container';
import Features from 'components/Features';
import { LinkSite } from 'components/layouts/breadcrumb/BreadCrumb';
import { NavDesc } from './components/NavDesc';
import { ProductImg } from './components/productImg';
import { ReviewComment } from './components/reviewComment';
import * as productServices from 'services/productServices';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SuggestCard } from './components/suggestCard';
import { Suggestion } from './components/suggestion';
interface ProductProps {}
export const Product: React.FC<ProductProps> = () => {
    const [product, setProduct] = useState<productServices.ProductDetail>();

    const id: string = useParams().id as string;
    useEffect(() => {
        productServices.getProduct({ id: id }).then((data: productServices.ProductDetail) => setProduct(data));
    }, []);
    return (
        <div className="">
            <BodyContainer>
                <LinkSite locate="shop" />
                <ProductImg imagess={product?.images} />
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
