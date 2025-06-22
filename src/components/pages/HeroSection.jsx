import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col bg-green-600 text-sky-500 px-4 text-center items-center justify-center h-[90vh]'
    style={{
        backgroundImage: "url('/src/assets/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}
    >
      <h2 className='text-4xl md:text-6xl mb-2 font-bold'>Welcome to my website</h2>
      <p className='text-lg md:text-2xl mb-4'>Your journey start from here.</p>
      <button className='bg-white text-indigo-600 font-medium px-6 py-2 rounded-2xl cursor-pointer hover:bg-gray-200'>Puchase Products </button>
    </div>
  )
}

export default HeroSection
