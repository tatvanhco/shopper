import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as cartServices from 'services/cartServices';
import { Tracing } from 'trace_events';
import { number } from 'yup/lib/locale';

interface TotalCartProps {
    data: cartServices.orderItems[];
}

export const TotalCart: React.FC<TotalCartProps> = ({ data }) => {
    const subTotal = () => {
        let sum: any = 0;
        data.map((total): any => {
            sum += total.product.price;
        });
        return sum;
    };
    const total = subTotal();
    const tax: any = 12000;
    return (
        <div className="">
            <div className="mb-5">
                <ul className="bg-gray-100 py-3 px-5">
                    <li className="flex justify-between py-5 border-b border-gray-300">
                        <span>Tổng cộn ban đầu</span>
                        <span>{total} VND</span>
                    </li>
                    <li className="flex justify-between py-5">
                        <span>Tax</span>
                        <span>{tax} VND</span>
                    </li>
                    <li className="flex justify-between py-5 border-y border-gray-300 font-semibold">
                        <span>Tổng cộng</span>
                        <span>{total + tax} VND</span>
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
