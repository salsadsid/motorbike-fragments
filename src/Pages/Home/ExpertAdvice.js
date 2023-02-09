import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/image/andriyko-podilnyk-Fy72qZAKuxM-unsplash (1).jpg'
const Banner3 = () => {
    return (
        // <div className="hero min-h-screen bg-accent">
        //     <div className="hero-content flex-col lg:flex-row-reverse">
        //         <img src={img} className="w-80 rounded-lg shadow-2xl" alt='' />
        //         <div>
        //             <h1 className="text-5xl font-bold">HAPPINESS</h1>
        //             <p className="py-6">The most important thing is to have a good relationship with the bike<br></br> you have to understand what she wants.</p>
        //             <button className="btn btn-secondary">JUMP</button>
        //         </div>
        //     </div>
        // </div>
//         <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
//   <div class="p-8 md:p-12 lg:px-16 lg:py-24">
//     <div class="mx-auto max-w-xl text-center sm:text-left">
//       <h2 style={{fontFamily:"fantasy"}} className='text-4xl text-center text-secondary relative lg:text-left'>
//         Export Advice ??
//       </h2>

//       <p class="hidden text-gray-500 md:mt-4 md:block">
//       Not sure what you need for your motorbike? Our team of experts is here to help! With years of experience in the industry, they know everything there is to know about motorbikes and their components. Whether you need advice on which parts to choose, or help with installation, we're here to assist you every step of the way.
//       </p>

//       <div class="mt-4 md:mt-8">
//         <Link
          
//           class="inline-block rounded bg-accent px-12 py-3 text-sm font-medium text-secondary transition hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300"
//         >
//           Get Started Today
//         </Link>
//       </div>
//     </div>
//   </div>

//   <img
//     alt="Student"
//     src={img}
//     class="h-56 w-full object-cover sm:h-full"
//   />
// </section>
<section
  class="overflow-hidden bg-gray-100 dark:bg-gray-900 sm:grid sm:grid-cols-2 sm:items-center"
>
  <div class="p-8 md:p-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-xl text-center sm:text-left">
      <h2 style={{fontFamily:"fantasy"}} className='text-4xl text-center text-secondary relative lg:text-left'>
        Expert Advice ?
      </h2>

      <p class="hidden text-gray-500 dark:text-gray-400 md:mt-4 md:block">
      Not sure what you need for your motorbike? Our team of experts is here to help! With years of experience in the industry, they know everything there is to know about motorbikes and their components. Whether you need advice on which parts to choose, or help with installation, we're here to assist you every step of the way.
      </p>

      <div class="mt-4 md:mt-8">
        <Link
         
          class="inline-block rounded bg-accent px-12 py-3 text-sm font-medium text-white transition hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300"
        >
          Explore More
        </Link>
      </div>
    </div>
  </div>

  <img
    alt="Violin"
    src={img}
    class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
  />
</section>


    );
};

export default Banner3;