import React from 'react';
import { NavLink } from 'react-router';
import { IoHomeOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to={'/'}
                                className={({ isActive }) => {
                                    return `${isActive ? "bg-green-700 text-white" : ""}`
                                }}
                            >Home</NavLink></li>
                            <li><NavLink to={'/Timeline'}
                                className={({ isActive }) => {
                                    return `${isActive ? "bg-green-700 text-white" : ""}`
                                }}
                            >Timeline</NavLink></li>
                            <li><NavLink to={'/Stats'}
                                className={({ isActive }) => {
                                    return `${isActive ? "bg-green-700 text-white" : ""}`
                                }}
                            >Stats</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-bold"><span className='text-green-700'>Keen</span>Keeper</a>
                </div>
                <div className="navbar-center hidden lg:flex mr-12">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={'/'}
                            className={({ isActive }) => {
                                return `${isActive ? "bg-green-700 text-white" : ""}`
                            }}
                        ><IoHomeOutline /> Home</NavLink></li>
                        <li><NavLink to={'/Timeline'}
                            className={({ isActive }) => {
                                return `${isActive ? "bg-green-700 text-white" : ""}`
                            }}
                        ><IoTimeOutline /> Timeline</NavLink></li>
                        <li><NavLink to={'/Stats'}
                            className={({ isActive }) => {
                                return `${isActive ? "bg-green-700 text-white" : ""}`
                            }}
                        ><ImStatsDots /> Stats</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;