import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const stripePromise = loadStripe('pk_test_51L3PO7CXM0Suko1ErN7z40ESh8tbaBQiqOKziKKB1ZaDZARQGQ1GEBKInmuxYdCSZDwaNT0hIEgCWg8EpfORRs2x00x6ocY1Bf');
const Payment = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth)
    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(`https://motorbike-fragments.onrender.com/booking/${id}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    )
    if (isLoading || !order) {
        return <Loading></Loading>
    }
    console.log(order)
    return (
        
        <div class="py-12">
        <div class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
            <div class="md:flex ">
                <div class="w-full p-4 px-5 py-5">
                    <h2 style={{fontFamily:"fantasy"}} className='text-2xl text-center text-secondary my-3 border-b'>Payment</h2>
                    <div class="md:grid md:grid-cols-2 gap-4 ">
            <div className="bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 style={{fontFamily:"fantasy"}} className='text-xl text-secondary my-3'>Hello,<span className='text-secondary'> {user?.displayName}</span> </h2>
                    <p>Email : <span className='text-md font-light text-gray-600'>{order?.email}</span></p>
                    <p>Phone : <span className='text-md font-light text-gray-600'>{order?.phone}</span></p>
                    <p>Phone : <span className='text-md font-light text-gray-600'>{order?.address}</span></p>
                    <p>Product : <span className='text-md font-light text-gray-600'>{order?.productName}</span></p>
                    <p>Unit Price : <span className='text-md font-light text-gray-600'>{order?.price}</span></p>
                    <p>Quantity : <span className='text-md font-light text-gray-600'>{order?.quantity}</span></p>
                    <p>Total Payable: <span className='text-md font-md text-gray-600'>{order?.price*order?.quantity}</span></p>
                </div>
            </div>
            <div className="bg-base-100 shadow-xl">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        
    );
};

export default Payment;