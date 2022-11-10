import { Link, useNavigate } from 'react-router-dom';
import styles from '../auth/auth.module.scss';

export const ResetPassword = () => {
    const navigate = useNavigate();
    const hanleResetPassword = () => {
        alert('đặt lại mật khẩu thành công');
    };
    return (
        <div className={styles.register}>
            <div className={styles.register_from}>
                <div className="p-10">
                    <h1 className="mb-8 text-4xl font-bold tracking-widest text-center text">SHOPPER</h1>
                    <p className="mb-5">Nhập mật khẩu mới cho tài khoản</p>
                    <form action="" method="post">
                        <div className="grid grid-cols-1 md:grid-cols-2 text-[15px]">
                            <div className="md:col-span-full mb-6">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Mật khẩu mới"
                                    required
                                    className="text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                />
                            </div>
                            <div className="md:col-span-full mb-6">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Nhập lại mật khẩu"
                                    required
                                    className="text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                />
                            </div>
                            <div className="md:col-span-2 flex justify-center">
                                <Link to="/login">
                                    <button
                                        onClick={hanleResetPassword}
                                        type="submit"
                                        className="text-white text-sm font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-4 px-6 tracking-wide"
                                    >
                                        Đặt lại mật khẩu
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
