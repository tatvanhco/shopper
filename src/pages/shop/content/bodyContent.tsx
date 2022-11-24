import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ChooseOptions } from './chooseOptions';
import { LinkSite } from 'components/layouts/breadcrumb/BreadCrumb';
import ProductCard from 'pages/orders/components/ProductCard';
import * as productServices from 'services/productServices';

export const BodyContent = (props: any) => {
    const [productFilter, setProductFilter] = useState('');
    const [products, setProducts] = useState<productServices.Product[]>([]);
    const choose = props.choose;
    useEffect(() => {
        productServices.getSortProduct(productFilter).then((data) => {
            setProducts(data);
        });
    }, [productFilter]);
    useEffect(() => {
        productServices.getSortCategory(choose).then((data) => {
            setProducts(data);
        });
    }, [choose]);

    // const chooseItems: any = ['Áo thun', 'Áo khoác', '100.000 VND đến 199.000 VND'];
    
    console.log('lần cuối', choose);

    // console.log('du lieu da qua', choose);
    console.log('chooseSort', products);

    const handleChange = (event: SelectChangeEvent) => {
        setProductFilter(event.target.value as string);
    };
    return (
        <>
            <div className="flex justify-between items-center mb-8">
                <div className="">
                    <h2 className="text-4xl font-semibold tracking-wider mb-3">Shopping Now</h2>
                    <LinkSite locate="shop" />
                </div>
                <div className="">
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">lọc sản phẩm</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={productFilter}
                                label="filter"
                                onChange={handleChange}
                            >
                                <MenuItem value="date">Mới nhất</MenuItem>
                                <MenuItem value="price">Từ thấp đến cao</MenuItem>
                                <MenuItem value="sold">đã bán</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
            {/* <ChooseOptions choose={chooseItems} /> */}
            <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-8">
                {products.map((item, index) => {
                    return <ProductCard key={index} data={item}></ProductCard>;
                })}
            </div>
            <div className="float-right">{/* <PaginationPage /> */}</div>
        </>
    );
};
