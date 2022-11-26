import { Link, useNavigate } from 'react-router-dom';
import styles from '../auth/auth.module.scss';

export const ConfirmPage = () => {
    const navigate = useNavigate();
    const handleContinues = () => {
        alert('Mã xác nhận thành công');
        navigate('/resetpassword');
    };

    return (
        <div className={styles.register}>
            hh
            {/* <div className={styles.register_from}>
                <div className="p-10">
                    <h1 className="mb-8 text-4xl font-bold tracking-widest text-center text">SHOPPER</h1>
                    <p className="mb-5">Chúng tôi đã gửi mã xác nhận đến email của bạn. Vui lòng kiểm tra!</p>
                    <form action="" method="post">
                        <div className="grid grid-cols-1 md:grid-cols-2 text-[15px]">
                            <div className="md:col-span-full">
                                <input
                                    type="text"
                                    placeholder="Nhập mã xác nhận *"
                                    className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                />
                            </div>
                            <div className="md:col-span-full flex justify-center">
                                <Link to="/resetpassword">
                                    <button
                                        onClick={handleContinues}
                                        type="submit"
                                        className="text-white text-sm font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-4 px-6 tracking-wide"
                                    >
                                        Tiếp tục
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div> */}
        </div>
    );
};
