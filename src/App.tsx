import React from 'react';
import './App.scss';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import Home from 'pages/home/home';

function App() {
    return (
        <div className=" h-auto flex flex-col">
            <Header />
            <Home />
                <div className='lg:text-xl text-4xl'>update task</div>
            <Footer />
        </div>
    );
}

export default App;
