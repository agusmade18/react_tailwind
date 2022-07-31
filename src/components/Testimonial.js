import React from 'react'
import avatar from '../assets/avatar.jpeg'

function Testimonial() {
  return (
    <section id='testimonial'>
        {/* container to heading */}
        <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
            <h2 className='text-4xl font-bold text-center'>
                What's Different About Manage?
            </h2>

            {/* testimonials container */}
            <div className='flex flex-col mt-24 space-y-12 md:flex-row md:space-x-6 md:space-y-0'>
                {/* testimonial 1 */}
                <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:w-1/3'>
                  <img src={avatar} alt='' className='w-16 -mt-14'/>    
                  <h5 className='text-lg font-bold'>Agus Made </h5>  
                  <p className='text-sm text-dark'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>              
                </div>

                <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:w-1/3'>
                  <img src={avatar} alt='' className='w-16 -mt-14'/>    
                  <h5 className='text-lg font-bold'>Agus Made </h5>  
                  <p className='text-sm text-dark'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>              
                </div>

                <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100 md:w-1/3'>
                  <img src={avatar} alt='' className='w-16 -mt-14'/>    
                  <h5 className='text-lg font-bold'>Agus Made </h5>  
                  <p className='text-sm text-dark'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>              
                </div>
            </div>
            <div className='my-16'>
              < a href=''
              className='p-3 px-6 text-white bg-red-500 rounded-full baseline hover:bg-red-300'>
                Get Started
              </a>
            </div>
            
        </div>
    </section>
  )
}

export default Testimonial