import { ProductItems } from 'data/Productdb';
import Scrollbars from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom';

export const SubCheckOut = () => {
    return (
        <div className="">
            <h2 className="text-2xl font-semibold mb-4">số sản phẩm: 5</h2>
            <Scrollbars style={{ width: 400, height: 300, padding: 0 }}>
                {ProductItems.map((item, index) => {
                    return (
                        <div key={index} className="flex items-center p-5 border-y border-gray-200">
                            <div className="mr-5">
                                <img className="w-[7rem] h-[7rem]" src={item.img} alt="" />
                            </div>
                            <div className="w-full">
                                <div className="mb-3">
                                    <p className="font-semibold">{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                                <p>size: {item.size}</p>
                                <p>color: {item.color}</p>
                            </div>
                        </div>
                    );
                })}
            </Scrollbars>
            <div className="my-7">
                <ul className="bg-gray-100 py-3 px-5">
                    <li className="flex justify-between py-5 border-b border-gray-300">
                        <span>Tổng cộn ban đầu</span>
                        <span>100.000 VND</span>
                    </li>
                    <li className="flex justify-between py-5">
                        <span>Tax</span>
                        <span>0 VND</span>
                    </li>
                    <li className="flex justify-between py-5 border-y border-gray-300">
                        <span>Phí vận chuyển</span>
                        <span>0 VND</span>
                    </li>
                    <li className="flex justify-between py-5 font-semibold">
                        <span>Tổng cộng</span>
                        <span>100.000 VND</span>
                    </li>
                </ul>
            </div>
            <div className="group w-full bg-black text-white py-4 text-center font-semibold tracking-wider">
                <Link to="/home/order-completed">Hoàn thành thanh toán</Link>
            </div>
        </div>
    );
};
