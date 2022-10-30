import { Link, useNavigate } from 'react-router-dom';
import styles from '../auth/auth.module.scss';

export const ForgotPass = () => {
    const navigate = useNavigate();
    const hanlesendSubmit = () => {
        alert('Đã gửi mã xác nhận');
        navigate('/confirmPage');
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
                                    type="email"
                                    placeholder="Email Address *"
                                    className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                />
                            </div>
                            <div className="md:col-span-2 mb-6">
                                <p>
                                    By registering your details, you agree with our Terms & Conditions, and Privacy and
                                    Cookie Policy.
                                </p>
                            </div>
                            <div className="md:col-span-2 flex justify-center">
                                <Link to="/confirm">
                                    <button
                                        onClick={hanlesendSubmit}
                                        type="submit"
                                        className="text-white text-sm font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-4 px-6 tracking-wide"
                                    >
                                        Gửi mã xác nhận
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