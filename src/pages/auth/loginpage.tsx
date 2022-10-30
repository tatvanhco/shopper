import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../auth/auth.module.scss';

export const LoginPage = () => {
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

    const navigate = useNavigate();

    const login = () => {
        localStorage.setItem('user', JSON.stringify({ role: 'ADMIN' }));
        navigate('/home');
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
    };
    const onChange = (e: any) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    return (
        <div className={styles.login}>
            <div className={styles.login_from}>
                <div className="p-10">
                    <div className="mb-8">
                        <h1 className="text-4xl font-extrabold tracking-widest text-center text">SHOPPER</h1>
                        <p className="text-center mt-1 font-semibold text-secondColor">
                            Chào mừng đến với shop của chúng tôi
                        </p>
                    </div>
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
                                <Link to="/forgotPassword">
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className="md:col-span-3 flex justify-between">
                                <Link to="/register">
                                    <button
                                        type="submit"
                                        className="text-white text-sm font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-4 px-6 tracking-wide"
                                    >
                                        Đăng ký
                                    </button>
                                </Link>
                                <Link to="/">
                                    <button
                                        onClick={login}
                                        type="submit"
                                        className="text-white text-sm font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-4 px-6 tracking-wide"
                                    >
                                        Đăng nhập
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