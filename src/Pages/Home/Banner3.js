import React from 'react';
import img from '../../assets/image/banner3.jpg'
const Banner3 = () => {
    return (
        <div className="hero min-h-screen bg-accent">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="w-80 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">HAPPINESS</h1>
                    <p className="py-6">The most important thing is to have a good relationship with the bike<br></br> you have to understand what she wants.</p>
                    <button className="btn btn-secondary">JUMP</button>
                </div>
            </div>
        </div>
    );
};

export default Banner3;