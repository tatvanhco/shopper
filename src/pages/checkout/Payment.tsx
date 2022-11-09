import { FormControl, FormControlLabel, Radio, RadioGroup, TextareaAutosize } from '@mui/material';

export const Payment = () => {
    return (
        <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Phương thức thanh toán</h2>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <table className="table-auto border-collapse border border-slate-500">
                        <thead>
                            <tr>
                                <th className="border border-slate-600 p-4">Chọn phương thức thanh toán</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-700 p-4">
                                    <FormControlLabel
                                        value="StandardShipping"
                                        control={<Radio />}
                                        label="Vận chuyển tiêu chuẩn"
                                    />
                                    <img
                                        className="inline"
                                        src="https://yevgenysim-turkey.github.io/shopper/assets/img/brands/color/cards.svg"
                                        alt=""
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-slate-700 p-4 ">
                                    <FormControlLabel value="ExpressShipping" control={<Radio />} label="" />
                                    <img
                                        className="inline"
                                        src="https://yevgenysim-turkey.github.io/shopper/assets/img/brands/color/paypal.svg"
                                        alt=""
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </RadioGroup>
            </FormControl>
            <TextareaAutosize
                className="mt-10 border border-black"
                maxRows={10}
                aria-label="maximum height"
                placeholder="Thêm ghi chú"
                defaultValue=""
                style={{ width: 630, height: 250, padding: 10 }}
            />
        </div>
    );
};
