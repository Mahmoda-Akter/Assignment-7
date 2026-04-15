import React, { useContext } from 'react';
import useFriend from '../../Hook/useFriend';
import { Timelinefriendcontext } from '../../Contextapi/Contextprovider';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';


const Stats = () => {

    const { timeline } = useContext(Timelinefriendcontext);

    const calllength=timeline.filter(item=> item.type==="call").length
    const textlength=timeline.filter(item=> item.type==="text").length
    const videolength=timeline.filter(item=> item.type==="video").length

    const data = [
        { name: 'call', value: calllength, fill: '#0088FE' },
        { name: 'text', value: textlength, fill: '#00C49F' },
        { name: 'video', value: videolength, fill: '#FFBB28' },
       
    ];
    return (
        <div className='w-[80%] mx-auto'>
            <h1 className=' font-bold text-2xl mt-10'>Friendship Analytics</h1>
            <div className=' bg-base-100 flex flex-col p-8 mt-10 '>
                <h1 className=' font-bold '>By Interaction Type</h1>


                <div className=' flex justify-center items-center'>

                    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '40vh', aspectRatio: 1 }} responsive>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius="50%"
                            fill="#8884d8"
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        <Legend></Legend>
                        <Tooltip></Tooltip>

                    </PieChart>
                </div>
            </div>

        </div>
    );
};

export default Stats;