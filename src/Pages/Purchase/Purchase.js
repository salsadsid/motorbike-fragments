import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const Purchase = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth)

    const { data: part, isLoading, refetch } = useQuery(['part'], () =>
        fetch(`http://localhost:5000/purchase/${id}`)
            .then(res => res.json())
    )
    refetch()

    const { register, formState: { errors }, handleSubmit } = useForm();
    if (isLoading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        data.email = user?.email;
        data.productName = part.name;
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast.success('Your Order Placed')
                }
                else {
                    toast.error('Order Already placed')
                }
            })
        refetch();
    }
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <div class="avatar">
                        <div class="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={part.img} alt={part.name} />
                        </div>
                    </div>

                    <h2><span className='font-bold text-3xl'>Product Name: </span><br></br><span className='text-xl font-bold text-accent'>{part.name}</span></h2>
                    <p><span className='font-bold'>Price: </span>{part.price}</p>
                    <p><span className='font-bold'>Minimum Order Quantity: </span>{part.minimumOrder}</p>
                    <p><span className='font-bold'>Available: </span>{part.availableQuantity}</p>

                </div>

                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body items-center text-center">
                        <h2 class="text-2xl font-bold">User Information</h2>
                        <p><span className='font-bold text-xl'>Email: </span>{user?.email}</p>
                        <p><span className='font-bold text-xl'>Name: </span>{user?.displayName}</p>


                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input ref={register} {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone number is required'
                                    }
                                })} type="text" placeholder="Phone Number" className="input input-bordered" />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-600">{errors.phone.message}</span>}

                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is required'
                                    }
                                })} type="text" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-600">{errors.address.message}</span>}

                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Order Quantity</span>
                                </label>
                                <input {...register("number", {
                                    required: {
                                        value: true,
                                        message: 'Order Quantity is required'
                                    },
                                    min: {
                                        value: part.minimumOrder,
                                        message: 'Greater value required'
                                    },
                                    max: {
                                        value: part.availableQuantity,
                                        message: 'Less value required'
                                    }
                                })} type="number" placeholder="Order Quantity" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.number?.type === 'required' && <span className="label-text-alt text-red-600">{errors.number.message}</span>}
                                    {errors.number?.type === 'min' && <span className="label-text-alt text-red-600">{errors.number.message}</span>}
                                    {errors.number?.type === 'max' && <span className="label-text-alt text-red-600">{errors.number.message}</span>}
                                </label>
                            </div>
                            <input type="submit" className='btn btn-secondary w-full max-w-xs' value='Place Order' />
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Purchase;