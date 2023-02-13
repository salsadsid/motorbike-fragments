import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import Part from './Part';
import img from "../../assets/image/salsadsid.jpg"
const Parts = () => {
    const navigate=useNavigate()
    
  const [toggle,setToggle]=useState(false)
    const { data: parts, isLoading } = useQuery('parts', () => fetch(`https://motorbike-fragments.onrender.com/part`).then(res => res.json(),{retry: 5})
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    
    return (
        <div className='sm:my-16 my-8 sm:mx-8 mx-2 relative'>
          
            <h2 id="motorbike-parts" style={{fontFamily:"'Gugi', monospace"}} className='sm:text-4xl text-2xl text-center text-secondary relative lg:text-left'>Motorbike Spare Parts</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-8 relative'>
            <div id="toast-message-cta" class={`absolute bottom-0 w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400 ${toggle && `hidden`}`} role="alert">
    <div class="flex">
        <img class="w-8 h-8 rounded-full shadow-lg" src={img}/>
        <div class="ml-3 text-sm font-normal">
            <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Bot</span>
            <div class="mb-2 text-sm font-normal">Hi There, Sign up for experience user-dashboard features. For admin-dashboard:<br></br>email: salman@sal.com<br></br>pass: 123456</div> 
               
        </div>
        <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-message-cta" aria-label="Close"onClick={()=>setToggle(true)}>
            <span class="sr-only">Close</span>
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    </div>
</div>
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
               class="flex rounded bg-accent px-12 py-3 text-sm font-medium text-secondary transition hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300"
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