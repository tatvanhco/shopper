import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

const prices = ['100', '200', '500', '400'];

export const MultipleSelect = () => {
    const [fromPrice, setFromPrice] = React.useState('');
    const [toPrice, setToPrice] = React.useState('');
    const handleChangeFrom = (event: { target: { value: string } }) => {
        setFromPrice(event.target.value);
    };
    const handleChangeTo = (event: { target: { value: string } }) => {
        setToPrice(event.target.value);
    };

    return (
        <div className="flex items-center">
            <div className="">
                <FormControl sx={{ m: 0 }} variant="standard">
                    <InputLabel id="demo-customized-select-label">Giá</InputLabel>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={fromPrice}
                        onChange={handleChangeFrom}
                        input={<BootstrapInput />}
                    >
                        <MenuItem value="0">0 VND</MenuItem>
                        <MenuItem value="100">100.000 VND</MenuItem>
                        <MenuItem value="200">200.000 VND</MenuItem>
                        <MenuItem value="300">300.000 VND</MenuItem>
                        <MenuItem value="400">400.000 VND</MenuItem>
                        <MenuItem value="500">500.000 VND</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="text-gray-300 mx-2 mt-5">---</div>
            <div className="">
                <FormControl sx={{ m: 0 }} variant="standard">
                    <InputLabel id="demo-customized-select-label">Giá</InputLabel>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={toPrice}
                        onChange={handleChangeTo}
                        input={<BootstrapInput />}
                    >
                        <MenuItem value="100">100.000 VND</MenuItem>
                        <MenuItem value="200">200.000 VND</MenuItem>
                        <MenuItem value="300">300.000 VND</MenuItem>
                        <MenuItem value="400">400.000 VND</MenuItem>
                        <MenuItem value="500">500.000 VND</MenuItem>
                        <MenuItem value="Other">500.000 trở lên</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};
