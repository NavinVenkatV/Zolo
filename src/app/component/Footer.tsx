"use client"
import React from 'react'
import { motion } from 'framer-motion'

function Footer() {
    return (
        <div className=' text-white bg-gradient-to-r from-blue-900 via-black to-purple-800 overflow-hidden'>
            <div className='m-3 mt-10 lg:mx-24 lg:mt-24 '>
                <div className='lg:flex gap-10 lg:pl-7'>
                    <div>
                        <h6 className='text-sm text-blue-500'>General Enquiries</h6>
                        <p className=''>vnavinvenkat@gmail.com</p>
                    </div>
                    <div className='mt-5 lg:mt-0'>
                        <h6 className='text-sm text-blue-500'>Customer Services</h6>
                        <p className=''>navinvenkatv@gmail.com</p>
                    </div>
                    <div className='mt-5 lg:mt-0'>
                        <h6 className='text-sm text-blue-500'>Phone</h6>
                        <p className=''>(+91) 6369301474</p>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}>
                    <h1 className="m-0 p-0 leading-none text-[20vw] font-light bg-clip-text text-transparent bg-gradient-to-b from-purple-800 via-blue-900  to-black overflow-hidden">NOAH</h1>
                </motion.div>
                <hr />
                <div className='my-3 lg:flex justify-between w-full'>
                    <div className='flex gap- lg:gap-4 text-gray-500 text-sm '>
                        <p className='cursor-pointer '><span className='text-white'>NOAH</span> @2024</p>
                        <p className='cursor-pointer hover:text-black invisible lg:visible'>Licences</p>
                        <p className='text-purple-800'>Made by Navin <span className='text-blue-900'>❤️ Venkat</span></p>
                        <p className='cursor-pointer hover:text-black invisible lg:visible'>Style Guide</p>
                    </div>
                    <div className='flex gap-2 mt-4 lg:mt-0'>
                        <img src="1.svg" alt="" />
                        <img src="li1.svg" alt="" />
                        <img src="y1.svg" alt="" />
                        <img src="i1.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
