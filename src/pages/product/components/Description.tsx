import React, { useEffect, useRef, useState } from 'react';
import * as productServices from 'services/productServices';
import { useParams } from 'react-router-dom';
export const Description = () => {
    const [product, setProduct] = useState<productServices.ProductDetail>();
    const descRef = useRef<any>();
    const id: string = useParams().id as string;
    useEffect(() => {
        productServices.getProduct({ id: id }).then((data: productServices.ProductDetail) => {
            setProduct(data);
            descRef.current.innerHTML = data?.desc;
        });
    }, []);
    return <div className="xl:mx-[15%]" ref={descRef}></div>;
};
