import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Part from './Part';

const Parts = () => {

    const { data: parts, isLoading } = useQuery('parts', () => fetch(`https://motorbike-fragments.onrender.com/part`).then(res => res.json(),{retry: 5})
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    
    return (
        <div className='sm:my-16 my-8 sm:mx-8 mx-2'>
            <h2 style={{fontFamily:"fantasy"}} className='text-4xl text-center text-secondary relative lg:text-left'>Motorbike Spare Parts</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-8'>
                {
                    [...parts].slice(0, 8).map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;