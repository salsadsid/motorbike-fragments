import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='mb-16 lg:mx-8 md:mx-4 sm:mx-4'>
            <h2 className='text-3xl ml-2 text-secondary font-bold pt-6'>Million business trust us</h2>
            <div className="w-full grid sm:grid-cols-1 lg:grid-cols-3 gap-2 my-5">
                <div className='flex flex-col justify-center items-center py-3 m-3 text-white shadow overflow-hidden bg-gradient-to-r from-secondary-content to-secondary rounded-md hover:to-secondary-content hover:from-secondary'>
                    <div className="stat-figure text-4xl ">
                        <i className="fas fa-industry"></i>
                    </div>
                    <div>Market Size</div>
                    <div className="stat-value ">$2M USD</div>
                    <div>2010-2020</div>
                </div>
                <div className='flex flex-col justify-center items-center py-3 m-3 text-white shadow overflow-hidden bg-gradient-to-r from-secondary-content to-secondary rounded-md hover:to-secondary-content hover:from-secondary'>
                    <div className="stat-figure text-4xl ">
                        <i className="fas fa-hand-holding-water"></i>
                    </div>
                    <div>Compacted Annual Growth</div>
                    <div className="stat-value ">↗︎ 40%</div>
                    <div>2015-2020</div>
                </div>
                <div className='flex flex-col justify-center items-center py-3 m-3 text-white shadow  overflow-hidden bg-gradient-to-r from-secondary-content to-secondary rounded-md hover:to-secondary-content hover:from-secondary'>
                    <div className="stat-figure text-4xl">
                        <i className="fas fa-fire"></i>
                    </div>
                    <div>Penetration ratio</div>
                    <div className="stat-value ">10/1000</div>
                    <div>In Bangladesh</div>
                </div>

            </div>
            <h2 className='text-2xl text-secondary inline font-bold pb-8 ml-2'>For more information </h2><button className="btn btn-sm btn-primary">Contact Us</button>
        </div>
    );
};

export default BusinessSummary;