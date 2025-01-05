import React from 'react'
import Subscribe from './Subscribe'
import Image from 'next/image'

function Index4() {
    return (
        <div className='' id='testimonials'>
            <div className='mx-3 lg:mx-56 text-center font-light text-xl lg:text-4xl text-gray-400 mt-32'>
             Navin delivered exceptional web development services, creating a responsive and user-friendly application that exceeded our expectations. His expertise and dedication were evident throughout the project!            </div>
            <div className='mt-20 flex justify-between px-4 lg:px-10'>
                <div className='text-white cursor-pointer w-16 h-16 flex flex-col justify-center items-center text-center text-4xl rounded-full hover:text-gray-500 border border-1 border-white'>→</div>
                <div className='flex flex-col justify-center items-center gap-1'>
                    <Image layout='intrinsic' src="/l4.jpg" alt="user" width={100} height={40} className='rounded-full tracking-wide' />
                    <div className='text-xl text-white'>Bryan Pinkman</div>
                    <div className='text-lg text-gray-500'>CEO, Breaking Bad</div>
                </div>
                <div className='text-white cursor-pointer w-16 h-16 flex flex-col justify-center items-center text-center text-4xl rounded-full hover:text-gray-500 border border-1 border-white'>←</div>
            </div>
            <div className='flex justify-center mt-48'>
                <Subscribe/>
            </div>
            
        </div>
    )
}

export default Index4
