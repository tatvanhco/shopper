import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../auth/auth.module.scss';
import { Backdrop, CircularProgress } from '@mui/material';
export const ForgotPass = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const hanlesendSubmit = () => {
        setIsLoading(true);
        axios
            .get('http://localhost:8000/api/auth/forgot-password/' + email)
            .then((response) => {
                alert('Đã gửi mã xác nhận đến: ' + email);
                setIsLoading(false);
                // navigate('/resetpassword');
            })
            .catch((error) => {
                setIsLoading(false);
                alert(error.response.message);
            });
    };

    return (
        <>
            <Backdrop sx={{ color: '#fff', zIndex: 1 }} open={isLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className={styles.register}>
                <div className={styles.register_from}>
                    <div className="p-8">
                        <h1 className="mb-8 text-4xl font-bold tracking-widest text-center text">SHOPPER</h1>
                        <p className="mb-5">
                            Vui lòng nhập địa chỉ email của bạn để nhận mã xác nhận lấy lại mật khẩu.
                        </p>
                        <div className="grid grid-rows-7 grid-cols-1 md:grid-cols-2 text-[15px]">
                            <div className="md:col-span-2">
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    type="email"
                                    placeholder="Email Address *"
                                    className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                />
                            </div>
                            <div className="md:col-span-2 flex justify-center">
                                <button
                                    onClick={hanlesendSubmit}
                                    type="submit"
                                    className="text-white text-sm font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-4 px-6 tracking-wide"
                                >
                                    Gửi mã xác nhận
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
