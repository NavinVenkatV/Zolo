import React from 'react';

export default function Subscribe() {
    return (
        <div className='flex flex-col bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-1 w-full max-w-[1000px] p-5 lg:p-16 rounded-2xl mx-2'>
            <div className='text-white text-2xl lg:text-4xl font-light lg:flex justify-between'>
                Don&apos;t want to miss anything?
                <h3 className='text-sm lg:text-lg mt-2 lg:mt-0'>
                    Sign up for our newsletter to discover winning trends before your competition
                </h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2 mt-10 lg:mt-20'>
                <input type="email" className='bg-transparent pb-3 border-b-2 focus:outline-none text-white' placeholder='Enter your email' />
                <button className='border border-1 lg:text-lg text-white hover:bg-black px-2 py-3 rounded-full  lg:w-auto lg:ml-4'>Subscribe</button>
            </div>
        </div>
    );
}
