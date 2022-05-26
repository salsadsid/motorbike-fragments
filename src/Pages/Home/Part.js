import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const navigate = useNavigate()
    const handlePurchase = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={part.img} alt="Shoes" className="rounded-xl h-48" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{part.name}</h2>
                <p>{part.description}</p>
                <p><span className='font-bold'>Price: </span>{part.price} <span className='font-bold'>BDT</span></p>
                <p><span className='font-bold'>Minimum Order: </span>{part.minimumOrder}</p>
                <p><span className='font-bold'>Available Quantity: </span>{part.availableQuantity}</p>
                <div className="card-actions">
                    <button onClick={() => handlePurchase(part._id)} className="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;