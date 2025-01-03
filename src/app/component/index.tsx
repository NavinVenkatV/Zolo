"use client"

import React from 'react'
import { motion } from 'framer-motion'

function Index() {
    return (
        <div className='text-white h-screen '>
            <div className='flex justify-between items-center sticky top-0  p-4  rounded-2xl'>
                <motion.div
                initial={{opacity:0,x:-20}}
                animate={{opacity:1,x:0}}
                transition={{duration:0.5}}>
                <div className='text-2xl lg:text-4xl tracking-widest'>
                    N O A H
                </div>
                </motion.div>
                <motion.div
                initial={{opacity:0,x:20}}
                animate={{opacity:1,x:0}}
                transition={{duration:0.5}}>
                <div className='text-slate-300'>Contact</div>
                </motion.div>
            </div>
            <div className='flex justify-center items-center h-[80%] mt-0 w-full'>
                <div className='flex flex-col items-center justify-center text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='flex flex-col justify-center items-center mt-10'>
                            <div className='text-center text-xl text-gray-500'>D I G I T A L <span className='px-2'></span>C R E A T I V E</div>
                            <div className='max-w-[300px] lg:min-w-[300px] bg-white h-0.5 w-full mt-2'></div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}>
                        <h1 className='text-4xl lg:text-7xl mt-14'>Where
                            <span className='inline-block'><img src="z1.webp" alt="" className='w-13 h-12 inline px-3' /></span> Imagination
                        </h1>
                        <h1 className='text-4xl lg:text-7xl mt-3'>
                            <span className='inline-block'><img src="z2.webp" alt="" className='w-13 h-12 inline px-3' /></span> Meet Strategy
                        </h1>
                        <div className='flex justify-center mt-10 lg:mt-19'>
                            <button className='border flex justify-center border-slate-300 px-4 py-2 mt-10 hover:bg-white hover:bg-opacity-15 rounded-2xl'>
                                Let's Collaborate
                                <span className='ml-2'>&rarr;</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}


export default Index
