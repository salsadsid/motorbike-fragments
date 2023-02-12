import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "c0ba1c74af961122d7612993247e345a";

  const onSubmit = async (data) => {
    const image = data.img[0];
    console.log(data);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          data.img = img;
          fetch("https://motorbike-fragments.onrender.com/part", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Product added successfully");
                reset();
              } else {
                toast.error("Failed to add Product");
              }
            });
        }
      });
  };
  return (
    <div className="max-w-full mx-auto md:py-10 px-6">
      <div className="max-w-sm mx-auto px-6">
        <h2
          style={{ fontFamily: "'Gugi', monospace" }}
          className="text-2xl text-center text-secondary my-3 border-b"
        >
          Add a Product
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Product Name is required",
                },
              })}
              type="text"
              placeholder="Product Name"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.name?.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <textarea
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is required",
                },
              })}
              type="text"
              placeholder="Description"
              className="input input-lg textarea-ghost input-bordered w-full max-w-xs text-sm"
            />
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <input
              {...register("minimumOrder", {
                required: {
                  value: true,
                  message: "Minimum Order is required",
                },
                min: {
                  value: 1,
                  message: "greater required",
                },
              })}
              type="number"
              placeholder="Minimum Order"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.minimumOrder?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.number.message}
                </span>
              )}
              {errors.minimumOrder?.type === "min" && (
                <span className="label-text-alt text-red-600">
                  {errors.number.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <input
              {...register("availableQuantity", {
                required: {
                  value: true,
                  message: "Available Quantity is required",
                },
                min: {
                  value: 1,
                  message: "greater required",
                },
              })}
              type="number"
              placeholder="Available Quantity"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.availableQuantity?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.number.message}
                </span>
              )}
              {errors.availableQuantity?.type === "min" && (
                <span className="label-text-alt text-red-600">
                  {errors.number.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <input
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is required",
                },
                min: {
                  value: 1,
                  message: "greater required",
                },
              })}
              type="number"
              placeholder="Price"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.number.message}
                </span>
              )}
              {errors.price?.type === "min" && (
                <span className="label-text-alt text-red-600">
                  {errors.number.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full max-w-xs">
            <input
              {...register("img", {
                required: {
                  value: true,
                  message: "Photo is required",
                },
              })}
              type="file"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.img?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.img?.message}
                </span>
              )}
            </label>
          </div>
          <input
            type="submit"
            className="btn btn-accent w-full max-w-xs"
            value="ADD PRODUCT"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
