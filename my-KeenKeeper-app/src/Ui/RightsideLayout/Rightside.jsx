import React from 'react';

import Quickcheck from '../Quickcheck/Quickcheck';

const Rightside = ({ expecteddata }) => {



    return (
        <div className='bg-base-200'>
            <div className='grid grid-cols-3   gap-3 '>
                <div className='bg-base-100 shadow-sm  text-center p-10' >
                    <h1 className='font-bold'>{expecteddata.days_since_contact}</h1>
                    <h1 className='text-gray-400'>Days Since Contact</h1>
                </div>
                <div className='bg-base-100 shadow-sm  text-center p-10'>
                    <h1 className='font-bold'>{expecteddata.goal}</h1>
                    <h1 className='text-gray-400'>Goal (Days)</h1>
                </div>
                <div className='bg-base-100 shadow-sm  text-center p-10'>
                    <h1 className='font-bold'>{expecteddata.next_due_date}</h1>
                    <h1 className='text-gray-400'>Next Due</h1>
                </div>
            </div>
            <div className='bg-base-100 p-4 mt-5'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-bold'>Relationship Goal</h1>
                    <button className='p-1 bg-gray-200'>Edit</button>
                </div>
                <p className='mt-3 text-gray-400'>Connect every <span className='font-bold text-black'>30 days</span></p>
            </div>
            <div className='bg-base-100'>
               
              <Quickcheck expecteddata={expecteddata}></Quickcheck>
            </div>

        </div>
    );
};

export default Rightside;