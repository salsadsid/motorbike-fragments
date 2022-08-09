import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const navigate = useNavigate()
    const handlePurchase = id => {
        navigate(`/purchase/${id}`)
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 hover:shadow-xl shadow transition-shadow border border-accent relative overflow-visible">
            <div className='bg-accent absolute right-0 top-[-10px] rounded-2xl font-semibold py-1 px-4'>Available</div>
            <figure className="px-10 pt-10">
                <img src={part.img} alt="Shoes" className="rounded-xl h-48" />

            </figure>

            <div className="card-body font-semibold">

                <h2 className="text-lg first-letter:font-extrabold border-b-2 font-semibold">{part.name}</h2>
                <p><span className='font-bold text-md'>Short Description:</span> {part.description}</p>
                <p>
                    <span className='font-bold'>Price: </span><span className='inline-block rounded px-2 bg-warning-content text-white'>{part.price} <span className='font-bold'>BDT</span></span> /unit
                </p>
                <p><span className='font-bold'>Minimum Order: </span>
                    {part.minimumOrder} units
                </p>
                <p><span className='font-bold text-md'>Available Quantity: </span>
                    {part.availableQuantity} units
                </p>

                <div className="card-actions">
                    <button onClick={() => handlePurchase(part._id)} className="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;