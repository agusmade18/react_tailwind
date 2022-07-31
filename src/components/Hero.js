import React from 'react'
import image from '../assets/mypic.jpeg'
import './components.css'

function Hero() {
  return (
    <section id='hero'>
        <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 space-x-1 md:space-y-0 md:flex-row'>
            {/* Left Item */}
            <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
                <h1 className='max-w-md text-4xl font-bold text-center mt-3 md:text-5xl md:text-left'>
                    Bring Everyone Together to Build Better Product
                </h1>
                <p className='max-w-md text-center text-gray-500 md:text-left'>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                </p>
                <div className='flex justify-center md:justify-start'>
                    <a href='#' className='p-3 px-6 pt-2 text-white bg-red-600 rounded-full self-baseline hover:bg-red-500'>
                        Get Started
                    </a>
                </div>
            </div>
            {/* image */}
            <div className='md:w-1/2'>
                <img src={image} alt='image' className='rounded-md max-w-sm' />
            </div>
        </div>
    </section>
  )
}

export default Hero