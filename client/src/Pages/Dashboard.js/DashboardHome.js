import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from "../../assets/image/banner.png"
const DashboardHome = () => {
    const navigate=useNavigate()
    return (
        <div>
            <div className='mt-8'>
                <img src={img} alt="welcone-banner" className='rounded' srcset="" />
            </div>
            <div className='flex justify-center'>
            <button
               onClick={()=>navigate('/dashboard/profile')}
               class="group my-6 flex w-full items-center justify-center rounded-md bg-accent px-5 py-3 text-secondary transition focus:outline-none focus:ring focus:ring-yellow-400 sm:w-auto"
             >
               <span class="text-sm font-medium"> Personal Information </span>
     
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

export default DashboardHome;