import React from 'react';

const BusinessSummary = () => {
    return (
        // <div className='mb-16 lg:mx-8 md:mx-4 sm:mx-4'>
        //     <h2 className='text-3xl ml-2 text-secondary font-bold pt-6'>Million business trust us</h2>
        //     <div className="w-full grid sm:grid-cols-1 lg:grid-cols-3 gap-2 my-5">
        //         <div className='flex flex-col justify-center items-center py-3 m-3 text-white shadow overflow-hidden bg-gradient-to-r from-secondary-content to-secondary rounded-md hover:to-secondary-content hover:from-secondary'>
        //             <div className="stat-figure text-4xl ">
        //                 <i className="fas fa-industry"></i>
        //             </div>
        //             <div>Market Size</div>
        //             <div className="stat-value ">$2M USD</div>
        //             <div>2010-2020</div>
        //         </div>
        //         <div className='flex flex-col justify-center items-center py-3 m-3 text-white shadow overflow-hidden bg-gradient-to-r from-secondary-content to-secondary rounded-md hover:to-secondary-content hover:from-secondary'>
        //             <div className="stat-figure text-4xl ">
        //                 <i className="fas fa-hand-holding-water"></i>
        //             </div>
        //             <div>Compacted Annual Growth</div>
        //             <div className="stat-value ">↗︎ 40%</div>
        //             <div>2015-2020</div>
        //         </div>
        //         <div className='flex flex-col justify-center items-center py-3 m-3 text-white shadow  overflow-hidden bg-gradient-to-r from-secondary-content to-secondary rounded-md hover:to-secondary-content hover:from-secondary'>
        //             <div className="stat-figure text-4xl">
        //                 <i className="fas fa-fire"></i>
        //             </div>
        //             <div>Penetration ratio</div>
        //             <div className="stat-value ">10/1000</div>
        //             <div>In Bangladesh</div>
        //         </div>

        //     </div>
        //     <h2 className='text-2xl text-secondary inline font-bold pb-8 ml-2'>For more information </h2><button className="btn btn-sm btn-primary">Contact Us</button>
        // </div>
        <div class=" sm:mx-8 mx-2 sm:my-16 my-8">
        <div class="p-4 bg-secondary rounded-lg md:p-8 dark:bg-gray-800">
            <div class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto  sm:grid-cols-3 xl:grid-cols-5 dark:text-white sm:p-8 text-primary">
                <div class="flex flex-col items-center justify-center hover:scale-125 hover:cursor-pointer transition-all">
                    <dt class="mb-2 text-3xl font-extrabold ">73M+</dt>
                    <dd class="font-light">Products</dd>
                </div>
                
                <div class="flex flex-col items-center justify-center hover:scale-125 hover:cursor-pointer transition-all">
                    <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
                    <dd class="font-light">Product Delivered</dd>
                </div>
                <div class="flex flex-col items-center justify-center hover:scale-125 hover:cursor-pointer transition-all">
                    <dt class="mb-2 text-3xl font-extrabold">1B+</dt>
                    <dd class="font-light">Contributors</dd>
                </div>
                <div class="flex flex-col items-center justify-center hover:scale-125 hover:cursor-pointer transition-all">
                    <dt class="mb-2 text-3xl font-extrabold">90+</dt>
                    <dd class="font-light ">Top Forbes companies</dd>
                </div>
                <div class="flex flex-col items-center justify-center hover:scale-125 hover:cursor-pointer transition-all">
                    <dt class="mb-2 text-3xl font-extrabold">4M+</dt>
                    <dd class="font-light">Organizations</dd>
                </div>
            </div>
        </div>
        </div>
        


    );
};

export default BusinessSummary;