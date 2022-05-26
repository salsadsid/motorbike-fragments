import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AddReview = () => {
    const [user, loading] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (loading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        data.email = user?.email
        fetch('https://mysterious-mountain-85694.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast.success('Review Added.')
                }
                else {
                    toast.error('Review not Added.')
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-2xl'>Please give us a review</h2>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <textarea {...register("review", {
                        required: {
                            value: 56,
                            message: 'Review is required'
                        }
                    })} type="text" placeholder="Review" className="input input-bordered input-lg w-full max-w-xs" />
                    <label className="label">
                        {errors.review?.type === 'required' && <span className="label-text-alt text-red-600">{errors.review.message}</span>}

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating: 1-5</span>
                    </label>
                    <input {...register("rating", {
                        required: {
                            value: true,
                            message: 'Rating is required'
                        },
                        min: {
                            value: 1,
                            message: 'greater required'
                        },
                        max: {
                            value: 5,
                            message: 'less required'
                        }
                    })} type="number" placeholder="number" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.rating?.type === 'required' && <span className="label-text-alt text-red-600">{errors.rating.message}</span>}
                        {errors.rating?.type === 'min' && <span className="label-text-alt text-red-600">{errors.rating.message}</span>}
                        {errors.rating?.type === 'max' && <span className="label-text-alt text-red-600">{errors.rating.message}</span>}
                    </label>
                </div>
                <input type="submit" className='btn btn-accent  w-full max-w-xs' value='Add Review' />
            </form>
        </div>
    );
};

export default AddReview;