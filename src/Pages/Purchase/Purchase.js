import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const Purchase = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth)
    const [value, setValue] = useState(0)
    const [toggleSubmit, setToggleSubmit] = useState(false)
    const navigate=useNavigate()
    const { data: part, isLoading, refetch } = useQuery(['part'], () =>
        fetch(`https://motorbike-fragments.onrender.com/purchase/${id}`)
            .then(res => res.json())
    )
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (isLoading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        data.email = user?.email;
        data.productName = part.name;
        data.price = part.price;
        data.quantity = value;
        fetch('https://motorbike-fragments.onrender.com/booking', {
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
    const handleChange = event => {
        event.preventDefault()

        const value = parseInt(event.target.value)
        if (value >= part.minimumOrder && value <= part.availableQuantity) {
            setToggleSubmit(false)
            setValue(value)
        }
        else {
            setToggleSubmit(true)
        }

    }
    console.log(toggleSubmit)
    return (
        // <div className="hero min-h-screen bg-base-200">
        //     <div className="hero-content flex-col lg:flex-row-reverse">
        //         <div className="text-center lg:text-left">
        //             <div className="avatar">
        //                 <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        //                     <img src={part.img} alt={part.name} />
        //                 </div>
        //             </div>

        //             <h2><span className='font-bold text-xl'>Product Name: </span><br></br><span className='text-xl font-bold text-accent'>{part.name}</span></h2>
        //             <p><span className='font-bold'>Price: </span>{part.price}</p>
        //             <p><span className='font-bold'>Minimum Order Quantity: </span>{part.minimumOrder}</p>
        //             <p><span className='font-bold'>Available: </span>{part.availableQuantity}</p>
        //             <label className="label">
        //                 <span className="label-text">Quantity</span>
        //             </label>
        //             <input defaultValue={part.minimumOrder} className='input max-w-xs' onChange={handleChange} />


        //         </div>

        //         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        //             <div className="card-body items-center text-center">
        //                 <h2 className="text-2xl font-bold">User Information</h2>
        //                 <p><span className='font-bold text-xl'>Email: </span>{user?.email}</p>
        //                 <p><span className='font-bold text-xl'>Name: </span>{user?.displayName}</p>


        //                 <form onSubmit={handleSubmit(onSubmit)}>
        //                     <div className="form-control w-full max-w-xs">
        //                         <label className="label">
        //                             <span className="label-text">Phone</span>
        //                         </label>
        //                         <input ref={register} {...register("phone", {
        //                             required: {
        //                                 value: true,
        //                                 message: 'Phone number is required'
        //                             }
        //                         })} type="text" placeholder="Phone Number" className="input input-bordered" />
        //                         <label className="label">
        //                             {errors.phone?.type === 'required' && <span className="label-text-alt text-red-600">{errors.phone.message}</span>}

        //                         </label>
        //                     </div>
        //                     <div className="form-control w-full max-w-xs">
        //                         <label className="label">
        //                             <span className="label-text">Address</span>
        //                         </label>
        //                         <input {...register("address", {
        //                             required: {
        //                                 value: true,
        //                                 message: 'Address is required'
        //                             }
        //                         })} type="text" placeholder="Address" className="input input-bordered w-full max-w-xs" />
        //                         <label className="label">
        //                             {errors.address?.type === 'required' && <span className="label-text-alt text-red-600">{errors.address.message}</span>}

        //                         </label>
        //                     </div>
        //                     <input type="submit" className='btn btn-secondary w-full max-w-xs' value='Place Order' disabled={toggleSubmit} />
        //                 </form>
        //             </div>
        //         </div>
        //     </div>

        // </div >
        <div class="h-screen bg-gray-300">
	<div class="py-12">
    <div class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
        <div class="md:flex ">
            <div class="w-full p-4 px-5 py-5">
            	<div class="md:grid md:grid-cols-3 gap-2 ">
            		<div class="col-span-2 p-5">
            			<h1 class="text-xl font-medium ">Shopping Cart</h1>
            			<div class="sm:flex flex-col justify-between items-center mt-6 pt-6">
            				<div class="sm:flex flex-col justify-center items-center">
            					<img src={part.img} width="200" class="rounded-full "/>
            					<div class="flex flex-col justify-center items-center ml-3 my-4">
            						<span class="md:text-xl font-bold">{part.name}</span>
            						<span class="text-sm font-light text-gray-600">Details: {part.description}</span>
                                    <span class="md:text-sm font-sm">Minimun Order: {part.minimumOrder}</span>		
                                    <span class="md:text-sm font-sm">Available Quantity: {part.availableQuantity}</span>		
            					</div>		
            				</div>
            				<div class="flex justify-center items-center">  					
            					
            					<div className='flex items-center'>					
            						<span class="text-lg font-bold">Price: {part.price} টাকা </span>
            					</div>
            					<div>
            						<i class="fa fa-close text-xs font-medium"></i>
            					</div>
            				</div> 				
            			</div>
            			
            			
            			<div class="flex justify-end items-center mt-6 pt-6 border-t"> 
            				<div class="flex justify-center items-end">
            					<span class="text-sm font-medium text-gray-400 mr-1">Subtotal: </span>
            					<span class="text-xl font-bold text-gray-800 "> {value*part.price} টাকা
                                </span>     					
            				</div>    				
            			</div>
            		</div>
            		<div class=" p-5 bg-gray-800 rounded overflow-visible">
            			{/* <span class="text-xl font-medium text-gray-100 block pb-3">Card Details</span>
            			<span class="text-xs text-gray-400 ">Card Type</span>
            			{/* <div class="overflow-visible flex justify-between items-center mt-2">
            				<div class="rounded w-52 h-28 bg-gray-500 py-2 px-4 relative right-10">
         					<span class="italic text-lg font-medium text-gray-200 underline">VISA</span>
            					<div class="flex justify-between items-center pt-4 ">           						
          						<span class="text-xs text-gray-200 font-medium">****</span>
            						<span class="text-xs text-gray-200 font-medium">****</span>
            						<span class="text-xs text-gray-200 font-medium">****</span>
            						<span class="text-xs text-gray-200 font-medium">****</span>
            					</div>
            					<div class="flex justify-between items-center mt-3">            						
            						<span class="text-xs  text-gray-200">Giga Tamarashvili</span>
            						<span class="text-xs  text-gray-200">12/18</span>
            					</div>        					
            				</div>
            				<div class="flex justify-center  items-center flex-col">
            					<img src="https://img.icons8.com/color/96/000000/mastercard-logo.png" width="40" class="relative right-5" />
            					<span class="text-xs font-medium text-gray-200 bottom-2 relative right-5">mastercard.</span>         					
            				</div>   				
            			</div> */}
      			{/* <div class="flex justify-center flex-col pt-3">
            				<label class="text-xs text-gray-400 ">Name on Card</label>
            				<input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="Giga Tamarashvili"/>
            			</div>
            			<div class="flex justify-center flex-col pt-3">
            				<label class="text-xs text-gray-400 ">Card Number</label>
            				<input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="****     ****      ****      ****"/>
            			</div>
            			<div class="grid grid-cols-3 gap-2 pt-2 mb-3">
            				<div class="col-span-2 ">
            					<label class="text-xs text-gray-400">Expiration Date</label>
            					<div class="grid grid-cols-2 gap-2">
            						<input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="mm"/>
            						<input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="yyyy"/>  						
            					</div>      					
            				</div>
            				<div class="">
            					<label class="text-xs text-gray-400">CVV</label>
            					<input type="text" class="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="XXX"/>
            				</div>
            			</div> */}
  			{/* <button class="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600">Check Out</button> */}
              <h2 className="text-2xl text-gray-200 font-bold border-b my-2">Order Details</h2>
                        <p className='text-gray-200'><span className='text-xl text-gray-200'>Email: </span>{user?.email}</p>
                     <p className='text-gray-200 mb-2'><span className='text-xl text-gray-200'>Name: </span>{user?.displayName}</p>
                     
              <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs mt-4">
                    <input type="number" className='focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4 my-4 block' placeholder='Quantity' onChange={handleChange} />
                           
                                <input ref={register} {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone number is required'
                                    }
                                })} type="text" placeholder="Phone Number" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" />
                                 <label className="label">
                                     {errors.phone?.type === 'required' && <span className="label-text-alt text-red-600">{errors.phone.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs mb-4">
                                 
                                 <input {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is required'
                                    }
                                })} type="text" placeholder="Address" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-600">{errors.address.message}</span>}

                                </label>
                            </div>
                            <input type="submit" className='btn btn-accent w-full max-w-xs' value='Place Order' disabled={toggleSubmit} />
                        </form>
            </div>       		    
            	</div>
           </div>
        </div>
    </div>
    </div>
</div>
    );
};

export default Purchase;