function AddAddress() {
    return (
        <div>
            <h6 className="mb-7 text-xl font-semibold">Địa chỉ mới</h6>
            <form action="">
                <div className="grid md:auto-rows-auto md:grid-cols-2 grid-cols-1 text-[15px]">
                    <div className="md:mr-4">
                        <label htmlFor="firstName" className="inline-block text-base mb-2">
                            Họ *
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Nhập họ của bạn"
                            required
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:mr-4">
                        <label htmlFor="lastName" className="inline-block text-base mb-2">
                            Tên *
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Nhập tên của bạn"
                            required
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="emailAddress" className="inline-block text-base mb-2">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="emailAddress"
                            placeholder="Email"
                            required
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:mr-4">
                        <label htmlFor="townCity" className="inline-block text-base mb-2">
                            Tỉnh / Thành Phố *
                        </label>
                        <input
                            type="text"
                            id="townCity"
                            placeholder="Tỉnh / Thành Phố"
                            required
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:mr-4">
                        <label htmlFor="province" className="inline-block text-base mb-2">
                            Quận/Huyện, Phường/Xã *
                        </label>
                        <input
                            type="text"
                            id="province"
                            placeholder="Quận/Huyện, Phường/Xã"
                            required
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:mr-4 md:col-span-2">
                        <label htmlFor="addressLineOne" className="inline-block text-base mb-2">
                            Địa chỉ cụ thể *
                        </label>
                        <input
                            type="text"
                            id="addressLineOne"
                            placeholder="Địa chỉ cụ thể: số nhà, tên đường..."
                            required
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:mr-4 md:col-span-2">
                        <label htmlFor="mobilePhone" className="inline-block text-base mb-2">
                            Số điện thoại *
                        </label>
                        <input
                            type="tel"
                            id="mobilePhone"
                            placeholder="Mobile Phone"
                            required
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:col-span-2 flex gap-3 mb-3">
                        <input
                            type="checkbox"
                            id="defaultDeliveryAddress"
                            className="peer relative appearance-none w-[20px] h-[20px]
                                        border rounded-none focus:outline-none 
                                        bg-[#e5e5e5]
                                        checked:bg-black
                                        after: content-['']
                                        after: left-0
                                        after: top-0
                                        after: bg-no-repeat
                                        after: bg-center
                                        after: bg-[length:16px]
                                        after: bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAoUlEQVRIie3Tqw0CQRQF0A0JBr8bEvrA0gECjcJBUFSAoAZaoAEqYQVNYDAYPgfBJIyDTWYQZK+/500m7xVFmzZNggrznHjtlUVqvMQh4Ef0/xTHoAEe/3mN6lNhiBPWyV8eSmNcQ2mVFI/KU9zxwCwpHiHLANwwSYpH2CZAF4yyrCK2ATwH9LttaTCgg5130h5RGNLFPgseDemhzIK3+UmeJtBAj7yn5iIAAAAASUVORK5CYII=')]
                                        "
                        />
                        <label
                            htmlFor="defaultDeliveryAddress"
                            className="text-[#767676] peer-checked:text-[#1f1f1f] cursor-pointer"
                        >
                            Đặt làm địa chỉ mặc định
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-5 text-white text-sm font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-4 px-8 tracking-wide"
                >
                    Xác nhận
                </button>
            </form>
        </div>
    );
}

export default AddAddress;
