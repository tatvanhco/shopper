import { data } from 'data/Productdb';
import { useState } from 'react';
import { SubProductImg } from './subProductImg';

export const ProductImg = () => {
    const [selectedProduct, setSelectedProduct] = useState(data.images?.at(0));

    function handleClickProduct(img: string) {
        setSelectedProduct(img);
    }
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="">
                    <div className="mb-4">
                        <img src={selectedProduct} alt="" className="" />
                    </div>
                    <div className="flex">
                        {data.images.map((image) => {
                            return (
                                <img
                                    className={`opacity-80 w-[100px] h-[100px] mr-3 border-0 border-b-2 ${
                                        selectedProduct === image ? 'opacity-100 border-[#1f1f1f]' : ''
                                    }`}
                                    src={image}
                                    onClick={() => handleClickProduct(image)}
                                />
                            );
                        })}
                    </div>
                </div>
                <SubProductImg />
            </div>
        </>
    );
};
