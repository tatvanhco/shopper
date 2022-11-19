import { FC, useEffect, useState } from 'react';
import { SubProductImg } from './subProductImg';
import clsx from 'clsx';
interface ProductImgProps {
    imagess?: ProductImage[];
}
interface ProductImage {
    id: string;
    link: string;
}
export const ProductImg: FC<ProductImgProps> = ({ imagess }) => {
    const [selectedProduct, setSelectedProduct] = useState<ProductImage>();
    // console.log(imagess);

    useEffect(() => setSelectedProduct(imagess?.at(0)), [imagess]);
    function handleClickProduct(index: ProductImage) {
        setSelectedProduct(index);
    }
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="">
                    <div className="mb-4">
                        <img src={selectedProduct?.link} alt="" />
                    </div>
                    <div className={clsx('imgSlider', 'overflow-hidden')}>
                        <div className="flex overflow-x-scroll w-full mb-[-20px] h-[10rem]">
                            {imagess?.map((image) => {
                                return (
                                    <img
                                        className={`opacity-80 w-[100px] h-[100px] mr-3 border-0 border-b-2 ${
                                            selectedProduct?.id === image.id ? 'opacity-100 border-[#1f1f1f]' : ''
                                        }`}
                                        key={image.id}
                                        src={image.link}
                                        onClick={() => handleClickProduct(image)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                <SubProductImg />
            </div>
        </>
    );
};
