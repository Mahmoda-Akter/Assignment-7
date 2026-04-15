import React from 'react';
import { Link } from 'react-router';




const Card = ({frienditem}) => {
    return (
        <div>
            <Link to={`/${frienditem.id}`} className="card bg-base-100 min-h-[250px] w-full shadow-sm pt-5">
                <figure className='rounded-full h-[50px] w-[50px]   block mx-auto'>
                    <img src={frienditem.picture}
                    className='object-cover'/>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{frienditem.name}</h2>
                    <p>{frienditem.days_since_contact}d ago</p>
                    <p className='p-1 text-center text-gray-500 bg-cyan-200 rounded-4xl'>{frienditem.tags[0]}</p>
                    
                    <div className="card-actions">
                        <button className={`p-1 pl-4 pr-4 rounded-4xl text-center
                        ${frienditem.status==="overdue"?"bg-red-400":""}
                        ${frienditem.status==="on-track"?"bg-green-700":""}
                        ${frienditem.status==="active"?"bg-amber-300":""}`}
                        >{frienditem.status}</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;