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
            <div>
                <h1>Loding....</h1>
            </div>
        )
    }
    return (
        <div className='w-[80%] mx-auto mt-10 bg-base-200'>
            <div className='grid grid-cols-4 gap-3'>
                <div className='col-span-1'>
                    <Expectedfriend expecteddata={expecteddata}></Expectedfriend>
                </div>
                <div className='col-span-3 bg-base-200'>
                    <Rightside expecteddata={expecteddata}></Rightside>
                </div>
              
            </div>
        </div>
    );
};

export default Frienddtails;