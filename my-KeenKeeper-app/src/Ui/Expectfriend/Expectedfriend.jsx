import React from 'react';

const Expectedfriend = ({ expecteddata }) => {
    return (
        <div>
            <div className="card bg-base-100 min-h-[250px] w-full shadow-sm pt-5">
                <figure className='rounded-full h-[50px] w-[50px]   block mx-auto'>
                    <img src={expecteddata.picture}
                        className='object-cover' />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{expecteddata.name}</h2>
                    <button className={`p-1 pl-4 pr-4 rounded-4xl text-center
                        ${expecteddata.status === "overdue" ? "bg-red-400" : ""}
                        ${expecteddata.status === "on-track" ? "bg-green-700" : ""}
                        ${expecteddata.status === "active" ? "bg-amber-300" : ""}`}
                    >{expecteddata.status}</button>
                    <div className="">
                        <div className='flex justify-center gap-2 items-center'>
                            <span className='p-2 text-center text-gray-500 bg-cyan-200 rounded-4xl'>{expecteddata.tags[0]}</span>
                            <span className='p-2 text-center text-gray-500 bg-cyan-200 rounded-4xl'>{expecteddata.tags[1]}</span>
                        </div>
                         <p className='text-gray-400 text-sm mt-2'>{expecteddata.bio}</p>
                        <p>{expecteddata.email}</p>  
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