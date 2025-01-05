import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid'
import React from 'react'
import Subscribe from './Subscribe'

function Index4() {
    return (
        <div className='' id='testimonials'>
            <div className='mx-3 lg:mx-56 text-center font-light text-xl lg:text-4xl text-gray-400 mt-32'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem veniam, modi aut id soluta officiis quaerat repudiandae et dicta natus aliquid doloribus. Consequatur cum eos sint porro, quo tenetur libero.
            </div>
            <div className='mt-20 flex justify-between px-4 lg:px-10'>
                <div className='text-white cursor-pointer w-16 h-16 flex flex-col justify-center items-center text-center text-4xl rounded-full hover:text-gray-500 border border-1 border-white'>→</div>
                <div className='flex flex-col justify-center items-center gap-1'>
                    <img src="l4.jpg" alt="user" className='rounded-full' />
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
