import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import Home from 'pages/home/home';
import Auth from 'pages/auth/auth';
import Product from 'pages/product/product';
import Men from 'components/men';
import OrderWishlist from 'pages/orders/components/wishlist';
import OrderContainer from 'pages/orders/components/OrderContainer';
import Orders from './pages/orders';

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
                    <Route path="/account-wishlist" element={<OrderWishlist />} />
                    <Route path="/account-personal-info" element={<OrderWishlist />} />
                    <Route path="/account-address" element={<OrderWishlist />} />
                    <Route path="/account-payment" element={<OrderWishlist />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
