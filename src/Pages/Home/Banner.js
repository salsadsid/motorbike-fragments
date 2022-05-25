import React from 'react';
import img from '../../assets/image/banner.jpg'
const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ backgroundImage: `url(${img}` }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-primary">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Motorbike Fragments</h1>
                    <p class="mb-5">Motorbike Fragment is a Motorbike Parts Manufacturing Company.Our Market Size is 22 Million USD. We promised to grow our company.</p>
                    <button class="btn btn-accent">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;