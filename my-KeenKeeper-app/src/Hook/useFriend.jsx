import React, { useEffect, useState } from 'react';

const useFriend = () => {

    const [friend,setfriend]=useState([]);
    const [loding,setloding]=useState(true);

    useEffect(()=>{
        const friendpromise=async ()=>{
            const res=await fetch ('/data.json')
            const frienddata=await res.json()
            // console.log(frienddata);

            setTimeout(() => {
                setfriend(frienddata);
                setloding(false);
            }, 1000);
        };
        friendpromise();
    },[])
    return {friend,loding}
        
    
};

export default useFriend;