import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='mb-16 lg:mx-8 md:mx-4 sm:mx-4'>
            <h2 className='text-3xl ml-2 text-secondary font-bold pt-6'>Million Business Trust Us</h2>
            <div className="w-full grid sm:grid-cols-1 lg:grid-cols-3 gap-2 my-5">

                <div className='flex flex-col justify-center items-center py-3 bg-white m-3 text-secondary shadow relative overflow-hidden'>
                    <svg className='w-48 absolute top-0 left-36 z-0'>
                        <circle cx="85" cy="80" r="70" stroke="#F8F1CD" stroke-width="6" fill="transparent" />
                        Sorry, your browser does not support inline SVG.
                    </svg>
                    <div className="stat-figure text-4xl relative">
                        <i className="fas fa-industry"></i>
                    </div>
                    <div className="stat-title relative">Market Size</div>
                    <div className="stat-value relative">$2M USD</div>
                    <div className="stat-desc relative">2010-2020</div>
                </div>
                <div className='flex flex-col justify-center items-center py-3 bg-white m-3 text-secondary shadow relative overflow-hidden'>
                    <svg className='w-48 absolute top-0 left-36 z-0'>
                        <circle cx="85" cy="80" r="70" stroke="#F8F1CD" stroke-width="6" fill="transparent" />
                        Sorry, your browser does not support inline SVG.
                    </svg>
                    <div className="stat-figure text-4xl relative">
                        <i className="fas fa-hand-holding-water"></i>
                    </div>
                    <div className="stat-title relative">Compacted Annual Growth</div>
                    <div className="stat-value relative">↗︎ 40%</div>
                    <div className="stat-desc relative">2015-2020</div>
                </div>
                <div className='flex flex-col justify-center items-center py-3 bg-white m-3 text-secondary shadow relative overflow-hidden'>
                    <svg className='w-48 absolute top-0 left-36 z-0'>
                        <circle cx="85" cy="80" r="70" stroke="#F8F1CD" stroke-width="6" fill="transparent" />
                        Sorry, your browser does not support inline SVG.
                    </svg>
                    <div className="stat-figure text-4xl relative">
                        <i className="fas fa-fire"></i>
                    </div>
                    <div className="stat-title relative">Penetration ratio</div>
                    <div className="stat-value relative">10/1000</div>
                    <div className="stat-desc relative">In Bangladesh</div>
                </div>

            </div>
            <h2 className='text-3xl text-secondary inline font-bold pb-8 ml-2'>For details give us a hello </h2><button className="btn btn-primary">Contact Us</button>
        </div>
    );
};

export default BusinessSummary;