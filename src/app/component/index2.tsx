"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Box from './box'
import MarQuee from './index3'

function Index2() {
    return (
        <div id='about' className='bg-gradient-to-r from-purple-800 via-black to-blue-900 pb-5 overflow-hidden'>
            <div className='text-white text-2xl lg:text-5xl bg-black h-screen flex justify-center items-center text-center max-h-[800px]'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    <div className='max-w-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-white  to-purple-800 p-4 '>
                        Providing professional web development services to design, build, and deliver dynamic, user-friendly websites tailored to your business needs. Let&apos;s turn your ideas into impactful digital experiences</div>
                </motion.div>
            </div>
            <div className='text-slate-300 text-lg  h-full p-3'>
                <div className='flex flex-col justify-center items-center mt-10'>
                    <div className='text-center items-center text-gray-500'>O U R <span className='px-3'></span> A C H I E V E M E N T S</div>
                    <div className='max-w-[300px] lg:max-w-[370px] bg-white h-0.5 w-full mt-2'></div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 lg:p-6 mt-10 justify-items-center'>
                        <Box  number={"98"} heading={'Sample one'} description={"Successful liftoffs into the digital cosmos, each leaving a trail of satisfied clients"}/>
                        <Box number={"9.5"} heading={'Years of Operations'} description={"Bridged the gap between clients and the digital realm, making the virtual world a friendlier place"} />
                        <Box number={"95%"} heading={'Satisfication Rate'} description={"Because you don't just meet expectations; you exceed them"} />
                    </div>
                </motion.div>
                <div className='text-gray-500 mt-20 lg:mt-10 text-xl lg:text-4xl '>
                    <div className='flex flex-col justify-center items-center mt-10'>
                        <div className='text-center text-xl'>F E A U T U R E D <span className='px-2'></span>C L I E N T S</div>
                        <div className='max-w-[300px] lg:max-w-[370px] bg-white h-0.5 w-full mt-2'></div>
                    </div>
                    <MarQuee />
                </div>
            </div>
        </div>
    )
}

export default Index2
