import { FC, useEffect, useState } from 'react';
import { SubProductImg } from './subProductImg';

interface ProductDetailProps {
    Sizes?: ProductSize[];
    selectSize: any;
}

interface ProductSize {
    id: string;
    name: string;
    quantity: number;
}

export const ProductDetail: FC<ProductDetailProps> = ({ Sizes, selectSize }) => {
    const [selectedSize, setSelectedSize] = useState<ProductSize>();

    useEffect(() => setSelectedSize(Sizes?.at(0)), [Sizes]);

    const handleClickSizeRadio = (e: ProductSize) => {
        setSelectedSize(e);
        selectSize(e.id);
    };
    return (
        <>
            <div className="mb-6">
                <p className="mb-5">
                    Size:
                    <strong id=""> {selectedSize?.name}</strong>
                </p>
                <div className="mb-2 flex flex-wrap">
                    {Sizes?.map((size) => {
                        // console.log('test:', selectedSize?.id === size.id);

                        return (
                            <div className="flex items-center mb-2 mr-2 min-h-[1.5rem]">
                                <label
                                    onClick={() => handleClickSizeRadio(size)}
                                    htmlFor={`sizeRadio1?${size.id}`}
                                    className={`${
                                        selectedSize?.id === size.id
                                            ? 'border p-2 text-center min-w-[3rem] cursor-pointer inline-block text-[#767676] border-[#111]'
                                            : 'border p-2 text-center min-w-[3rem] cursor-pointer inline-block text-[#767676] border-[#ddd]'
                                    }`}
                                >
                                    {size.name}
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
