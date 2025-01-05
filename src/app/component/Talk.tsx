import React from 'react'

function Talk() {
    return (
        <a id='talk' className='min-h-[500px] text-white my-56'>
            <div className='p-3 lg:p-32 lg:grid lg:grid-cols-[2fr_2fr]'>
                <div className='text-5xl lg:text-8xl font-light '>Let&apos;s Talk</div>
                <div className='mt-4 lg:mt-0'>
                    <div className='flex gap-2'>
                        <input type="text" placeholder='Name' required className='p-4 bg-slate-900 w-full focus:outline-none' />
                        <input type="text" placeholder='Company' required className='p-4 bg-slate-900 w-full focus:outline-none' />
                    </div>
                    <div className='flex gap-2 mt-3'>
                        <input type="text" placeholder='Email' required className='p-4 bg-slate-900 w-full focus:outline-none' />
                        <input type="text" placeholder='Phone' required className='p-4 bg-slate-900 w-full focus:outline-none' />
                    </div>
                    <div>
                        <textarea name="" id="" placeholder='Message' required className='mt-3 w-full focus:outline-none h-[200px] bg-slate-900 p-4'></textarea>
                    </div>
                    <button className= 'mt-3 border border-1 required:  text-white hover:bg-gray-800 px-4 py-3 rounded-full '>Subscribe</button>
                </div>
            </div>
        </a>
    )
}

export default Talk
