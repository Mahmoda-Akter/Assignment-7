import React from 'react';
import { FaPlus } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='bg-base-200'>
            <div className="hero bg-base-200 p-10">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-4xl font-bold">Friends to keep close in your life</h1>
                        <p className="py-6 text-sm max-w-md">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                        </p>
                        <button className="btn  bg-green-700 text-white"><FaPlus /> Get Started</button>
                    </div>
                </div>

            </div>
            <div className='w-[80%] mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                <div className='bg-white rounded-2xl p-10 text-center shadow-md'>
                    <h1 className='text-xl font-bold'>10</h1>
                    <p className='text-green-600'>Total Friends</p>
                </div>
                <div className='bg-white rounded-2xl p-10 text-center shadow-md'>
                    <h1 className='text-xl font-bold'>3</h1>
                    <p className='text-green-600'>On Track</p>
                </div>
                <div className='bg-white rounded-2xl p-10 text-center shadow-md'>
                    <h1 className='text-xl font-bold'>6</h1>
                    <p className='text-green-600'>Need Attention</p>
                </div>
                <div className='bg-white rounded-2xl p-10 text-center shadow-md'>
                    <h1 className='text-xl font-bold'>12</h1>
                    <p className='text-green-600'>Interactions This Month</p>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;