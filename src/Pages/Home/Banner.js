import React from 'react';
import img from '../../assets/image/banner.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img}` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-primary">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Motorbike Fragments</h1>
                    <p className="mb-5">Motorbike Fragment is a Motorbike Parts Manufacturing Company.Our Market Size is 22 Million USD. We promised to grow our company.</p>
                    <button className="btn btn-accent">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;