import React from 'react'
interface types{
    heading : string,
    number  : string,
    description : string
}
function Box({heading, number, description} :types ) {
    return (
        <div className='border-slate-300 rounded-2xl border-2 p-7 h-[370px] w-[450px] lg:mt-0 mx-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg '>
            <div className='flex flex-col '>
                <p className='mb-12 font-semibold text-xl'>{heading}</p>
                <div className='flex flex-col justify-end'>
                    <p className='text-6xl lg:text-8xl font-light p-5'>{number}</p>
                    <hr />
                    <h3 className='pt-3'>{description}</h3>
                </div>
            </div>
        </div>
    )
}

export default Box
