import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ChooseOptions } from './chooseOptions';
import { LinkSite } from 'components/layouts/breadcrumb/BreadCrumb';
import ProductCard from 'pages/orders/components/ProductCard';
import * as productServices from 'services/productServices';
import { Pagination } from '@mui/material';

export const BodyContent = () => {
    const [productFilter, setProductFilter] = React.useState('');
    const [products, setProducts] = React.useState<productServices.Product[]>([]);
    React.useEffect(() => {
        productServices.getProducts().then((data) => {
            setProducts(data);
        });
    }, []);

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
                                <MenuItem value={1}>Mới nhất</MenuItem>
                                <MenuItem value={2}>Từ thấp đến cao</MenuItem>
                                <MenuItem value={3}>Từ cao đến thấp</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
            <ChooseOptions />
            <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-8">
                {products.map((item) => {
                    return <ProductCard data={item}></ProductCard>;
                })}
            </div>
            <div className="float-right">
                <Pagination />
            </div>
        </>
    );
};
