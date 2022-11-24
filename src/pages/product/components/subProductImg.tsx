import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Rating } from '@mui/material';
import { data } from 'data/Productdb';
import { useEffect, useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { AddCartBtn } from './addCartBtn';
import { ProductDetail } from './ProductDetail';
import { SizeChart } from './SizeChart';
import { useNavigate, useParams } from 'react-router-dom';
import * as productServices from 'services/productServices';
import * as cartServices from 'services/cartServices';

export const SubProductImg = () => {
    const [sizeId, setSizeId] = useState<string>();

    const [productCart, setProductCart] = useState<cartServices.orderItems>();
    const [value, setValue] = useState<number | null>(4);
    const [product, setProduct] = useState<productServices.ProductDetail>();
    const [open, setOpen] = useState(false);
    const id: string = useParams().id as string;
    const navigate = useNavigate();
    const useAuth = () => {
        const checkLogin = localStorage.getItem('user_token');
        if (checkLogin) {
            return true;
        } else {
            return false;
        }
    };
    const user = useAuth();

    useEffect(() => {
        productServices.getProduct({ id: id }).then((data: productServices.ProductDetail) => setProduct(data));
    }, []);

    useEffect(() => {
        cartServices.getCart().then((cartItems: cartServices.orderItems) => setProductCart(cartItems));
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = (quantity: any) => {
        if (!sizeId) {
            alert('vui lòng chọn kích cỡ');
            return;
        }
        if (!quantity) {
            alert('vui lòng chọn số lượng cần mua');
            return;
        }

        cartServices
            .postCart({
                productId: product?.id || '1',
                sizeId: sizeId || 'S',
                quantity: quantity,
            })
            .then((cartItem: any) => {
                if (cartItem.data.status == 1) {
                    setProductCart(cartItem.data);
                    setOpen(true);
                } else {
                    alert('vui lòng đăng nhập');
                    navigate('/login');
                    // {
                    //     user ? alert('kích cỡ mà bạn chọn đã hết vui lòng quay lại sau') :
                    // }
                }
            });
    };

    return (
        <>
            <div className="md:pl-16 md:pr-4">
                <div className="grid grid-cols-2 pb-4">
                    <div className="grid-cols-1">
                        <a className="text-[#767676]" href="">
                            {data.category}
                        </a>
                    </div>
                    {/* Rating */}
                    <div className="ml-auto flex items-center">
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <a className="ml-2" href="">
                            Reviews (6)
                        </a>
                    </div>
                </div>
                {/* Heading */}
                <h3 className="mb-2 text-3xl font-semibold">{product?.name}</h3>
                {/* Price */}
                <div className="mb-7">
                    <span className="text-[#a6a6a6] line-through font-semibold">{data.cost}</span>
                    <span className="text-secondColor font-bold text-2xl ml-2">{product?.price}</span>
                    <span className="text-base ml-1">({product?.status})</span>
                    <span className="text-mainColor font-bold text-2xl ml-2">VND</span>
                </div>
                {/* Form */}
                <form action="">
                    <div className="">
                        <div className="">
                            <ProductDetail Sizes={product?.sizes} selectSize={(e: any) => setSizeId(e)} />
                        </div>
                        <SizeChart />
                    </div>

                    <AddCartBtn handleAdd={handleAdd} />
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        // className="p-[50rem]"
                    >
                        <div className="py-[2rem] px-[5rem]">
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <div className="">
                                        <ShoppingCartCheckoutIcon className="shoppingIcon ml-[40%] mb-5" />
                                    </div>
                                    <p className="text-3xl font-semibold text-black">Đã thêm vào giỏ hàng</p>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                {/* <Button onClick={handleClose}>Disagree</Button> */}
                                <div
                                    className="bg-white text-black border border-black hover:bg-black hover:text-white px-5 py-2 hover:cursor-pointer"
                                    onClick={handleClose}
                                >
                                    Đồng ý
                                </div>
                            </DialogActions>
                        </div>
                    </Dialog>
                </form>
            </div>
        </>
    );
};
