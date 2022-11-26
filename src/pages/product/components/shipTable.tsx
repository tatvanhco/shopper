export const ShipTable = () => {
    return (
        <div className="mx-[15%]">
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
                        <td className="border border-slate-700 p-4">Vận chuyển tiêu chuẩn</td>
                        <td className="border border-slate-700 p-4">Giao hàng trong 5-7 ngày làm việc</td>
                        <th className="border border-slate-600">25.000 VND</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-700 p-4 ">Vận chuyển nhanh</td>
                        <td className="border border-slate-700 p-4">Giao hàng trong 3-5 ngày làm việc</td>
                        <th className="border border-slate-600">30.000 VND</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-700 p-4">Vận chuyển siêu tốc</td>
                        <td className="border border-slate-700 p-4">Giao hàng trong 1-2 ngày làm việc</td>
                        <th className="border border-slate-600">35.000 VND</th>
                    </tr>
                    <tr>
                        <td className="border border-slate-700 p-4">Miễn phí vận chuyển</td>
                        <td className="border border-slate-700 p-4">Giao hàng trong giờ hành chính</td>
                        <th className="border border-slate-600">0 VND</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
