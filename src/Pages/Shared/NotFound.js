import React from 'react';
import img from '../../assets/image/not-found.jpg'
const NotFound = () => {
    return (
        <div>
            <div>
                <h3 className='text-center text-secondary mt-12 text-4xl font-bold'>Page Not Found</h3>
                <div className='flex justify-center mt-4'>
                    <img className='w-96' src={img} alt="" />
                </div>

            </div>
        </div>
    );
};

export default NotFound;