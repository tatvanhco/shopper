import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Men from 'components/men';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import Home from 'pages/home/home';
import Auth from 'pages/auth/auth';
import Orders from './pages/orders';
import Product from 'pages/product/product';
import Address from 'pages/orders/components/Address';
import OrderWishlist from 'pages/orders/components/wishlist';
import PersonalInfo from 'pages/orders/components/PersonalInfo';
import OrderContainer from 'pages/orders/components/OrderContainer';
import AddAddress from 'pages/orders/components/AddAddress';
import PaymentMethods from 'pages/orders/components/PaymentMethods';
import OrderDetail from 'pages/orders/components/OrderDetail';
import AddPaymentMethod from 'pages/orders/components/AddPaymentMethod';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/men" element={<Men />} />
                </Route>
                <Route path="/product" element={<Product />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="" element={<Orders />}>
                    <Route path="/account-orders" element={<OrderContainer />} />
                    <Route path="/account-order-detail" element={<OrderDetail />} />
                    <Route path="/account-wishlist" element={<OrderWishlist />} />
                    <Route path="/account-personal-info" element={<PersonalInfo />} />
                    <Route path="/account-address" element={<Address />} />
                    <Route path="/account-address-edit" element={<AddAddress />} />
                    <Route path="/account-payment" element={<PaymentMethods />} />
                    <Route path="/account-payment-edit" element={<AddPaymentMethod />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
