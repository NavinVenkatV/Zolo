import React from 'react';

interface Types {
    heading: string;
    number: string;
    description: string;
}

function Box({ heading, number, description }: Types) {
    return (
        <div className='border-slate-300 rounded-2xl border-2 p-7 h-auto w-full sm:w-[400px] lg:mt-0 mx-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg'>
            <div className='flex flex-col'>
                <p className='font-semibold text-xl'>{heading}</p>
                <div className='flex flex-col justify-end'>
                    <p className='text-4xl lg:text-8xl font-light p-5'>{number}</p>
                    <hr />
                    <h3 className='py-3'>{description}</h3>
                </div>
            </div>
        </div>
    );
}

export default Box;
