import React from 'react';
import img from '../../assets/image/banner2.jpg'
const Banner2 = () => {
    return (
        <div class="hero min-h-screen bg-primary my-16">
            <div class="hero-content flex-col lg:flex-row">
                <img src={img} className='w-96 rounded-lg' />
                <div>
                    <h1 class="text-5xl font-bold">Ride a bike!</h1>
                    <p class="py-6">Do not compete with anyone in the race of life. Compete with yourself. Life may not be about your bike, but it sure helps you get through it.</p>
                    <button class="btn btn-accent">RIDE A BIKE</button>
                </div>
            </div>
        </div>
    );
};

export default Banner2;