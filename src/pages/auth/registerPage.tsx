import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../auth/auth.module.scss';
import * as authServices from '../../services/AuthServices';
import axios from 'axios';
import { render } from '@testing-library/react';
import { Backdrop, CircularProgress } from '@mui/material';
export const RegisterPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [address, setAddress] = useState('');
    const [ward, setWard] = useState('Phường Phúc Xá');
    const [district, setDistrict] = useState('Quận Ba Đình');
    const [city, setCity] = useState('Thành phố Hà Nội');
    const [phone, setPhone] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const hanleregister = () => {
        if (password === confirmpassword) {
            const items = { name, email, password, address, ward, district, city, phone };
            console.log(items);
            setIsLoading(true);
            authServices
                .signUp({
                    name,
                    email,
                    password,
                    address: 1,
                    city: 1,
                    district: 1,
                    ward: 1,
                    phone,
                    street: `Đường ${address}, Phường: ${ward}, Quận: ${district}, ${city}`,
                })
                .then((response) => {
                    setIsLoading(false);
                    const { data } = response;
                    if (data.status) {
                        alert('đăng ký thành công');
                        navigate('/login');
                    } else {
                        alert(data.message);
                    }
                });
        } else {
            console.log('mật khẩu không khớp vui lòng nhập lại');
        }
    };

    useEffect(() => {
        const promise = axios('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json');

        promise.then(function (result) {
            console.log(result.data);
            setData(result.data);
        });
    }, []);

    const renderDistrict = () => {
        if (data.length) {
            const districtData = data.find((i: any) => i.Name === city) as any;
            return (
                districtData &&
                districtData.Districts.map((i: any) => (
                    <option value={i.Name} selected={i.Name === district}>
                        {i.Name}
                    </option>
                ))
            );
        }
        return [];
    };

    const renderWard = () => {
        if (data.length) {
            const cityData = data.find((i: any) => i.Name === city) as any;
            const districtData = cityData.Districts.find((i: any) => i.Name === district) as any;
            return (
                districtData &&
                districtData.Wards.map((i: any) => (
                    <option value={i.Name} selected={i.Name === ward}>
                        {i.Name}
                    </option>
                ))
            );
        }
        return [];
    };

    return (
        <>
            <Backdrop sx={{ color: '#fff', zIndex: 1 }} open={isLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className={styles.register}>
                <div className={styles.register_from}>
                    <div className="p-10">
                        <h1 className="mb-8 text-4xl font-bold tracking-widest text-center text">SHOPPER</h1>
                        <p className="">Vui lòng nhập thông tin để đăng ký</p>
                        <div className="grid grid-rows-7 grid-cols-1 md:grid-cols-2 text-[15px]">
                            <div className="md:col-span-2">
                                <input
                                    type="text"
                                    placeholder="Full name *"
                                    className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </div>
                            <div className="md:col-span-2">
                                <input
                                    type="email"
                                    placeholder="Email Address *"
                                    className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div className="md:col-span-1 mr-4">
                                <input
                                    type="password"
                                    placeholder="Password *"
                                    className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </div>
                            <div className="md:col-span-1 ml-4">
                                <input
                                    type="password"
                                    placeholder="Confirm Password *"
                                    className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                    onChange={(e) => setConfirmpassword(e.target.value)}
                                    value={confirmpassword}
                                />
                            </div>
                            <div className="md:col-span-2">
                                <input
                                    type="text"
                                    placeholder="Address *"
                                    className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={address}
                                />
                            </div>
                            <div className="md:col-span-1">
                                <select
                                    onChange={(e) => setCity(e.target.value)}
                                    className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                    id="city"
                                    aria-label=".form-select-sm"
                                >
                                    {data.map((i: any) => (
                                        <option value={i.Name} selected={i.Name === city}>
                                            {i.Name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="md:col-span-1">
                                <select
                                    onChange={(e) => setDistrict(e.target.value)}
                                    className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                    id="district"
                                    aria-label=".form-select-sm"
                                >
                                    {renderDistrict()}
                                </select>
                            </div>
                            <div className="md:col-span-1">
                                <select
                                    onChange={(e) => setWard(e.target.value)}
                                    className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                    id="ward"
                                    aria-label=".form-select-sm"
                                >
                                    {renderWard()}
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <input
                                    type="phone"
                                    placeholder="phone *"
                                    className="mb-6 text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
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
                                <button className="text-white text-sm font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-4 px-6 tracking-wide">
                                    Quay về trang đăng nhập
                                </button>
                                <button
                                    onClick={hanleregister}
                                    className="text-white text-sm font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-4 px-6 tracking-wide"
                                >
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
