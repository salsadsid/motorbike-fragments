import React from 'react';

const BusinessSummary = () => {
    return (
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