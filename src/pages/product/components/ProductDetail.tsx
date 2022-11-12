import { data } from 'data/Productdb';
import { useState } from 'react';

export const ProductDetail = () => {
    const [selectedSize, setSelectedSize] = useState(data.sizes?.at(0));
    const [selectedColor, setSelectedColor] = useState(data.colors?.at(0));

    const handleClickSizeRadio = (e: any) => {
        setSelectedSize(e.target.value);
    };

    const handleClickColor = (e: any) => {
        setSelectedColor(e.target.value);
    };
    return (
        <>
            <div className="mb-6">
                <p className="mb-5">
                    Color:
                    <strong id=""> {selectedColor} </strong>
                </p>
                <div className="mb-8 -ml-1 flex">
                    <label className="mr-3 inline-flex cursor-pointer">
                        <input
                            type="radio"
                            name="imgRadio"
                            id="imgRadio1"
                            value="Black"
                            className="peer"
                            checked
                            onChange={(e) => handleClickColor(e)}
                            hidden
                        />
                        <img
                            id="imgRadio1"
                            src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-7.jpg"
                            alt=""
                            className="opacity-80 peer-checked:border-[#1f1f1f] peer-checked:opacity-100 w-[70px] h-[70px] border-0 border-b-2 border-transparent"
                        />
                    </label>
                    <label className="mr-3 inline-flex cursor-pointer">
                        <input
                            type="radio"
                            name="imgRadio"
                            id="imgRadio2"
                            value="White"
                            className="peer"
                            onChange={(e) => handleClickColor(e)}
                            hidden
                        />
                        <img
                            id="imgRadio2"
                            src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-49.jpg"
                            alt=""
                            className="opacity-80 peer-checked:border-b-[#1f1f1f] peer-checked:opacity-100 w-[70px] h-[70px] border-0 border-b-2 border-transparent"
                        />
                    </label>
                </div>
            </div>
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
