import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Subscribe from './Subscribe'

function Index4() {
    return (
        <div className=''>
            <div className='mx-3 lg:mx-56 text-center font-light text-xl lg:text-4xl text-gray-400 mt-32'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem veniam, modi aut id soluta officiis quaerat repudiandae et dicta natus aliquid doloribus. Consequatur cum eos sint porro, quo tenetur libero.
            </div>
            <div className='mt-20 flex justify-between px-4 lg:px-10'>
                <div className='text-white cursor-pointer w-16 h-16 rounded-full hover:text-gray-500 border border-1 border-white'><ArrowRightIcon /></div>
                <div className='flex flex-col justify-center items-center gap-1'>
                    <img src="l4.jpg" alt="user" className='rounded-full' />
                    <div className='text-xl text-white'>Bryan Pinkman</div>
                    <div className='text-lg text-gray-500'>CEO, Breaking Bad</div>
                </div>
                <div className='text-white cursor-pointer hover:text-gray-500 w-16 h-16 rounded-full border border-1 border-white'><ArrowLeftIcon /></div>
            </div>
            <div className=' mt-20 flex flex-col justify-center px-4 border border-1 border-white'>
                <div className='flex flex-col justify-center items-center gap-1'>
                    <div className=' p-6 flex justify-between'>
                        <div className='p-6 bg-red-500 text-white text-3xl font-light'>Don’t want to miss anything?</div>
                        <div className='p-6'>Sign up for our newsletter to discover winning trens before your competition</div>
                    </div>
                </div>
                <div className='p-6'>
                    <input className='border-none ' placeholder='Enter your email'></input>
                    <button className='border border-1 border-white p-4'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Index4
