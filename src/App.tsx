import React from 'react';
import './App.scss';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import Home from 'pages/home/home';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <div>update task</div>
            <Footer />
        </div>
    );
}

export default App;
