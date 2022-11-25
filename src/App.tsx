import React, { useState } from 'react';
import './App.scss';
import Header from 'components/layouts/header/header';
import Footer from 'components/layouts/footer/footer';
import { Outlet } from 'react-router-dom';

function App() {

    return (
        <div className="App">
            <Header />
            <div className="min-h-[50rem]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
export default App;
