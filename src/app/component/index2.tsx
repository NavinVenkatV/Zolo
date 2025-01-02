"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Box from './box'

function Index2() {
    return (
        <div className='bg-gradient-to-r from-purple-800 via-black to-blue-900 pb-5'>
            <div className='text-white text-2xl lg:text-5xl bg-black h-screen flex justify-center items-center text-center max-h-[800px]'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    <div className='max-w-5xl text-slate-300 p-4'>
                        "Providing professional web development services to design, build, and deliver dynamic, user-friendly websites tailored to your business needs. Let’s turn your ideas into impactful digital experiences!"                    </div>
                </motion.div>
            </div>
            <div className='text-slate-300 text-lg  min-h-[500px] pt-3'>
                <div className='text-center items-center text-gray-500'>O U R <span className='px-3'></span> A C H I E V E M E N T S</div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 lg:p-6 mt-10 justify-items-center'>
                        <Box />
                        <Box />
                        <Box /> 
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Index2
