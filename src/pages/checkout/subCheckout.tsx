import { Link, useNavigate } from 'react-router-dom';
import * as cartServices from 'services/cartServices';
import * as orderServices from 'services/orderServices';

interface SubCheckOutProps {
    data: cartServices.orderItems[];
    cartIds: number[];
}

export const SubCheckOut: React.FC<SubCheckOutProps> = ({ data, cartIds }) => {
    const navigate = useNavigate();
    const subTotal = () => {
        let tongcong: any = 0;
        data.map((subtotal): any => {
            const priceCart: any = subtotal.product.price;
            tongcong += priceCart * subtotal.quantity;
        });
        return tongcong;
    };
    const total = subTotal();
    const tax: any = 0;
    const format = (n: any, currency: any) => {
        return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + currency;
    };

    const handleBuy = () => {
        orderServices
            .createOrder({
                detail: cartIds,
            })
            .then((create: any) => {
                if (create.status == 1) {
                    navigate('/home/order-completed');
                } else {
                    alert('vui lòng đăng nhập để mua hàng');
                    navigate('/login');
                }
            });
    };
    return (
        <div className="">
            <div className="my-7">
                <ul className="bg-gray-100 py-3 px-5">
                    <li className="flex justify-between py-5 border-b border-gray-300">
                        <span>Tổng cộng ban đầu</span>
                        <span>{format(total, ' VND')}</span>
                    </li>
                    <li className="flex justify-between py-5">
                        <span>Tax</span>
                        <span>{format(tax, ' VND')}</span>
                    </li>
                    <li className="flex justify-between py-5 font-semibold">
                        <span>Tổng cộng</span>
                        <span>{format(total + tax, ' VND')}</span>
                    </li>
                </ul>
            </div>
            <div className="group w-full bg-black text-white py-4 text-center font-semibold tracking-wider">
                <div onClick={handleBuy} className="hover:cursor-pointer">
                    Hoàn thành thanh toán
                </div>
            </div>
            <div className="group w-full border border-black bg-white text-black hover:bg-black hover:text-white mt-2 py-4 text-center font-semibold tracking-wider">
                <Link to="/home/shopping-cart">Quay về</Link>
            </div>
        </div>
    );
};
