import React, { useContext } from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { Timelinefriendcontext } from '../../Contextapi/Contextprovider';

const Quickcheck = ({expecteddata}) => {
     const {timeline,settimeline}=useContext(Timelinefriendcontext)
    // console.log(timeline)

    const handelcall=()=>{
        console.log("call click")
        settimeline([...timeline,{...expecteddata,type:"call"}])
        
    }
    const handeltext=()=>{
        console.log("text click")
        settimeline([...timeline,{...expecteddata,type:"text" }])
        
    }
    const handelvideo=()=>{
        console.log("video click")
        settimeline([...timeline,{...expecteddata,type:"video"}])
        
    }
    // console.log(expecteddata);
    // console.log(timeline);
    return (
        <div>
            <div className='bg-base-100 p-4 mt-5'>
                <h1>Quick Check-In</h1>
                <div className='grid grid-cols-3   gap-3 mt-3'>
                    <div onClick={()=> handelcall()} className='bg-base-200 shadow-sm  text-center p-4' >
                        <div className="flex justify-center items-center text-2xl">
                            <FiPhoneCall />
                        </div>
                        <h1  className='text-black font-bold mt-2'>Call</h1>
                    </div>
                    <div onClick={()=> handeltext()} className='bg-base-200 shadow-sm  text-center p-4' >
                        <div className="flex justify-center items-center text-2xl">
                            <MdOutlineTextsms />
                        </div>
                        <h1 className='text-black font-bold mt-2'>Text</h1>
                    </div>
                    <div onClick={()=> handelvideo()} className='bg-base-200 shadow-sm  text-center p-4' >
                        <div className="flex justify-center items-center text-2xl">
                            <IoVideocamOutline />
                        </div>
                        <h1 className='text-black font-bold mt-2'>Video</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Quickcheck;