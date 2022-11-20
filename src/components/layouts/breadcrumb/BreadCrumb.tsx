import React from 'react';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const LinkSite = (props: any) => {
    let location: any;
    switch (props.locate) {
        case 'shop':
            location = [
                <Link underline="hover" key="1" color="inherit" href="/home">
                    Trang Chủ
                </Link>,
                <Link underline="hover" key="2" color="text.primary" href="/shop">
                    Shop
                </Link>,
            ];
            break;
        case 'cart':
            location = [
                <Link underline="hover" key="1" color="inherit" href="/home">
                    Trang chủ
                </Link>,
                <Link underline="hover" key="2" color="text.primary" href="/home/shopping-cart">
                    Giỏ hàng
                </Link>,
            ];
            break;
        case 'checkout':
            location = [
                <Link underline="hover" key="1" color="inherit" href="/home">
                    Trang chủ
                </Link>,
                <Link underline="hover" key="1" color="inherit" href="/home/shopping-cart">
                    Giỏ hàng
                </Link>,
                <Link underline="hover" key="2" color="text.primary" href="/home/shopping-cart/checkout">
                    Thanh toán
                </Link>,
            ];
            break;
        case 'user':
            location = [
                <Link underline="hover" key="1" color="inherit" href="/home">
                    Trang Chủ
                </Link>,
                <Link underline="hover" key="2" color="text.primary" href="/shop">
                    Tài Khoản
                </Link>,
            ];
            break;
        default:
            break;
    }
    return (
        <div className="py-5">
            <Stack spacing={2}>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    {location}
                </Breadcrumbs>
            </Stack>
        </div>
    );
};
