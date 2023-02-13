import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const Banner2 = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm(); 
  console.log(errors)
const onSubmit=(data)=>{
  console.log(data)
  fetch(
    `https://motorbike-fragments.onrender.com/question`,
    {
      method: "POST",
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
        toast.success("Question Asked");
      } else {
        toast.error("Error Occurred");
      }
    });
}
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-lg text-center">
          <h2
            style={{ fontFamily: "'Gugi', monospace" }}
            className="text-4xl text-center text-secondary relative lg:text-left"
          >
            Have A Question ?
          </h2>

          <p class="hidden text-gray-500 dark:text-gray-400 sm:mt-4 sm:block">
            Have a question or concern about our products or services? We're
            here to help! Fill out the form below and a member of our team will
            get back to you as soon as possible.
          </p>
        </div>

        <div class="mx-auto mt-8 max-w-xl">
          <form onSubmit={handleSubmit(onSubmit)} class="sm:flex flex-col">
            <div class="sm:flex-1 my-6">
              <label for="email" class="sr-only">
                Email
              </label>

              <input
              {...register("email", {
                required: {
                  value: 56,
                  message: "Email is required",
                },
              })}
                type="email"
                placeholder="Email address"
                class="w-full rounded-md border-gray-200 bg-white p-3 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
              <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.email.message}
                </span>
              )}
            </label>
            </div>
            <div class="sm:flex-1">
              <label for="message" class="sr-only">
                Email
              </label>

              <textarea
              {...register("message", {
                required: {
                  value: 500,
                  message: "Question is required",
                },
              })}
                type="text"
                placeholder="Question"
                class="w-full rounded-md border-gray-200 bg-white p-3 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
              <label className="label">
              {errors.message?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.message.message}
                </span>
              )}
            </label>
            </div>

            <button
              type="submit"
              class="group my-6 flex w-full items-center justify-center rounded-md bg-accent px-5 py-3 text-secondary transition focus:outline-none focus:ring focus:ring-yellow-400 sm:w-auto"
            >
              <span class="text-sm font-medium"> Send </span>

              <svg
                class="ml-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
