import React from 'react';
import img from '../../assets/image/banner2.jpg'
const Banner2 = () => {
    return (
        <div className="hero min-h-screen bg-primary my-16">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className='w-80 rounded-lg' alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Ride a bike!</h1>
                    <p className="py-6">Do not compete with anyone in the race of life. Compete with yourself. Life may not be about your bike, but it sure helps you get through it.</p>
                    <button className="btn btn-accent">RIDE A BIKE</button>
                </div>
            </div>
        </div>
    );
};

export default Banner2;