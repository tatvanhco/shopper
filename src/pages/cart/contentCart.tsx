import { ProductItems } from 'data/Productdb';
import Scrollbars from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom';

export const ContentCart = () => {
    return (
        <div className="col-span-2 md:px-0 px-8 md:mr-16">
            <Scrollbars style={{ width: 700, height: 420 }}>
                {ProductItems.map((item, index) => {
                    return (
                        <div key={index} className="flex items-center p-6 border-y border-gray-200">
                            <div className="mr-8">
                                <img className="w-[10rem] h-[10rem]" src={item.img} alt="" />
                            </div>
                            <div className="w-full">
                                <div className="flex justify-between">
                                    <p className="font-semibold">{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                                <p>size: {item.size}</p>
                                <p>color: {item.color}</p>
                                <div className="flex justify-between">
                                    <p>khung select</p>
                                    <p>Xóa</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Scrollbars>
            <div className="flex justify-between mt-4">
                <div className="flex">
                    <div className="">
                        <p className="mb-2">Mời nhập mã code:</p>
                        <input
                            type="text"
                            className="block mb-6 text-[15px] py-3 pl-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-[15rem]"
                            placeholder="Mời nhập mã giảm giá"
                        />
                    </div>
                    <div className="mt-9 ml-5 rounded">
                        <Link to="" className="py-4 px-5 bg-black text-white">
                            Xác nhận
                        </Link>
                    </div>
                </div>
                <div className="mt-9 rounded">
                    <Link to="" className="py-4 px-5 border border-black  hover:bg-black hover:text-white">
                        Thêm vào giỏ hàng
                    </Link>
                </div>
            </div>
        </div>
    );
};
