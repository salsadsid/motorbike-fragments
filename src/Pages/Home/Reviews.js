import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Review from "./Review";

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch(`https://motorbike-fragments.onrender.com/review`).then(
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
        style={{ fontFamily: "fantasy" }}
        className="text-4xl text-center text-secondary relative lg:text-left"
      >
        What our customer says?
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
