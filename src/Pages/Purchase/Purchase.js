import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [value, setValue] = useState(0);
  const [toggleSubmit, setToggleSubmit] = useState(false);
  const navigate = useNavigate();
  const {
    data: part,
    isLoading,
    refetch,
  } = useQuery(["part"], () =>
    fetch(`https://motorbike-fragments.onrender.com/purchase/${id}`).then((res) => res.json())
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if (isLoading) {
    return <Loading></Loading>;
  }
  const onSubmit = (data) => {
    data.email = user?.email;
    data.productName = part.name;
    data.price = part.price;
    data.quantity = value;
    fetch("https://motorbike-fragments.onrender.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success("Your Order Placed");
          navigate("/dashboard/order");
        } else {
          toast.error("Order Already placed");
        }
      });
    refetch();
  };
  const handleChange = (event) => {
    event.preventDefault();

    const value = parseInt(event.target.value);
    if (value >= part.minimumOrder && value <= part.availableQuantity) {
      setToggleSubmit(false);
      setValue(value);
    } else {
      setToggleSubmit(true);
    }
  };
  console.log(toggleSubmit);
  return (
    <div class="h-screen bg-gray-300">
      <div class="py-12">
        <div class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
          <div class="md:flex ">
            <div class="w-full p-4 px-5 py-5">
              <div class="md:grid md:grid-cols-3 gap-2 ">
                <div class="col-span-2 p-5">
                  <h1 class="text-xl font-medium ">Shopping Cart</h1>
                  <div class="sm:flex flex-col justify-between items-center mt-6 pt-6">
                    <div class="flex-col justify-center items-center">
                      <div className="flex justify-center">
                        <img
                          src={part.img}
                          width="200"
                          class="rounded-full"
                          alt=""
                        />
                      </div>
                      <div class="flex flex-col justify-center items-center ml-3 my-4">
                        <span class="md:text-xl font-bold">{part.name}</span>
                        <span class="text-sm font-light text-gray-600">
                          Details: {part.description}
                        </span>
                        <span class="md:text-sm font-sm">
                          Minimun Order: {part.minimumOrder}
                        </span>
                        <span class="md:text-sm font-sm">
                          Available Quantity: {part.availableQuantity}
                        </span>
                        <span class="text-lg font-bold">
                          Price: {part.price} টাকা{" "}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="flex justify-end items-center mt-6 pt-6 border-t">
                    <div class="flex justify-center items-end">
                      <span class="text-sm font-medium text-gray-400 mr-1">
                        Subtotal:{" "}
                      </span>
                      <span class="text-xl font-bold text-gray-800 ">
                        {" "}
                        {value * part.price} টাকা
                      </span>
                    </div>
                  </div>
                </div>
                <div class=" p-5 bg-gray-800 rounded overflow-visible">
                  <h2 className="text-xl font-medium  text-gray-200  border-b my-2">
                    Order Details
                  </h2>
                  <p className="text-gray-200">
                    <span className="text-lg text-gray-200">Email: </span>
                    {user?.email}
                  </p>
                  <p className="text-gray-200 mb-2">
                    <span className="text-lg text-gray-200">Name: </span>
                    {user?.displayName}
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs mt-4">
                      <input
                      ref={register}
                      {...register("quantity", {
                        required: {
                          value: true,
                          message: "Quantity must between Minimum order & Available Quantity",
                        },
                      })}
                        type="number"
                        className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4 block"
                        placeholder="Quantity"
                        onChange={handleChange}
                      />
                      <label className="label">
                        {errors.quantity?.type === "required" && (
                          <span className="label-text-alt text-red-600">
                            {errors.quantity.message}
                          </span>
                        )}
                      </label>
                      <input
                        ref={register}
                        {...register("phone", {
                          required: {
                            value: true,
                            message: "Phone number is required",
                          },
                        })}
                        type="text"
                        placeholder="Phone Number"
                        className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                      />
                      <label className="label">
                        {errors.phone?.type === "required" && (
                          <span className="label-text-alt text-red-600">
                            {errors.phone.message}
                          </span>
                        )}
                      </label>
                    </div>
                    <div className="form-control w-full max-w-xs mb-4">
                      <input
                        {...register("address", {
                          required: {
                            value: true,
                            message: "Address is required",
                          },
                        })}
                        type="text"
                        placeholder="Address"
                        className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"
                      />
                      <label className="label">
                        {errors.address?.type === "required" && (
                          <span className="label-text-alt text-red-600">
                            {errors.address.message}
                          </span>
                        )}
                      </label>
                    </div>
                    <input
                      type="submit"
                      className="btn btn-accent w-full max-w-xs"
                      value="Place Order"
                      disabled={toggleSubmit}
                    />
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
