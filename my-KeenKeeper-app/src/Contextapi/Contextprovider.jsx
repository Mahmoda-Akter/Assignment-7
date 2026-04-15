import React, { createContext, useState } from 'react';

export const Timelinefriendcontext=createContext();

const Contextprovider = ({children}) => {
     const [timeline,settimeline]=useState([])

    const data={
        timeline,
        settimeline
    }
    return <Timelinefriendcontext.Provider value={data}>{children}</Timelinefriendcontext.Provider>
    
};

export default Contextprovider;