import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainPage } from '../pages';
import { useLocation } from 'react-router-dom';

const Layout = () => {

    const location = useLocation();
    if (location.pathname === "/") {document.body.style.overflow = "visible";};

    return  (
    <>
        <MainPage/>
        <Outlet/>
    </>
    );
};

export default Layout;