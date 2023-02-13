import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Part from './Part';

const Parts = () => {
    const navigate=useNavigate()
    const { data: parts, isLoading } = useQuery('parts', () => fetch(`https://motorbike-fragments.onrender.com/part`).then(res => res.json(),{retry: 5})
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    
    return (
        <div className='sm:my-16 my-8 sm:mx-8 mx-2 relative'>
          
            <h2 id="motorbike-parts" style={{fontFamily:"'Gugi', monospace"}} className='sm:text-4xl text-2xl text-center text-secondary relative lg:text-left'>Motorbike Spare Parts</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-8'>
                {
                    [...parts].slice(1,13).map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
            <div className='flex justify-end'>
                <button
               onClick={()=>navigate('/allproducts')}
               class="group my-6 flex w-full items-center justify-center rounded-md bg-accent px-5 py-3 text-secondary transition focus:outline-none focus:ring focus:ring-yellow-400 sm:w-auto"
             >
               <span class="text-sm font-medium"> All Products </span>
     
               <svg
                 class="ml-3 h-5 w-5"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M17 8l4 4m0 0l-4 4m4-4H3"
                 />
               </svg>
             </button>
            </div>
        </div>
    );
};

export default Parts;