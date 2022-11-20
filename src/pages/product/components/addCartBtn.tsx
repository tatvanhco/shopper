import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import * as cartServices from 'services/cartServices';
interface AddCartBtnProps {
    handleAdd: any;
}
export const AddCartBtn: React.FC<AddCartBtnProps> = ({ handleAdd }) => {
    const [quatity, setQuatity] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setQuatity(event.target.value as string);
    };

    const handleAddCart = () => {
        handleAdd(quatity);
        console.log('add', quatity);
    };
    return (
        <>
            <div className="mb-8 gap-x-5 flex flex-wrap">
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">quality</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={quatity}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <div className="">
                    <Button
                        onClick={handleAddCart}
                        className="flex items-center text-white text-[15px] font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-3 px-10 tracking-wide"
                    >
                        Add to Cart
                        <FiShoppingCart size={16} className="ml-2" />
                    </Button>
                </div>
                <div>
                    <button
                        className="flex items-center text-[15px] font-semibold border border-[#1f1f1f] py-3 px-6 tracking-wide
                                hover:text-white hover:bg-[#1f1f1f]"
                    >
                        Wishlist
                        <FiHeart size={16} className="ml-2" />
                    </button>
                </div>
            </div>
        </>
    );
};
