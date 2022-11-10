import { select } from '@redux-saga/core/effects';
import BreadCrumb from 'components/layouts/breadcrumb/BreadCrumb';
import React, { useState } from 'react';
import { FiHeart, FiSearch, FiShoppingCart, FiStar, FiX } from 'react-icons/fi';
import { NavLink, Outlet } from 'react-router-dom';
import Description from './components/Description';

interface Product {
    id: string;
    category: string;
    name: string;
    price: string;
    cost: string;
    status: string;
    colors: string[];
    sizes?: string[];
    images: string[];
}

interface InfoProduct {
    id: string;
    title: string;
}

const data: Product = {
    id: 'SP101',
    category: 'Sneakers',
    name: 'Leather Sneakers',
    price: '85.000',
    cost: '115.000',
    status: 'In Stock',
    colors: ['Black', 'White'],
    sizes: ['6222', '66', '8'],
    images: [
        'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-7.jpg',
        'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-49.jpg',
    ],
};

const InfoProduct: InfoProduct = {
    id: '1',
    title: 'Description',
};

function Product() {
    const [selectedSize, setSelectedSize] = useState(data.sizes?.at(0));

    const [selectedColor, setSelectedColor] = useState(data.colors?.at(0));

    const handleClickSizeRadio = (e: any) => {
        setSelectedSize(e.target.value);
    };

    const handleClickColor = (e: any) => {
        setSelectedColor(e.target.value);
    };

    const [showModal, setShowModal] = React.useState(false);

    return (
        <section className="pb-20 lg:px-[2rem] xl:px-[20%]">
            <BreadCrumb />
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-yellow-200 ">
                    <div className="mb-4">
                        <img
                            src="https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-7.jpg"
                            alt=""
                        />
                    </div>
                    <div> slider img</div>
                </div>
                <div className="pl-16 pr-4">
                    <div className="grid grid-cols-2">
                        <div className="grid-cols-1">
                            <a className="text-[#767676]" href="">
                                {data.category}
                            </a>
                        </div>
                        {/* Rating */}
                        <div className="ml-auto flex items-center">
                            <div className="inline-flex">
                                <img
                                    className="w-[17px] h-[17px]"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABH0lEQVRIieXUPUpDQRQF4C8hLsBCRYJ9QEERYiEiuoGAnb0S7ARX4AJs3IKdNroGSwtrsfUHNWlF8CexyDx8hPeSN1EL8cCBGebec84wzOW/4SDwV7CObuDabxicpAyOf1p8Gq8pgzdUizSWCxo0MZbaV7AVEXAgKrj1lT7hfZ9pJkqpdRWrmAicwiRmsJjTf4kbPOERrcBz3PUXX2ekHJVXiWj6DU6HXTcCZ3kHu/j4RvIO9oe5b+B5BPEXbBa94hIeIsTbWCkqnqARYdDIExn00eYiwsyOYrAcYRBTi94HbIl7g1KmUg5qOSLNwHbGeS3GYDvV2MGR3vhIMI5DvKfqoobfTmi6QH1AXT3UdLEXY1DGvGLjvIwFBSbr38QnDjaJyKO+QfAAAAAASUVORK5CYII="
                                />
                                <img
                                    className="w-[17px] h-[17px]"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABH0lEQVRIieXUPUpDQRQF4C8hLsBCRYJ9QEERYiEiuoGAnb0S7ARX4AJs3IKdNroGSwtrsfUHNWlF8CexyDx8hPeSN1EL8cCBGebec84wzOW/4SDwV7CObuDabxicpAyOf1p8Gq8pgzdUizSWCxo0MZbaV7AVEXAgKrj1lT7hfZ9pJkqpdRWrmAicwiRmsJjTf4kbPOERrcBz3PUXX2ekHJVXiWj6DU6HXTcCZ3kHu/j4RvIO9oe5b+B5BPEXbBa94hIeIsTbWCkqnqARYdDIExn00eYiwsyOYrAcYRBTi94HbIl7g1KmUg5qOSLNwHbGeS3GYDvV2MGR3vhIMI5DvKfqoobfTmi6QH1AXT3UdLEXY1DGvGLjvIwFBSbr38QnDjaJyKO+QfAAAAAASUVORK5CYII="
                                />
                                <img
                                    className="w-[17px] h-[17px]"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABH0lEQVRIieXUPUpDQRQF4C8hLsBCRYJ9QEERYiEiuoGAnb0S7ARX4AJs3IKdNroGSwtrsfUHNWlF8CexyDx8hPeSN1EL8cCBGebec84wzOW/4SDwV7CObuDabxicpAyOf1p8Gq8pgzdUizSWCxo0MZbaV7AVEXAgKrj1lT7hfZ9pJkqpdRWrmAicwiRmsJjTf4kbPOERrcBz3PUXX2ekHJVXiWj6DU6HXTcCZ3kHu/j4RvIO9oe5b+B5BPEXbBa94hIeIsTbWCkqnqARYdDIExn00eYiwsyOYrAcYRBTi94HbIl7g1KmUg5qOSLNwHbGeS3GYDvV2MGR3vhIMI5DvKfqoobfTmi6QH1AXT3UdLEXY1DGvGLjvIwFBSbr38QnDjaJyKO+QfAAAAAASUVORK5CYII="
                                />
                                <img
                                    className="w-[17px] h-[17px]"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABH0lEQVRIieXUPUpDQRQF4C8hLsBCRYJ9QEERYiEiuoGAnb0S7ARX4AJs3IKdNroGSwtrsfUHNWlF8CexyDx8hPeSN1EL8cCBGebec84wzOW/4SDwV7CObuDabxicpAyOf1p8Gq8pgzdUizSWCxo0MZbaV7AVEXAgKrj1lT7hfZ9pJkqpdRWrmAicwiRmsJjTf4kbPOERrcBz3PUXX2ekHJVXiWj6DU6HXTcCZ3kHu/j4RvIO9oe5b+B5BPEXbBa94hIeIsTbWCkqnqARYdDIExn00eYiwsyOYrAcYRBTi94HbIl7g1KmUg5qOSLNwHbGeS3GYDvV2MGR3vhIMI5DvKfqoobfTmi6QH1AXT3UdLEXY1DGvGLjvIwFBSbr38QnDjaJyKO+QfAAAAAASUVORK5CYII="
                                />
                                <img
                                    className="w-[17px] h-[17px]"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABH0lEQVRIieXUPUpDQRQF4C8hLsBCRYJ9QEERYiEiuoGAnb0S7ARX4AJs3IKdNroGSwtrsfUHNWlF8CexyDx8hPeSN1EL8cCBGebec84wzOW/4SDwV7CObuDabxicpAyOf1p8Gq8pgzdUizSWCxo0MZbaV7AVEXAgKrj1lT7hfZ9pJkqpdRWrmAicwiRmsJjTf4kbPOERrcBz3PUXX2ekHJVXiWj6DU6HXTcCZ3kHu/j4RvIO9oe5b+B5BPEXbBa94hIeIsTbWCkqnqARYdDIExn00eYiwsyOYrAcYRBTi94HbIl7g1KmUg5qOSLNwHbGeS3GYDvV2MGR3vhIMI5DvKfqoobfTmi6QH1AXT3UdLEXY1DGvGLjvIwFBSbr38QnDjaJyKO+QfAAAAAASUVORK5CYII="
                                />
                            </div>
                            <a className="ml-2 " href="">
                                Reviews (6)
                            </a>
                        </div>
                    </div>
                    {/* Heading */}
                    <h3 className="mb-2 text-3xl font-semibold">{data.name}</h3>
                    {/* Price */}
                    <div className="mb-7">
                        <span className="text-[#a6a6a6] line-through font-semibold">{data.cost}</span>
                        <span className="text-secondColor font-bold text-2xl ml-2">{data.price}</span>
                        <span className="text-base ml-1">({data.status})</span>
                    </div>
                    {/* Form */}
                    <form action="">
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

                        {/* Size chart */}
                        <p className="mb-8 flex">
                            <img
                                src="https://yevgenysim-turkey.github.io/shopper/assets/img/icons/icon-ruler.svg"
                                alt=""
                                className=""
                            />
                            <p
                                className="ml-3 underline hover:no-underline cursor-pointer"
                                onClick={() => setShowModal(true)}
                            >
                                Bảng quy đổi size
                            </p>
                        </p>

                        {showModal ? (
                            <>
                                <div className="bg-black bg-opacity-20 flex justify-center items-center fixed outline-0 inset-0 z-50">
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                        {/*content*/}
                                        <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex justify-center items-center p-5 border-b border-slate-200">
                                                <h3 className="text-xl font-semibold mx-auto">Size Chart</h3>
                                                <button
                                                    className="bg-transparent border-0 text-2xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <FiX className="text-[#a6a6a6]" />
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <div className="relative p-6">
                                                <table className="border-collapse border border-slate-400 border-spacing-2">
                                                    <thead>
                                                        <tr className="">
                                                            <th className="border border-slate-300 py-4 px-5">Size</th>
                                                            <th className="border border-slate-300 py-4 px-5">
                                                                Chiều cao
                                                            </th>
                                                            <th className="border border-slate-300 py-4 px-5">
                                                                Cân nặng
                                                            </th>
                                                            <th className="border border-slate-300 py-4 px-5">Ngực</th>
                                                            <th className="border border-slate-300 py-4 px-5">Eo</th>
                                                            <th className="border border-slate-300 py-4 px-5">Mông</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="border border-slate-300 py-4 px-5">S</td>
                                                            <td className="border border-slate-300 py-4 px-5">
                                                                165-167
                                                            </td>
                                                            <td className="border border-slate-300 py-4 px-5">55-60</td>
                                                            <td className="border border-slate-300 py-4 px-5">86-90</td>
                                                            <td className="border border-slate-300 py-4 px-5">68-72</td>
                                                            <td className="border border-slate-300 py-4 px-5">88-92</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="border border-slate-300 py-4 px-5">M</td>
                                                            <td className="border border-slate-300 py-4 px-5">
                                                                165-167
                                                            </td>
                                                            <td className="border border-slate-300 py-4 px-5">55-60</td>
                                                            <td className="border border-slate-300 py-4 px-5">86-90</td>
                                                            <td className="border border-slate-300 py-4 px-5">68-72</td>
                                                            <td className="border border-slate-300 py-4 px-5">88-92</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="border border-slate-300 py-4 px-5">L</td>
                                                            <td className="border border-slate-300 py-4 px-5">
                                                                165-167
                                                            </td>
                                                            <td className="border border-slate-300 py-4 px-5">55-60</td>
                                                            <td className="border border-slate-300 py-4 px-5">86-90</td>
                                                            <td className="border border-slate-300 py-4 px-5">68-72</td>
                                                            <td className="border border-slate-300 py-4 px-5">88-92</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="border border-slate-300 py-4 px-5">XL</td>
                                                            <td className="border border-slate-300 py-4 px-5">
                                                                165-167
                                                            </td>
                                                            <td className="border border-slate-300 py-4 px-5">55-60</td>
                                                            <td className="border border-slate-300 py-4 px-5">86-90</td>
                                                            <td className="border border-slate-300 py-4 px-5">68-72</td>
                                                            <td className="border border-slate-300 py-4 px-5">88-92</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : null}

                        <div className="mb-8 gap-x-5 flex flex-wrap">
                            <div>
                                <select
                                    name=""
                                    id="size"
                                    className="block border border-[#e5e5e5] w-full p-3 outline-none"
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                            <div className="">
                                <button
                                    type="submit"
                                    className="flex items-center text-white text-[15px] font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-3 px-10 tracking-wide"
                                >
                                    Add to Cart
                                    <FiShoppingCart size={16} className="ml-2" />
                                </button>
                            </div>
                            <div>
                                <button
                                    className="flex items-center text-[15px] font-semibold border border-[#1f1f1f] py-3 px-6 tracking-wide
                                hover:text-white hover:bg-[#1f1f1f]"
                                >
                                    Wishlist
                                    <FiHeart size={16} className="ml-2" />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* DESCRIPTION */}
            {/* <Description /> */}
            <div className="pt-11">
                {/* Nav */}
                <nav className="flex justify-center border-b border-slate-200">
                    <NavLink to={'decription'} className="py-3 px-6">
                        <p>Mô tả</p>
                    </NavLink>
                    <NavLink to={'decription'} className="py-3 px-6">
                        <p>Kích cỡ</p>
                    </NavLink>
                    <NavLink to={'decription'} className="py-3 px-6">
                        <p>Vận chuyển</p>
                    </NavLink>
                </nav>
                {/* Content */}
                <Outlet />
            </div>
        </section>
    );
}

export default Product;
