import { motion } from 'framer-motion';
import React from 'react';

function MarQuee() {
    const marQueeText = ['/l1.png', '/l2.png', '/l3.png'];

    // Repeat the array content dynamically
    const repeatedText = [...Array(4)].flatMap(() => marQueeText); //need to learn the syntax

    return (
        <div className='overflow-hidden mt-20 pb-20'>
            <motion.div
                initial={{ x: '0%' }}
                animate={{ x: '-100%' }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className='flex'
            >
                {repeatedText.map((image, index) => (
                    <img
                        src={image}
                        key={index}
                        alt={`icon ${index + 1}`}
                        className='flex px-10'
                        style={{ width: '250px', height: '40px' }}
                    />
                ))}
            </motion.div>
        </div>
    );
}

export default MarQuee;
