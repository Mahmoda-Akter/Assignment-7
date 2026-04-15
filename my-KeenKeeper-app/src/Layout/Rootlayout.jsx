import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Component/Navbar/Navber';

const Rootlayout = () => {
    return (
        <div className='bg-base-200'>
            <Navber></Navber>
            <Outlet></Outlet>
            <h1>Footer</h1>
        </div>
    );
};

export default Rootlayout;