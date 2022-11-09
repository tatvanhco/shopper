import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const TotalCart = () => {
    return (
        <div className="">
            <div className="mb-5">
                <ul className="bg-gray-100 py-3 px-5">
                    <li className="flex justify-between py-5 border-b border-gray-300">
                        <span>Tổng cộn ban đầu</span>
                        <span>100.000 VND</span>
                    </li>
                    <li className="flex justify-between py-5">
                        <span>Tax</span>
                        <span>0 VND</span>
                    </li>
                    <li className="flex justify-between py-5 border-y border-gray-300 font-semibold">
                        <span>Tổng cộng</span>
                        <span>100.000 VND</span>
                    </li>
                    <li className="text-center pt-5">Chi phí vận chuyển được tính tại Checkout</li>
                </ul>
            </div>
            <div className="group w-full bg-black text-white py-4 text-center font-semibold tracking-wider">
                <Link to="/home/shopping-cart/checkout">Thanh toán ngay</Link>
            </div>
            <div className="group  p-3 mb-10">
                <Link to="/shop" className=" text-base font-semibold flex justify-center items-center">
                    <FiArrowLeft className="text-black duration-300 mr-2 group-hover:mr-4" size={'16'} />
                    Shop Now
                </Link>
            </div>
        </div>
    );
};
