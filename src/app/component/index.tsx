"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

function Index() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='text-white h-screen '>
            <div className='flex justify-between items-center sticky top-0  p-4  rounded-2xl'>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}>
                    <div
                        className='text-2xl lg:text-4xl tracking-widest cursor-pointer'
                        onClick={() => window.location.reload()}
                    >
                        N O A H
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}>
                    <div className='flex gap-3  w-full justify-center items-center'>
                        <a href="mailto:vnavinvenkat@gmail.com">
                            <div className='text-slate-300 invisible lg:visible flex justify-center items-center cursor-pointer'>Contact</div>
                        </a>
                        <div className='w-5 h-4 text-white flex flex-col justify-between cursor-pointer'
                            onClick={() => {
                                setToggle(!toggle)
                            }}>
                            <span className=' w-full h-0.5 bg-white'></span>
                            <span className=' w-full h-0.5 bg-white'></span>
                            <span className=' w-full h-0.5 bg-white'></span>
                        </div>
                    </div>
                </motion.div>
                <AnimatePresence>
                    {toggle && (
                        <motion.div
                            initial={{ y: -1000 }}
                            animate={{ y: 0 }}
                            exit={{ y: -1000 }}
                            transition={{ duration: 0.5 }}
                            className='fixed inset-0 bg-black flex flex-col justify-center items-center text-white z-50'
                        >
                            <div className='absolute w-6 h-6 top-10 right-10 text-2xl cursor-pointer' onClick={() => setToggle(false)}>X</div>
                            <a href='#about' className='text-4xl lg:text-6xl mb-8 cursor-pointer' onClick={() => setToggle(false)}>About</a>
                            <a href='#services' className='text-4xl lg:text-6xl mb-8 cursor-pointer' onClick={() => setToggle(false)}>Services</a>
                            <a href='#talk' className='text-4xl lg:text-6xl mb-8 cursor-pointer' onClick={() => setToggle(false)}>Contact</a>
                            <a href='#testimonials' className='text-4xl lg:text-6xl cursor-pointer' onClick={() => setToggle(false)}>Testimonials</a>
                        </motion.div>
                    )}
                </AnimatePresence>
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
                            <span className='inline-block'><Image src="/Z1.webp" width={100} height={100} alt="" className='w-13 h-12 inline px-3' /></span> Imagination
                        </h1>
                        <h1 className='text-4xl lg:text-7xl mt-3'>
                            <span className='inline-block'><Image src="/z2.webp" width={100} height={100} alt="" className='w-13 h-12 inline px-3' /></span> Meet Strategy
                        </h1>
                        <div className='flex justify-center mt-10 lg:mt-19'>
                            <button className='border flex justify-center border-slate-300 px-4 py-2 mt-10 hover:bg-white hover:bg-opacity-15 rounded-2xl'>
                                <a href="#talk" >Let&apos;s Collaborate</a>
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
