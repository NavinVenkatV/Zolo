import React from 'react';

function Drop() {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center text-white z-50'>
                    <div className='text-4xl lg:text-6xl mb-8 cursor-pointer' onClick={() => setToggle(false)}>About</div>
                    <div className='text-4xl lg:text-6xl mb-8 cursor-pointer' onClick={() => setToggle(false)}>Contact</div>
                    <div className='text-4xl lg:text-6xl cursor-pointer' onClick={() => setToggle(false)}>Testimonials</div>
                </div>
  );
}

export default Drop;
