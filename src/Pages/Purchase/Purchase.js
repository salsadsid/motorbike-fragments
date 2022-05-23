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

    const { register, formState: { errors }, handleSubmit } = useForm(
        {
            defaultValues: {
                number: 5,
            }
        }
    );
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
        <div className=''>
            <div class="card lg:card-side bg-base-100 shadow-xl w-96 mx-auto">
                <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{part.name}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
            <div class="card w-96 shadow-xl mx-auto bg-primary">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">User Info</h2>
                    <p><span>Email: </span>{user?.email}</p>
                    <p><span>Name: </span>{user?.displayName}</p>


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
                            })} type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
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
                                <span className="label-text">NUmber</span>
                            </label>
                            <input {...register("number", {
                                required: {
                                    value: true,
                                    message: 'Quantity is required'
                                },
                                min: {
                                    value: part.minimumOrder,
                                    message: 'greater required'
                                },
                                max: {
                                    value: part.availableQuantity,
                                    message: 'less required'
                                }
                            })} type="number" placeholder="number" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.number?.type === 'required' && <span className="label-text-alt text-red-600">{errors.number.message}</span>}
                                {errors.number?.type === 'min' && <span className="label-text-alt text-red-600">{errors.number.message}</span>}
                                {errors.number?.type === 'max' && <span className="label-text-alt text-red-600">{errors.number.message}</span>}
                            </label>
                        </div>
                        <input type="submit" className='btn  w-full max-w-xs' value='Login' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;