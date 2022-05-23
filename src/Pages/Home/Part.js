import React from 'react';

const Part = ({ part }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={part.img} alt="Shoes" class="rounded-xl h-48" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{part.name}</h2>
                <p>{part.description}</p>
                <p><span className='font-bold'>Price: </span>{part.price} <span className='font-bold'>BDT</span></p>
                <p><span className='font-bold'>Minimum Order: </span>{part.minimumOrder}</p>
                <p><span className='font-bold'>Available Quantity: </span>{part.availableQuantity}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;