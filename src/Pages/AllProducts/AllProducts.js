import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Part from "../Home/Part";
import Loading from "../Shared/Loading";

const AllProducts = () => {
  const navigate = useNavigate();
  const { data: products, isLoading } = useQuery("parts", () =>
    fetch(`https://motorbike-fragments.onrender.com/part`).then(
      (res) => res.json(),
      { retry: 5 }
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="sm:my-16 my-8 sm:mx-8 mx-2">
      <h2
        id="motorbike-parts"
        style={{ fontFamily: "'Gugi', monospace" }}
        className="text-4xl text-center text-secondary relative lg:text-left"
      >
        All Available Products
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-8">
        {[...products].map((part) => (
          <Part key={part._id} part={part}></Part>
        ))}
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => navigate("/")}
          class="flex rounded bg-accent px-12 py-3 text-sm font-medium text-secondary transition hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300"
        >
          <span class="text-sm font-medium"> Back to home </span>

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
      </div>
    </div>
  );
};

export default AllProducts;
