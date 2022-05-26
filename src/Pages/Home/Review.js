import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-200 hover:bg-primary transition duration-500 ease-out hover:ease-in hover:cursor-pointer">
            <div className="card-body">
                <h2 className="card-title text-secondary ">{review.email}</h2>
                <p>{review.review}</p>
                <p className='text-secondary '><span className='font-bold'>Ratings: </span>{review.rating} /5</p>
            </div>
        </div>
    );
};

export default Review;