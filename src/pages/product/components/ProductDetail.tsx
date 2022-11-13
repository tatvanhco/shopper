import { data } from 'data/Productdb';
import { useState } from 'react';

export const ProductDetail = () => {
    const [selectedSize, setSelectedSize] = useState(data.sizes?.at(0));

    const handleClickSizeRadio = (e: any) => {
        setSelectedSize(e.target.value);
    };
    return (
        <>
            <div className="mb-6">
                <p className="mb-5">
                    Size:
                    <strong id=""> {selectedSize} US </strong>
                </p>
                <div className="mb-2 flex flex-wrap">
                    {data.sizes?.map((size, index) => (
                        <div className="flex items-center mb-2 mr-2 min-h-[1.5rem]">
                            <input
                                hidden
                                type="radio"
                                name="sizeRadio"
                                id={`sizeRadio1${index}`}
                                value={size}
                                checked={selectedSize === size}
                                className="peer"
                                onChange={(e) => handleClickSizeRadio(e)}
                            />
                            <label
                                htmlFor={`sizeRadio1${index}`}
                                className="border border-[#ddd] p-2 text-center min-w-[3rem] cursor-pointer inline-block text-[#767676] peer-checked:border-[#111]"
                            >
                                {size}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
