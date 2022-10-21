import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../auth/auth.module.scss';

function Auth() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const inputs = [
        {
            id: 1,
            name: 'email',
            type: 'email',
            placeholder: 'Email Address *',
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Password *',
        },
    ];

    const handleSubmit = (e: any) => {
        e.preventDefault();
    };
    const onChange = (e: any) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    console.log(values);

    return (
        <section className="py-20 bg-[#f5f5f5]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-10">
                <div className=" mb-6 md:md-0 ">
                    <div className="p-8 bg-white">
                        {/* Heading */}
                        <h6 className="mb-8 text-xl font-semibold tracking-wide">Returning Customer</h6>
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <div className="grid grid-rows-4 grid-cols-1 md:grid-cols-3 text-[15px]">
                                <div className="md:col-span-3 mb-6">
                                    <input
                                        name="email"
                                        onChange={onChange}
                                        type="email"
                                        value={values.email}
                                        placeholder="Email Address *"
                                        required
                                        className="text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                    />
                                    <span className={styles.errorMessage}> Invalid Email Address </span>
                                </div>
                                <div className="md:col-span-3 mb-6">
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={onChange}
                                        placeholder="Password *"
                                        value={values.password}
                                        required
                                        className="text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                    />
                                </div>
                                <div className="md:col-span-2 flex gap-3">
                                    <input
                                        type="checkbox"
                                        id="checkbox1"
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
                                        htmlFor="checkbox1"
                                        className="text-[#767676] peer-checked:text-[#1f1f1f] cursor-pointer"
                                    >
                                        Remember Me
                                    </label>
                                </div>
                                <div className="ml-auto">
                                    <a href="" className="">
                                        Forgot Password?
                                    </a>
                                </div>
                                <div className="md:col-span-3">
                                    <button
                                        type="submit"
                                        className="text-white text-sm font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-4 px-6 tracking-wide"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mb-6 md:md-0 ">
                    <div className="p-8 bg-white">
                        {/* Heading */}
                        <h6 className="mb-8 text-xl font-semibold tracking-wide">New Customer</h6>
                        <form action="" method="post">
                            <div className="grid grid-rows-7 grid-cols-1 md:grid-cols-2 text-[15px]">
                                <div className="md:col-span-2">
                                    <input
                                        type="text"
                                        placeholder="First Name *"
                                        className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <input
                                        type="text"
                                        placeholder="Last Name *"
                                        className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <input
                                        type="email"
                                        placeholder="Email Address *"
                                        className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                    />
                                </div>
                                <div className="md:col-span-1 mr-4">
                                    <input
                                        type="password"
                                        placeholder="Password *"
                                        className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                    />
                                </div>
                                <div className="md:col-span-1 ml-4">
                                    <input
                                        type="password"
                                        placeholder="Confirm Password *"
                                        className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                    />
                                </div>
                                <div className="md:col-span-2 mb-6">
                                    <p>
                                        By registering your details, you agree with our Terms & Conditions, and Privacy
                                        and Cookie Policy.
                                    </p>
                                </div>
                                <div className="md:col-span-2 flex gap-3 mb-6">
                                    <input
                                        type="checkbox"
                                        id="checkbox2"
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
                                        htmlFor="checkbox2"
                                        className="text-[#767676] peer-checked:text-[#1f1f1f] cursor-pointer"
                                    >
                                        Sign me up for the Newsletter!
                                    </label>
                                </div>
                                <div className="md:col-span-2">
                                    <button
                                        type="submit"
                                        className="text-white text-sm font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-4 px-6 tracking-wide"
                                    >
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Auth;
