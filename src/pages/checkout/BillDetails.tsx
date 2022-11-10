export const BillDetails = () => {
    return (
        <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Chi tiết hóa đơn</h2>
            <div className="">
                <div className="group">
                    <label htmlFor="Name">Họ và tên *</label>
                    <input
                        type="text"
                        id="Name"
                        className="block mb-6 text-[15px] py-3 pl-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        placeholder="Mời nhập họ và tên"
                    />
                </div>
                <div className="group">
                    <label htmlFor="Name">Email *</label>
                    <input
                        type="text"
                        id="Email"
                        className="block mb-6 text-[15px] py-3 pl-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        placeholder="Mời nhập email"
                    />
                </div>
                <div className="group">
                    <label htmlFor="Company">Tên Công ty</label>
                    <input
                        type="text"
                        id="Company"
                        className="block mb-6 text-[15px] py-3 pl-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        placeholder="Mời nhập tên công ty"
                    />
                </div>
                <div className="group">
                    <label htmlFor="Country">Quốc Gia</label>
                    <input
                        type="text"
                        id="Country"
                        className="block mb-6 text-[15px] py-3 pl-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        placeholder="Mời nhập tên quốc gia"
                    />
                </div>
                <div className="group">
                    <label htmlFor="Address1">Địa chỉ thường trú</label>
                    <input
                        type="text"
                        id="Address1"
                        className="block mb-6 text-[15px] py-3 pl-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        placeholder="Mời nhập địa chỉ thường trú"
                    />
                </div>
                <div className="group">
                    <label htmlFor="Address2">Địa chỉ tạm trú</label>
                    <input
                        type="text"
                        id="Address2"
                        className="block mb-6 text-[15px] py-3 pl-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        placeholder="Mời nhập địa chỉ tạm trú"
                    />
                </div>
                <div className="group">
                    <label htmlFor="city">Thành phố</label>
                    <input
                        type="text"
                        id="city"
                        className="block mb-6 text-[15px] py-3 pl-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        placeholder="Mời nhập tên thành phố"
                    />
                </div>
                <div className="group">
                    <label htmlFor="phone">Số điện thoại</label>
                    <input
                        type="phone"
                        id="phone"
                        className="block mb-6 text-[15px] py-3 pl-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        placeholder="Mời nhập số điện thoại"
                    />
                </div>
            </div>
        </div>
    );
};
