import React from 'react';
import useFriend from '../../Hook/useFriend';
import Card from '../../Ui/Card';


const Friends = () => {

    const { friend, loding } = useFriend();
    console.log(friend, "from friend");
    console.log(loding);
    return (
        <div className='w-[80%] mx-auto mt-10 bg-base-200'>
            <h1 className='font-bold text-2xl'>Your Friends</h1>
            <div className='grid sm: grid-cols-1 justify-center md:grid-cols-2  lg:grid-cols-4 gap-4 mt-10'>
                
                {
                   loding?<div className='col-span-full flex justify-center items-center h-[250px]'><span className="loading loading-spinner loading-xl bg-green-700 text-center block"></span></div>: 
                   friend.map(frienditem => <Card frienditem={frienditem}></Card>)
                }
            </div>
        </div>
    );
};

export default Friends;