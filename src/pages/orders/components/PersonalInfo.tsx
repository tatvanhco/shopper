import React from 'react';

function PersonalInfo() {
    return (
        <div>
            <form action="" method="post">
                <div className="grid md:grid-rows-5 grid-rows-7 md:grid-cols-2 grid-cols-1 text-[15px]">
                    <div className="md:mr-4">
                        <label htmlFor="accountFirstName" className="inline-block text-base mb-2">
                            First Name *
                        </label>
                        <input
                            type="text"
                            id="accountFirstName"
                            value={'Nguyễn'}
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:ml-4">
                        <label htmlFor="accountLastName" className="inline-block text-base mb-2">
                            Last Name *
                        </label>
                        <input
                            type="text"
                            id="accountLastName"
                            value={'Ngọc'}
                            placeholder="Last Name *"
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="accountEmail" className="inline-block text-base mb-2">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="accountEmail"
                            value={'user@email.com'}
                            placeholder="Email Address *"
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:mr-4">
                        <label htmlFor="accountPassword" className="inline-block text-base mb-2">
                            Current Password *
                        </label>
                        <input
                            type="password"
                            id="accountPassword"
                            placeholder="Current Password *"
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:ml-4">
                        <label htmlFor="accountNewPassword" className="inline-block text-base mb-2">
                            New Password *
                        </label>
                        <input
                            type="password"
                            id="accountNewPassword"
                            placeholder="New Password *"
                            className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                        />
                    </div>
                    <div className="md:mr-4 mb-6">
                        <label className="inline-block text-base mb-2">Date of Birth</label>
                        <div className="grid grid-cols-3 gap-5">
                            <div>
                                <select
                                    name=""
                                    id="accountDate"
                                    className="block border border-[#e5e5e5] w-full p-3 outline-none"
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>
                            <div className="bg-red-200"></div>
                            <div className="bg-red-200"></div>
                        </div>
                    </div>
                    <div className="md:ml-4 mb-6">
                        <label className="inline-block text-base mb-5">Gender</label>
                        <div className="grid gap-2 auto-cols-min grid-flow-col">
                            <div className="">
                                <input type="radio" name="gender" id="male" hidden className="peer" />
                                <label
                                    htmlFor="male"
                                    className="cursor-pointer border border-[#e5e5e5] px-6 py-3 peer-checked:border-[#111] hover:border-[#111]"
                                >
                                    Male
                                </label>
                            </div>
                            <div className="">
                                <input type="radio" name="gender" id="female" hidden className="peer" />
                                <label
                                    htmlFor="female"
                                    className="cursor-pointer border border-[#e5e5e5] px-6 py-3 peer-checked:border-[#111] hover:border-[#111]"
                                >
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 mt-4">
                        <button
                            type="submit"
                            className="text-white text-[15px] font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-4 px-7 tracking-wide"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default PersonalInfo;
