import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/image/banner.jpg'
const Banner = () => {
    const navigate=useNavigate()
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img}` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-primary">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Motorbike Fragments</h1>
                    <p className="mb-5">Welcome to Motorbike Fragments, your one-stop shop for all your motorbike parts needs! We're dedicated to providing our customers with the best selection of high-quality parts and accessories, at prices that won't break the bank. </p>
                    <button onClick={()=>navigate('/login')} className="btn btn-accent">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;