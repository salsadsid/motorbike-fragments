import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Part from './Part';

const Parts = () => {

    const { data: parts, isLoading } = useQuery('parts', () => fetch(`https://mysterious-mountain-85694.herokuapp.com/part`).then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-16 lg:mx-8 md:mx-4 sm:mx-4'>
            <h2 className='text-4xl text-secondary font-bold relative'>Motorbike Spare Parts <span className='bg-warning absolute left-96 top-0 text-xs font-semibold py-1 px-2 text-secondary border-2 border-secondary border-dashed inline-block'>SALE !</span></h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-8'>
                {
                    [...parts].reverse().slice(0, 8).map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;