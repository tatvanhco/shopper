import { Link, useNavigate } from 'react-router-dom';
import styles from '../auth/auth.module.scss';

export const RegisterPage = () => {
    const navigate = useNavigate();
    const hanleregister = () => {
        alert('đăng ký thành công');
        navigate('/login');
    };
    return (
        <div className={styles.register}>
            <div className={styles.register_from}>
                <div className="p-10">
                    <h1 className="mb-8 text-4xl font-bold tracking-widest text-center text">SHOPPER</h1>
                    <p className="">Vui lòng nhập thông tin để đăng ký</p>
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
                                    By registering your details, you agree with our Terms & Conditions, and Privacy and
                                    Cookie Policy.
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
                            <div className="md:col-span-2 flex justify-between">
                                <Link to="/login">
                                    <button
                                        type="submit"
                                        className="text-white text-sm font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-4 px-6 tracking-wide"
                                    >
                                        Quay về trang đăng nhập
                                    </button>
                                </Link>
                                <Link to="/login">
                                    <button
                                        onClick={hanleregister}
                                        type="submit"
                                        className="text-white text-sm font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-4 px-6 tracking-wide"
                                    >
                                        Đăng ký
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
