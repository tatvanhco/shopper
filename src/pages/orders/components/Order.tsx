import { PaginationSize } from 'components/layouts/Paginations/Paginations';
import { useEffect, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import * as orderServices from 'services/orderServices';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Rating } from '@mui/material';
import { number } from 'yup';

export const Order = () => {
    const [orderItems, setOrderItems] = useState<orderServices.Orders[]>();
    const [open, setOpen] = useState(false);
    const [opensubmit, setOpensubmit] = useState(false);
    const [test, setTest] = useState(0);
    useEffect(() => {
        resetCart();
    }, []);

    const resetCart = () => {
        orderServices.getOrders().then((data) => setOrderItems(data));
    };

    const format = (n: any) => {
        return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + ' VND';
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseSubmit = () => {
        setOpensubmit(false);
    };

    const handleDelete = (id: number) => {
        setTest(id);
        setOpen(true);
    };

    const handleCancelOrder = (e: any) => {
        orderServices.deleteOrder(e).then((data) => {
            console.log('check', data.data.status);

            if (data.data.status == 1) {
                setOpen(false);
                setOpensubmit(true);
                resetCart();
            } else {
                alert('hủy không thành công');
            }
        });
    };

    const MAXITEMS = 3;
    return (
        <>
            <Scrollbars style={{ width: '100%', height: 500 }}>
                {orderItems?.map((item, index) => (
                    <div key={index} className="mb-5 border ">
                        <div className="p-8 pb-0">
                            <div className="grid grid-cols-2 md:grid-cols-4 bg-[#f5f5f5] px-5 py-4">
                                <div className="md:mb-0 mb-5">
                                    <h6 className="text-[0.6875rem] font-semibold text-[#767676] uppercase tracking-wide mb-3">
                                        MÃ ĐƠN HÀNG:
                                    </h6>
                                    <p className="text-[0.9375rem] font-semibold">{item.id}</p>
                                </div>
                                <div className="">
                                    <h6 className="text-[0.6875rem] font-semibold text-[#767676] uppercase tracking-wide mb-3">
                                        NGÀY GIAO:
                                    </h6>
                                    <p className="text-[0.9375rem] font-bold">{item.date}</p>
                                </div>
                                <div className="">
                                    <h6 className="text-[0.6875rem] font-bold text-[#767676] uppercase tracking-wide mb-3">
                                        TÌNH TRẠNG:
                                    </h6>
                                    <p className="text-[0.9375rem] font-bold">{item.status}</p>
                                </div>
                                <div className="">
                                    <h6 className="text-[0.6875rem] font-bold text-[#767676] uppercase tracking-wide mb-3">
                                        THÀNH TIỀN:
                                    </h6>
                                    <p className="text-[0.9375rem] font-bold">{format(item.total)}</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                                <div className="grid grid-cols-4 md:mb-0 mb-4 md:gap-x-3">
                                    {item.detail.slice(0, MAXITEMS).map((link) => {
                                        return (
                                            <img
                                                className="object-cover md:h-[64px] md:w-[64px] h-[96px] w-[96px]"
                                                src={link.product.image}
                                            />
                                        );
                                    })}
                                    {item.detail.length > MAXITEMS && (
                                        <div className="bg-[#f5f5f5] md:h-[64px] md:w-[64px] h-[96px] w-[96px] flex justify-center items-center">
                                            <a href="" className="text-center text-[0.8rem] font-semibold">
                                                +{item.detail.length - MAXITEMS}
                                                <br />
                                                more
                                            </a>
                                        </div>
                                    )}
                                </div>
                                <div className=" flex justify-between items-center md:ml-14">
                                    <div className="mr-1">
                                        <Link
                                            to={'/order/account-orders/account-order-detail/' + `${item.id}`}
                                            // className="text-center text-sm font-bold tracking-wide border border-[#1f1f1f] flex p-3 items-center hover:text-white hover:bg-[#1f1f1f]"
                                            className={`text-center text-sm font-bold tracking-wide border border-[#1f1f1f] flex p-3 items-center hover:text-white hover:bg-[#1f1f1f] ${
                                                item.status == 'Đã hủy' ? 'ml-[15rem]' : ''
                                            }`}
                                        >
                                            Xem chi tiết
                                        </Link>
                                    </div>
                                    <div className="">
                                        {item.statusId == 1 && (
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                // className="text-center text-sm font-bold tracking-wide border border-[#1f1f1f] flex p-3 items-center hover:text-white hover:bg-[#1f1f1f]"
                                                className={`text-center text-sm font-bold tracking-wide border border-[#1f1f1f] flex p-3 items-center hover:text-white hover:bg-[#1f1f1f] ${
                                                    item.status == 'Đã hủy' ? 'hidden' : 'block'
                                                }`}
                                            >
                                                Hủy đơn hàng
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <div className="py-[2rem] px-[5rem]">
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <p className="text-2xl text-center font-semibold text-black">
                                    Bạn có chắc chắn hủy đơn hàng này chứ
                                </p>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions className="flex justify-around">
                            <div
                                className="bg-white text-black border border-black hover:bg-black hover:text-white px-5 py-2 hover:cursor-pointer"
                                onClick={handleClose}
                            >
                                Hủy
                            </div>
                            <div
                                onClick={() => handleCancelOrder(test)}
                                className="bg-white text-black border border-black hover:bg-black hover:text-white px-5 py-2 hover:cursor-pointer"
                            >
                                Đồng ý
                            </div>
                        </DialogActions>
                    </div>
                </Dialog>
                <Dialog
                    open={opensubmit}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    // className="p-[50rem]"
                >
                    <div className="py-[2rem] px-[5rem]">
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <div className="">
                                    <CheckIcon className="shoppingIcon ml-[40%] mb-5" />
                                </div>
                                <p className="text-3xl font-semibold text-black">Đã hủy thành công</p>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <div
                                className="bg-white text-black border border-black hover:bg-black hover:text-white px-5 py-2 hover:cursor-pointer"
                                onClick={handleCloseSubmit}
                            >
                                Đồng ý
                            </div>
                        </DialogActions>
                    </div>
                </Dialog>
                {/* <Dialog
                    open={openFallSubmit}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <div className="py-[2rem] px-[5rem]">
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <div className="">
                                    <CheckIcon className="shoppingIcon ml-[40%] mb-5" />
                                </div>
                                <p className="text-3xl font-semibold text-black">Đã hủy không thành công</p>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <div
                                className="bg-white text-black border border-black hover:bg-black hover:text-white px-5 py-2 hover:cursor-pointer"
                                onClick={handleFallSubmit}
                            >
                                Đồng ý
                            </div>
                        </DialogActions>
                    </div>
                </Dialog> */}
            </Scrollbars>
        </>
    );
};
