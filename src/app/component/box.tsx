import React from 'react'

function Box() {
    return (
        <div className='border-slate-300 rounded-2xl border-2 p-7 h-[370px] w-[450px] lg:mt-0 mt-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg'>
            <div className='flex flex-col'>
                <p className='mb-12 font-semibold text-xl'>Project Completed</p>
                <div className='flex flex-col justify-end'>
                    <p className='text-8xl font-light p-5'>+75</p>
                    <hr />
                    <h3 className='pt-3'>Successful liftoffs into the digital cosmos, each leaving a trail of satisfied clients</h3>
                </div>
            </div>
        </div>
    )
}

export default Box
