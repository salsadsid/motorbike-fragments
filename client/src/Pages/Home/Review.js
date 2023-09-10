import React from 'react';
import { Link } from 'react-router-dom';

const Review = ({ review }) => {

    const{name,img,rating,email}=review

    return (
        <article class="rounded-xl border border-gray-700 bg-gray-800 p-4 relative">
  <div class="flex items-center">
    <img
      alt="Developer"
      src={img ? img : "https://images.unsplash.com/photo-1594634932563-cb50acd10766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
      class="h-16 w-16 rounded-full object-cover"
    />
<span
    class="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
  >
    {rating}
  </span>
    <div class="ml-3">
      <h3 class="text-lg font-medium text-white">{name ? name : "Amber"}</h3>

      <div class="flow-root">
        <p className='text-gray-300 text-xs font-medium'>{email}</p>
      </div>
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li>
      <Link
       
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-accent"
      >
       

        <p class="mt-1 text-xs font-medium text-gray-300">
          {review.review}
        </p>
      </Link>
    </li>
  </ul>
</article>

    );
};

export default Review;