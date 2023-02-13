import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import img from "../../assets/image/bot.jpg"
const Banner = () => {
  const navigate = useNavigate();
  const [toggle,setToggle]=useState(false)
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1657873961503-89a65459de2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1512457226770-bfa3d6e944b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1528827997138-52e429c75136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1558981001-1995369a39cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    clearInterval(slideInterval);
  };
  const slideInterval = setInterval(prevSlide, 20000);
  const nxtSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    clearInterval(slideInterval);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  if (currentIndex === slides.length - 1) {
    clearInterval(slideInterval);
  }
  return (
    <div className="max-w-full h-[500px] sm:h-[720px] w-full m-auto pb-16 relative group">
<div id="toast-message-cta" class={`absolute mt-2 w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400 ${toggle && `hidden`}`} role="alert">
    <div class="flex">
        <img class="w-8 h-8 rounded-full shadow-lg" src={img} alt="an avatar"/>
        <div class="ml-3 text-sm font-normal">
            <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Bot (for admin-dashboard)</span>
            <div class="mb-0 text-sm font-normal">Email: salman@sal.com<br></br>Pass: 123456</div> 
               
        </div>
        <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-message-cta" aria-label="Close"onClick={()=>setToggle(true)}>
            <span class="sr-only">Close</span>
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    </div>
</div>

      <div
        style={{ backgroundImage: `url(${slides[currentIndex]?.url})` }}
        className="w-full h-full  bg-center bg-cover duration-500"
      ></div>
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 rounded-full bg-black/20 text-white cursor-pointer p-1"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-8 rounded-full bg-black/20 text-white cursor-pointer p-1"
        onClick={nxtSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>
      <div className="absolute top-[50%] -translate-x-0 sm:block hidden">
        <p className="mb-5 w-1/2 mx-auto text-center bg-black/50 p-3 rounded-2xl text-white text-md">
          Welcome to Motorbike Fragments, your one-stop shop for all your
          motorbike parts needs! We're dedicated to providing our customers with
          the best selection of high-quality parts and accessories, at prices
          that won't break the bank.{" "}
        </p>
        <button
          onClick={() => navigate("/login")}
          className="btn btn-accent mx-auto block"
        >
          Get Started
        </button>
      </div>
      <div className="flex justify-center py-2 top-4">
        
        {slides.map((slide, slideIndex) => {
          return (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-5xl cursor-pointer"
            >
              <RxDotFilled size={30}></RxDotFilled>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Banner;
