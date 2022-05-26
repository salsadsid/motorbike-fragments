import React from 'react';
import img from '../../assets/image/banner3.jpg'
const Banner3 = () => {
    return (
        <div class="hero min-h-screen bg-accent">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={img} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold">HAPPINESS</h1>
                    <p class="py-6">The most important thing is to have a good relationship with the bike<br></br> you have to understand what she wants.</p>
                    <button class="btn btn-secondary">JUMP</button>
                </div>
            </div>
        </div>
    );
};

export default Banner3;