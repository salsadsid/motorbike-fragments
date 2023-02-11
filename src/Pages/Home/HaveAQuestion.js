import React from "react";
const Banner2 = () => {
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="mx-auto max-w-lg text-center">
          <h2
            style={{ fontFamily: "fantasy" }}
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
          <form action="#" class="sm:flex flex-col">
            <div class="sm:flex-1 my-6">
              <label for="email" class="sr-only">
                Email
              </label>

              <input
                type="email"
                placeholder="Email address"
                class="w-full rounded-md border-gray-200 bg-white p-3 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div class="sm:flex-1">
              <label for="message" class="sr-only">
                Email
              </label>

              <textarea
                type="text"
                placeholder="Question"
                class="w-full rounded-md border-gray-200 bg-white p-3 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
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
