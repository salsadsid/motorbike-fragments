import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-primary hover:bg-secondary transition duration-500 ease-out hover:ease-in text-primary-content ">
            <div class="card-body">
                <h2 class="card-title">{review.email}</h2>
                <p>{review.review}</p>
                <p><span className='font-bold'>Ratings: </span>{review.rating}</p>
                <div class="card-actions justify-end">
                    <button class="btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Review;