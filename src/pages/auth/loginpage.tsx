import { useState } from 'react';
import styles from '../auth/auth.module.scss';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

const signInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Please enter your email'),
    password: Yup.string()
        .min(8, 'Your password must contain at least 8 characters')
        .required('Please enter your password'),
});

export const LoginPage = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

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
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={signInSchema}
                        onSubmit={(values) => console.log(values)}
                    >
                        {({ errors, touched }: any) => (
                            <Form>
                                <div className="grid grid-cols-1 md:grid-cols-3 text-[15px]">
                                    <div className="md:col-span-3 mb-6">
                                        <Field
                                            name="email"
                                            placeholder="Email của bạn *"
                                            className="text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                        />
                                        {errors.email && touched.email ? (
                                            <p className={styles.errorMessage}>{errors.email}</p>
                                        ) : null}
                                    </div>
                                    <div className="md:col-span-3 mb-6">
                                        <Field
                                            name="password"
                                            placeholder="Mật khẩu *"
                                            className="text-[15px] py-3 px-5 border border-[#e5e5e5] focus:outline-none focus:border-black w-full"
                                        />
                                        {errors.password && touched.password ? (
                                            <p className={styles.errorMessage}>{errors.password}</p>
                                        ) : null}
                                    </div>
                                    <div className="col-span-2 flex gap-3 mb-8">
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
                                        <div>
                                            <label
                                                htmlFor="checkbox1"
                                                className="text-[#767676] peer-checked:text-[#1f1f1f] cursor-pointer"
                                            >
                                                Duy trì đăng nhập
                                            </label>
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <Link to="/forgotPassword">Bạn quên mật khẩu?</Link>
                                    </div>
                                    <div className="md:col-span-full mb-6 flex justify-center">
                                        <button
                                            onClick={login} //tạm thời
                                            type="submit"
                                            className="text-white text-sm font-semibold bg-[#1f1f1f] border border-[#1f1f1f] py-4 px-6 tracking-wide"
                                        >
                                            Đăng nhập
                                        </button>
                                    </div>
                                    <div className="md:col-span-full flex justify-center mt-8">
                                        <p>
                                            Bạn chưa có tài khoản?{' '}
                                            <Link to="/register">
                                                <span className="text-blue-400 cursor-pointer hover:underline">
                                                    Đăng ký
                                                </span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

//export default LoginPage;
