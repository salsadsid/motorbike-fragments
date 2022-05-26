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
    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(`https://mysterious-mountain-85694.herokuapp.com/booking/${id}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(order)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-8">
                <div className="card-body">
                    <h2 className="card-title">Hello,<span className='text-secondary'>{user?.displayName}</span> </h2>
                    <p>Please pay for : {order.productName}</p>
                    <p>Please Pay: {order.price}</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl my-8">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;