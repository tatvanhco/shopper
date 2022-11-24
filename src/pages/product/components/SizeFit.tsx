import { SizeChart } from './SizeChart';

export const SizeFit = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 xl:mx-[15%]">
            <div className="">
                <ul>
                    <p className="font-semibold mb-2">Thông tin phù hợp:</p>
                    <li className="pb-1 px-4">Xuất xứ da bò NHẬP KHẨU loại tốt- đàn hồi vô cùng tốt</li>
                    <li className="py-1 px-4">Đế cao su 100% cho cảm thấy êm chân và bám đường</li>
                    <li className="py-1 px-4">Thiết kế chỉ da bò khâu nên rất bền.</li>
                    <li className="py-1 px-4">Giày rất nhẹ nên cho cảm giác nhẹ nhàng, êm dịu</li>
                </ul>
            </div>
            <div className="">
                <ul className="float-right">
                    <p className="font-semibold mb-2">Các phép đo mô hình:</p>
                    <li>Cao: 1m8</li>
                    <li>Ngực: 89 cm</li>
                    <li>Hông: 91 cm</li>
                    <li>Thắt lưng: 65 cm</li>
                    <li>Kích thước: M</li>
                    <li className="mt-8 text-center">
                        <SizeChart />
                    </li>
                </ul>
            </div>
        </div>
    );
};
