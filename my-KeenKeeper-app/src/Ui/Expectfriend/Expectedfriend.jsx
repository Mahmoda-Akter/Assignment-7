import React from 'react';

const Expectedfriend = ({ expecteddata }) => {
    return (
        <div>
            <div className="card bg-base-100 h-[250px] w-full shadow-sm pt-5">
                <figure className="">
                    <img src={expecteddata.picture}
                        className='rounded-full h-[70px] w-[70px]  object-cover block mx-auto' />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{expecteddata.name}</h2>
                    <p>A card component has a figure</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>

            </div>
            <div className='mt-4 flex flex-col gap-3'>
                <h1 className='bg-base-100 p-2 shadow-sm text-center font-bold'>Snooze 2 weeks</h1>
                <h1 className='bg-base-100 p-2 shadow-sm text-center font-bold'>Archive</h1>
                <h1 className='bg-base-100 p-2 shadow-sm text-center font-bold'>Delete</h1>
            </div>
        </div>
    );
};

export default Expectedfriend;