import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ChooseOptions } from './chooseOptions';
import OrderWishlist from 'pages/orders/components/wishlist';
import { LinkSite } from 'components/layouts/breadcrumb/BreadCrumb';

export const BodyContent = () => {
    const [productFilter, setProductFilter] = React.useState('');

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
            <OrderWishlist />
            {/* <Pagination /> */}
        </>
    );
};
