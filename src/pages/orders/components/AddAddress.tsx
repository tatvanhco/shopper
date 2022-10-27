import React from 'react';

function AddAddress() {
    return (
        <div>
            <h6 className="mb-7 text-xl font-semibold">Add Address</h6>
            <form action="">
                <div className="grid md:auto-rows-auto md:grid-cols-2 grid-cols-1 text-[15px]">
                    <div className="md:mr-4">
                        <label htmlFor="firstName" className="inline-block text-base mb-2">
                            First Name *
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="First Name"
                            required
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:mr-4">
                        <label htmlFor="lastName" className="inline-block text-base mb-2">
                            Last Name *
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                            required
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="emailAddress" className="inline-block text-base mb-2">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="emailAddress"
                            placeholder="Email Address"
                            required
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:mr-4 md:col-span-2">
                        <label htmlFor="companyName" className="inline-block text-base mb-2">
                            Company Name
                        </label>
                        <input
                            type="text"
                            id="companyName"
                            placeholder="Company Name"
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:mr-4 md:col-span-2">
                        <label htmlFor="country" className="inline-block text-base mb-2">
                            Country *
                        </label>
                        <input
                            type="text"
                            id="country"
                            placeholder="Country *"
                            required
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:mr-4 md:col-span-2">
                        <label htmlFor="addressLineOne" className="inline-block text-base mb-2">
                            Address Line 1 *
                        </label>
                        <input
                            type="text"
                            id="addressLineOne"
                            placeholder="Address Line 1"
                            required
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:mr-4 md:col-span-2">
                        <label htmlFor="addressLineTwo" className="inline-block text-base mb-2">
                            Address Line 2
                        </label>
                        <input
                            type="text"
                            id="addressLineTwo"
                            placeholder="Address Line 2"
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:mr-4">
                        <label htmlFor="townCity" className="inline-block text-base mb-2">
                            Town / City *
                        </label>
                        <input
                            type="text"
                            id="townCity"
                            placeholder="Town / City"
                            required
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:mr-4">
                        <label htmlFor="zipPostcode" className="inline-block text-base mb-2">
                            ZIP / Postcode *
                        </label>
                        <input
                            type="text"
                            id="zipPostcode"
                            placeholder="ZIP / Postcode"
                            required
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:mr-4 md:col-span-2">
                        <label htmlFor="mobilePhone" className="inline-block text-base mb-2">
                            Mobile Phone *
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
                            Default delivery address
                        </label>
                    </div>
                    <div className="md:col-span-2 flex gap-3 mb-3">
                        <input
                            type="checkbox"
                            id="defaultShippingAddress"
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
                            htmlFor="defaultShippingAddress"
                            className="text-[#767676] peer-checked:text-[#1f1f1f] cursor-pointer"
                        >
                            Default shipping address
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-5 text-white text-sm font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-4 px-8 tracking-wide"
                >
                    Add Address
                </button>
            </form>
        </div>
    );
}

export default AddAddress;
