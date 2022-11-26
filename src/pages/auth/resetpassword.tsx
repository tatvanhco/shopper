import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import styles from '../auth/auth.module.scss';

export const ResetPassword = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get('token');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const hanleResetPassword = () => {
        if (password !== confirm) {
            alert('Mật khẩu không khớp');
        } else {
            axios
                .post(
                    'http://localhost:8000/api/auth/reset-password',
                    { password },
                    { headers: { Authorization: 'Bearer ' + token } },
                )
                .then((response) => {
                    console.log('verify:', response);
                    const { data } = response;
                    if (data.status) {
                        alert('đặt lại mật khẩu thành công');
                        navigate('/login');
                    } else {
                        alert('đặt lại mật khẩu không thành công');
                    }
                });
        }
    };
    return (
        <div className={styles.register}>
            <div className={styles.register_from}>
                <div className="p-10">
                    <h1 className="mb-8 text-4xl font-bold tracking-widest text-center text">SHOPPER</h1>
                    <p className="mb-5">Nhập mật khẩu mới cho tài khoản</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 text-[15px]">
                        <div className="md:col-span-full mb-6">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                                placeholder="Mật khẩu mới"
                                required
                                className="text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                            />
                        </div>
                        <div className="md:col-span-full mb-6">
                            <input
                                onChange={(e) => setConfirm(e.target.value)}
                                type="password"
                                name="password"
                                placeholder="Nhập lại mật khẩu"
                                required
                                className="text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                            />
                        </div>
                        <div className="md:col-span-2 flex justify-center">
                            <button
                                onClick={hanleResetPassword}
                                className="text-white text-sm font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-4 px-6 tracking-wide"
                            >
                                Đặt lại mật khẩu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
