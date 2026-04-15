import React from 'react';
import useFriend from '../../Hook/useFriend';
import { useParams } from 'react-router';
import Card from '../../Ui/Card';
import Expectedfriend from '../../Ui/Expectfriend/Expectedfriend';
import Rightside from '../../Ui/RightsideLayout/Rightside';
import { Timelinefriendcontext } from '../../Contextapi/Contextprovider';

const Frienddtails = () => {
    const { id } = useParams()
    // console.log(typeof id)

    const { friend, loding } = useFriend();
    // console.log(friend)
    const expecteddata = friend.find((frienditem) => String(frienditem.id) === id)
    // console.log(expecteddata)

   
    

    if (loding) {
        return (
            <div className='col-span-full flex justify-center items-center h-[250px]'>
                <span className="loading loading-spinner loading-xl bg-green-700 text-center block"></span>
            </div>
        )
    }
    return (
        <div className='w-[80%] mx-auto mt-10 bg-base-200'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                <div className='sm:col-span-1 md:col-span-2 lg:col-span-1'>
                    <Expectedfriend expecteddata={expecteddata}></Expectedfriend>
                </div>
                <div className='sm:col-span-1 md:col-span-2 lg:col-span-3 bg-base-200'>
                    <Rightside expecteddata={expecteddata}></Rightside>
                </div>
              
            </div>
        </div>
    );
};

export default Frienddtails;