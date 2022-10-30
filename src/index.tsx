import './index.css';
import App from './App';
import React from 'react';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/home/home';
import Product from 'pages/product/product';
import Orders from 'pages/orders';
import OrderContainer from 'pages/orders/components/OrderContainer';
import OrderDetail from 'pages/orders/components/OrderDetail';
import OrderWishlist from 'pages/orders/components/wishlist';
import PersonalInfo from 'pages/orders/components/PersonalInfo';
import Address from 'pages/orders/components/Address';
import AddAddress from 'pages/orders/components/AddAddress';
import AddPaymentMethod from 'pages/orders/components/AddPaymentMethod';
import PaymentMethods from 'pages/orders/components/PaymentMethods';
import { LoginPage } from 'pages/auth/loginpage';
import { InnerText } from 'components/innertext';
import { PrivateRoute } from 'components/common/privateRoute';
import { PublicRoute } from 'components/common/publicRoute';
import { RegisterPage } from 'pages/auth/registerPage';
import { ForgotPass } from 'pages/auth/forgotPass';
import { ConfirmPage } from 'pages/auth/confirmPage';
import { ResetPassword } from 'pages/auth/resetpassword';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<PublicRoute />}>
                        <Route path="/login" element={<LoginPage />} />
                    </Route>
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="forgotPassword" element={<ForgotPass />} />
                    <Route path="confirm" element={<ConfirmPage />} />
                    <Route path="resetpassword" element={<ResetPassword />} />
                    <Route path="/" element={<PrivateRoute />}>
                        <Route path="/" element={<InnerText />}>
                            <Route path="/" element={<App />}>
                                <Route path="/" element={<Navigate replace to="/home" />} />
                                <Route path="/home" element={<Home />} />
                                <Route path="/product" element={<Product />} />
                                <Route path="/order" element={<Orders />}>
                                    <Route path="/order/account-orders" element={<OrderContainer />} />
                                    <Route
                                        path="/order/account-orders/account-order-detail"
                                        element={<OrderDetail />}
                                    />
                                    <Route path="/order/account-wishlist" element={<OrderWishlist />} />
                                    <Route path="/order/account-personal-info" element={<PersonalInfo />} />
                                    <Route path="/order/account-address" element={<Address />} />
                                    <Route
                                        path="/order/account-address/account-address-edit"
                                        element={<AddAddress />}
                                    />
                                    <Route path="/order/account-payment" element={<PaymentMethods />} />
                                    <Route
                                        path="/order/account-payment/account-payment-edit"
                                        element={<AddPaymentMethod />}
                                    />
                                </Route>
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
