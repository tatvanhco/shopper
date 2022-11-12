import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

export const ShippDetail = () => {
    return (
        <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Chi tiết vận chuyển</h2>
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <table className="table-auto border-collapse border border-slate-500">
                        <thead>
                            <tr>
                                <th className="border border-slate-600 p-4">Chọn phương thức vận chuyển</th>
                                <th className="border border-slate-600 p-4">Thời gian vận chuyển</th>
                                <th className="border border-slate-600 p-4">Chi phí vận chuyển</th>
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
                                </td>
                                <td className="border border-slate-700 p-4">Giao hàng trong 5-7 ngày làm việc</td>
                                <th className="border border-slate-600">25.000 VND</th>
                            </tr>
                            <tr>
                                <td className="border border-slate-700 p-4 ">
                                    <FormControlLabel
                                        value="ExpressShipping"
                                        control={<Radio />}
                                        label="Vận chuyển nhanh"
                                    />
                                </td>
                                <td className="border border-slate-700 p-4">Giao hàng trong 3-5 ngày làm việc</td>
                                <th className="border border-slate-600">30.000 VND</th>
                            </tr>
                            <tr>
                                <td className="border border-slate-700 p-4">
                                    <FormControlLabel
                                        value="fasterShipping"
                                        control={<Radio />}
                                        label="Vận chuyển siêu tốc"
                                    />
                                </td>
                                <td className="border border-slate-700 p-4">Giao hàng trong 1-2 ngày làm việc</td>
                                <th className="border border-slate-600">35.000 VND</th>
                            </tr>
                            <tr>
                                <td className="border border-slate-700 p-4">
                                    <FormControlLabel
                                        value="FreeShipping"
                                        control={<Radio />}
                                        label="Miễn phí vận chuyển"
                                    />
                                </td>
                                <td className="border border-slate-700 p-4">Giao hàng trong giờ hành chính</td>
                                <th className="border border-slate-600">0 VND</th>
                            </tr>
                        </tbody>
                    </table>
                </RadioGroup>
            </FormControl>
            <div className="flex items-center mt-3">
                <input
                    type="checkbox"
                    id="checkbox2"
                    className="peer relative appearance-none w-[20px] h-[20px]
                                        border rounded-none focus:outline-none 
                                        bg-[#e5e5e5]
                                        checked:bg-black
                                        after: content-['']
                                        after: left-0
                                        after: top-1
                                        after: bg-no-repeat
                                        after: bg-center
                                        after: bg-[length:16px]
                                        after: bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAoUlEQVRIie3Tqw0CQRQF0A0JBr8bEvrA0gECjcJBUFSAoAZaoAEqYQVNYDAYPgfBJIyDTWYQZK+/500m7xVFmzZNggrznHjtlUVqvMQh4Ef0/xTHoAEe/3mN6lNhiBPWyV8eSmNcQ2mVFI/KU9zxwCwpHiHLANwwSYpH2CZAF4yyrCK2ATwH9LttaTCgg5130h5RGNLFPgseDemhzIK3+UmeJtBAj7yn5iIAAAAASUVORK5CYII=')]
                                        mr-4
                                        "
                />
                <label
                    htmlFor="checkbox2"
                    className="text-[#767676] peer-checked:text-[#1f1f1f] cursor-pointer items-center mt-3"
                >
                    Gửi đến một địa chỉ khác?
                </label>
            </div>
        </div>
    );
};
