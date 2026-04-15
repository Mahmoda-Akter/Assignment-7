import React, { useContext, useState } from 'react';
import { Timelinefriendcontext } from '../../Contextapi/Contextprovider';
import { IoCallSharp } from "react-icons/io5";
import { IoMdText } from "react-icons/io";
import { IoMdVideocam } from "react-icons/io";
import { MdOutlineArrowCircleRight } from 'react-icons/md';


const Timeline = () => {
    const { timeline } = useContext(Timelinefriendcontext)
    const [filterd,setfiltred]=useState(timeline);

    const callbtn=(call)=>{
        const filtercall=timeline.filter(item=> item.type===call)
        setfiltred(filtercall)
        // console.log(filtercall);
    }
    const textbtn=(text)=>{
        const filtercall=timeline.filter(item=> item.type===text)
        setfiltred(filtercall)
        // console.log(filtercall);
    }
    const videobtn=(video)=>{
        const filtercall=timeline.filter(item=> item.type===video)
        setfiltred(filtercall)
        // console.log(filtercall);
    }
    console.log(timeline, "from timeline");
    return (
        <div className='w-[80%] mx-auto'>
            <h1 className=' text-3xl font-bold mt-10 text-green-600'>Timeline</h1>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Filter timeline</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=>callbtn('call')}><a>call</a></li>
                    <li onClick={()=>textbtn('text')}><a>text</a></li>
                    <li onClick={()=>videobtn('video')}><a>video</a></li>
                </ul>
            </div>
            

            {
                filterd.map(timelinedata => {
                    
                    return (
                        
                        <div className=' mt-10 '>
                            <div className='flex gap-4 bg-base-100 p-7'>
                                <div className='flex justify-center items-center text-3xl'>
                                    {timelinedata.type === "call" && <IoCallSharp />}
                                    {timelinedata.type === "text" && <IoMdText />}
                                    {timelinedata.type === "video" && <IoMdVideocam />}
                                </div>

                                <div>
                                    <h1 className='text-xl font-bold'>{timelinedata.name}</h1>
                                    <h1 >{new Date().toLocaleDateString()}</h1>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Timeline;