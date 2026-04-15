import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Component/Navbar/Navber';
import Footer from '../Component/Footer/Footer';

const Rootlayout = () => {
    return (
        <div className='bg-base-200'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Rootlayout;