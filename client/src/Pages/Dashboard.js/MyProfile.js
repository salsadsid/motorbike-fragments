import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";
import { useForm } from "react-hook-form";
const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if (loading) {
    return <Loading></Loading>;
  }
  const onSubmit = (data) => {
    data.displayName = user?.displayName;
    fetch(
      `https://motorbike-fragments.onrender.com/userdetail/${user?.displayName}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success("Profile Updated");
        } else {
          toast.error("Error Occurred");
        }
      });
  };
  return (
    <div className="max-w-full mx-auto md:py-10 px-6">
      <div className="max-w-sm mx-auto px-6">
        <h2
          style={{ fontFamily: "'Gugi', monospace" }}
          className="text-xl text-center text-secondary my-3 border-b"
        >
          Personal Information
        </h2>
        <p>
          <span>Email: </span>
          {user?.email}
        </p>
        <p>
          <span>Name: </span>
          {user?.displayName}
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              {...register("phone", {
                required: {
                  value: true,
                  message: "Phone number is required",
                },
              })}
              type="number"
              placeholder="e.g. +851541154"
              className="input input-bordered"
            />
            <label className="label">
              {errors.phone?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.phone.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Highest Qualification</span>
            </label>
            <input
              {...register("education", {
                required: {
                  value: true,
                  message: "Education is required",
                },
              })}
              type="text"
              placeholder="e.g. HSC,BSC"
              className="input input-bordered"
            />
            <label className="label">
              {errors.education?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.education.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              {...register("location", {
                required: {
                  value: true,
                  message: "Location is required",
                },
              })}
              type="text"
              placeholder="e.g. Dhaka, Bangladesh"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.location?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.address.location}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">LinkedIn Profile URL</span>
            </label>
            <input
              {...register("linkedin", {
                required: {
                  value: true,
                  message: "linkedin url is required",
                },
              })}
              type="text"
              placeholder="e.g. linkedin.com/in/salsadsid"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.linkedin?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.address.linkedin}
                </span>
              )}
            </label>
          </div>

          <input
            type="submit"
            className="btn btn-accent w-full max-w-xs"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
