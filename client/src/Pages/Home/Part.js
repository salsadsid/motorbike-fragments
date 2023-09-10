import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const navigate = useNavigate()
    const handlePurchase = id => {
        navigate(`/purchase/${id}`)
    }
    const {name,img,description,price,minimumOrder,availableQuantity}=part
    return (
        // <div className="card lg:max-w-lg bg-base-100 hover:shadow-xl shadow transition-shadow border border-accent relative overflow-visible">
        //     <div className='bg-accent absolute right-0 top-[-10px] rounded-2xl font-semibold py-1 px-4'>Available</div>
        //     <figure className="px-10 pt-10">
        //         <img src={part.img} alt="Shoes" className="rounded-xl h-48" />

        //     </figure>

        //     <div className="card-body font-semibold">

        //         <h2 className="text-lg first-letter:font-extrabold border-b-2 font-semibold">{part.name}</h2>
        //         <p><span className='font-bold text-md'>Short Description:</span> {part.description}</p>
        //         <p>
        //             <span className='font-bold'>Price: </span><span className='inline-block rounded px-2 bg-warning-content text-white'>{part.price} <span className='font-bold'>BDT</span></span> /unit
        //         </p>
        //         <p><span className='font-bold'>Minimum Order: </span>
        //             {part.minimumOrder} units
        //         </p>
        //         <p><span className='font-bold text-md'>Available Quantity: </span>
        //             {part.availableQuantity} units
        //         </p>

        //         <div className="card-actions">
        //             <button onClick={() => handlePurchase(part._id)} className="btn btn-primary">Purchase</button>
        //         </div>
        //     </div>
        // </div>
        <div class="card lg:max-w-lg bg-base-100 hover:shadow-xl shadow transition-shadow border border-accent relative overflow-hidden rounded">
    
        <div class="relative pb-48 overflow-hidden ">
          <img class="hover:cursor-crosshair  hover:scale-125 transition-all absolute inset-0 h-full w-full object-cover" src={img} alt=""/>
        </div>
        <div class="p-4">
          <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
          <h2 class="mt-2 mb-2  font-bold">{name}</h2>
          <p class="text-sm">{description}</p>
          <div class="mt-3 flex items-center">
            <span class="text-sm font-semibold">unit</span>&nbsp;<span class="font-bold text-xl">{price}</span>&nbsp;<span class="text-sm font-semibold"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75zM10.5 7.963a1.5 1.5 0 00-2.17-1.341l-.415.207a.75.75 0 00.67 1.342L9 7.963V9.75h-.75a.75.75 0 100 1.5H9v4.688c0 .563.26 1.198.867 1.525A4.501 4.501 0 0016.41 14.4c.199-.977-.636-1.649-1.415-1.649h-.745a.75.75 0 100 1.5h.656a3.002 3.002 0 01-4.327 1.893.113.113 0 01-.045-.051.336.336 0 01-.034-.154V11.25h5.25a.75.75 0 000-1.5H10.5V7.963z" clipRule="evenodd" />
</svg>
</span>
          </div>
        </div>
        <div class="p-4 border-t border-b text-xs text-gray-700">
          <span class="flex items-start mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>

Minimum Order - {minimumOrder}
          </span>
          <span class="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
</svg> Available Quantity - {availableQuantity}
          </span>        
        </div>
        

     <div className='w-1/2 ml-4 my-4'>
     <button onClick={() => handlePurchase(part._id)} className="mx-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Buy Now
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
     </div>
      </div>
    );
};

export default Part;