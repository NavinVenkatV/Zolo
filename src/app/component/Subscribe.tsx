import React from 'react'

export default function Subscribe() {
    return (
        <div className='p-12  border border-white grid grid-cols-2 rounded-2xl text-white bg-opacity-10 backdrop-filter backdrop-blur-lg'>
            <h1 className='text-3xl flex flex-col items-center justify-center'>Don't want to miss something</h1>
            <h2 className='text-sm flex flex-col items-center justify-center text-gray-300'>Sign up for our newsletter to discover winning trens before your competition</h2>
            <div className='flex justify-between items-center bg-red-400 mt-10 w-full'>
                <input className='flex flex-col items-center justify-center border-none focus:outline-none bg-transparent' placeholder='Enter your email'></input>
                <button className='flex flex-end items-center justify-center p-5 border-white border-1'>Subscribe</button>
                <hr />
            </div>
        </div>
    )
}
