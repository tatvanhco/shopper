import { PaginationSize } from 'components/layouts/Paginations/Paginations';
import { Link } from 'react-router-dom';

interface OrderProps {
    id: string;
    orderDate: string;
    shippedDate?: string;
    status: string;
    amount: string;
    products: string[];
}
const data: OrderProps[] = [
    {
        id: '66788943',
        orderDate: '01 Oct, 2019',
        status: 'Awaiting Delivery',
        amount: '259.000',
        products: [
            'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-5.jpg',
            'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-112.jpg',
            'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-7.jpg',
            'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-6.jpg',
            'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-10.jpg',
            'https://yevgenysim-turkey.github.io/shopper/assets/img/products/product-10.jpg',
        ],
    },
];
function Order() {
    const MAXITEMS = 3;
    return (
        <>
            {data.map((item, index) => (
                <div className="mb-5 border ">
                    <div className="p-8 pb-0">
                        <div className="grid grid-cols-2 md:grid-cols-4 bg-[#f5f5f5] px-5 py-4">
                            <div className="md:mb-0 mb-5">
                                <h6 className="text-[0.6875rem] font-semibold text-[#767676] uppercase tracking-wide mb-3">
                                    Order No:
                                </h6>
                                <p className="text-[0.9375rem] font-semibold">{item.id}</p>
                            </div>
                            <div className="">
                                <h6 className="text-[0.6875rem] font-semibold text-[#767676] uppercase tracking-wide mb-3">
                                    SHIPPED DATE:
                                </h6>
                                <p className="text-[0.9375rem] font-bold">{item.orderDate}</p>
                            </div>
                            <div className="">
                                <h6 className="text-[0.6875rem] font-bold text-[#767676] uppercase tracking-wide mb-3">
                                    Status:
                                </h6>
                                <p className="text-[0.9375rem] font-bold">{item.status}</p>
                            </div>
                            <div className="">
                                <h6 className="text-[0.6875rem] font-bold text-[#767676] uppercase tracking-wide mb-3">
                                    Order Amount:
                                </h6>
                                <p className="text-[0.9375rem] font-bold">{item.amount}</p>
                            </div>
                        </div>
                    </div>
                    {/* Dang lam` */}
                    <div className="p-8">
                        <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                            <div className="grid grid-cols-4 md:mb-0 mb-4 md:gap-x-3">
                                {item.products.slice(0, MAXITEMS).map((link) => {
                                    const url = `url(` + link + ')';
                                    return (
                                        <img
                                            className="object-cover md:h-[64px] md:w-[64px] h-[96px] w-[96px]"
                                            src={link}
                                        />
                                    );
                                })}
                                {item.products.length > MAXITEMS && (
                                    <div className="bg-[#f5f5f5] md:h-[64px] md:w-[64px] h-[96px] w-[96px] flex justify-center items-center">
                                        <a href="" className="text-center text-[0.8rem] font-semibold">
                                            +{item.products.length - MAXITEMS}
                                            <br />
                                            more
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className=" flex  justify-between md:ml-14 ">
                                <div className="mr-1 p-3">
                                    <Link
                                        to={'/order/account-orders/account-order-detail'}
                                        className="text-center text-sm font-bold tracking-wide border border-[#1f1f1f] flex py-2 items-center hover:text-white hover:bg-[#1f1f1f]"
                                    >
                                        chi tiết đơn hàng
                                    </Link>
                                </div>
                                <div className="p-3">
                                    <button className=" text-center text-sm font-bold tracking-wide border border-[#1f1f1f] flex  py-2 items-center hover:text-white hover:bg-[#1f1f1f]">
                                        Hủy đơn hàng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Order;
