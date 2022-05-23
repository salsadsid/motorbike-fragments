import React from 'react';

const BusinessSummary = () => {
    return (
        <div style={{ backgroundImage: "url(" + "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" + ")" }}>
            <h2 className='text-4xl text-primary text-center'>Millions Business Trust Us</h2>
            <div class="shadow w-full grid sm:grid-cols-1 lg:grid-cols-3 gap-2 my-5">

                <div className='flex flex-col justify-center items-center py-3 bg-primary'>
                    <div class="stat-figure text-4xl text-white">
                        <i class="fas fa-industry"></i>
                    </div>
                    <div class="stat-title">Market Size</div>
                    <div class="stat-value">$2M USD</div>
                    <div class="stat-desc">2010-2020</div>
                </div>

                <div className='flex flex-col justify-center items-center py-3 bg-primary'>
                    <div class="stat-figure text-white text-4xl">
                        <i class="fas fa-hand-holding-water"></i>
                    </div>
                    <div class="stat-title">Compacted Annual Growth</div>
                    <div class="stat-value">↗︎ 40%</div>
                    <div class="stat-desc">2015-2020</div>
                </div>

                <div className='flex flex-col justify-center items-center py-3 bg-primary'>
                    <div class="stat-figure text-white text-4xl">
                        <i class="fas fa-fire"></i>
                    </div>
                    <div class="stat-title">Penetration ratio</div>
                    <div class="stat-value">10/1000</div>
                    <div class="stat-desc">In Bangladesh</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;