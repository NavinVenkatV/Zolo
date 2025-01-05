import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

function MarQuee() {
    const marQueeText = ['/l1.png', '/l2.png', '/l3.png'];

    // Repeat the array content dynamically
    // Repeat the array content 4 times
    const repeatedText = Array(4).fill(marQueeText).flat();

    return (
        <div className='overflow-hidden mt-20 pb-20'>
            <motion.div
                initial={{ x: '0%' }}
                animate={{ x: '-100%' }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className='flex'
            >
                {repeatedText.map((image, index) => (
                    <Image
                        src={image}
                        key={index}
                        width={250}
                        height={40}
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
