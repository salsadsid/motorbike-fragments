import src from 'daisyui';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/image/banner.jpg';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
const Banner = () => {
    const navigate=useNavigate()
    const slides=[
        {
            url:"https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
        {
            url:"https://images.unsplash.com/photo-1657873961503-89a65459de2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
        },
        {
            url:"https://images.unsplash.com/photo-1512457226770-bfa3d6e944b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
        },
        {
            url:"https://images.unsplash.com/photo-1528827997138-52e429c75136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
        {
            url:"https://images.unsplash.com/photo-1558981001-1995369a39cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        },
    ]

    const [currentIndex,setCurrentIndex] =useState(0)

    const prevSlide=()=>{
        const isFirstSlide= currentIndex===0
        const newIndex= isFirstSlide ? slides.length-1 : currentIndex-1 
        setCurrentIndex(newIndex)
    }
    const nxtSlide=()=>{
        const isLastSlide= currentIndex===slides.length-1
        const newIndex= isLastSlide ? 0 : currentIndex+1 
        setCurrentIndex(newIndex)
    }
    const goToSlide = (slideIndex)=>{
        setCurrentIndex(slideIndex)
    }
    return  (
        // <div className="hero min-h-screen" style={{ backgroundImage: `url(${img}` }}>
        //     <div className="hero-overlay bg-opacity-60"></div>
        //     <div className="hero-content text-center text-primary">
        //         <div className="max-w-md">
        //             <h1 className="mb-5 text-5xl font-bold">Motorbike Fragments</h1>
        //             <p className="mb-5">Welcome to Motorbike Fragments, your one-stop shop for all your motorbike parts needs! We're dedicated to providing our customers with the best selection of high-quality parts and accessories, at prices that won't break the bank. </p>
        //             <button onClick={()=>navigate('/login')} className="btn btn-accent">Get Started</button>
        //         </div>
        //     </div>
        // </div>
        <div className='max-w-full h-[500px] sm:h-[720px] w-full m-auto pb-16 relative group'>
            <div style={{backgroundImage:`url(${slides[currentIndex]?.url})`}} 
            className="w-full h-full  bg-center bg-cover duration-500"
            >
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 rounded-full bg-black/20 text-white cursor-pointer p-1'>
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
            
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-8 rounded-full bg-black/20 text-white cursor-pointer p-1'>
            <BsChevronCompactRight onClick={nxtSlide} size={30}/>

            </div>
            <div className='absolute top-[50%] -translate-x-0 sm:block hidden'>
            <p className="mb-5 w-1/2 mx-auto text-center bg-black/50 p-3 rounded-2xl text-white text-md">Welcome to Motorbike Fragments, your one-stop shop for all your motorbike parts needs! We're dedicated to providing our customers with the best selection of high-quality parts and accessories, at prices that won't break the bank. </p>
                    <button onClick={()=>navigate('/login')} className="btn btn-accent mx-auto block">Get Started</button>
            </div>
            <div className='flex justify-center py-2 top-4'>
                {
                    slides.map((slide,slideIndex)=>{
                        return <div
                        key={slideIndex}
                        onClick={()=>goToSlide(slideIndex)}
                        className='text-5xl cursor-pointer'
                        >
                            <RxDotFilled size={30}></RxDotFilled>
                           
                        </div>
                    })
                }
            </div>
        </div>
        
    );
};

export default Banner;