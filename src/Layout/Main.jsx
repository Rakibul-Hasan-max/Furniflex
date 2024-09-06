import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Header></Header>
            <Footer></Footer>
        </div>
    );
};

export default Main;