import React from 'react'
import logo from '../assets/logo.png'
import fb from '../assets/fb.png'
import ig from '../assets/ig.png'
import yt from '../assets/yt.png'
import { FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-blue-900'>
        <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
            {/* Logo and social links container */}
            <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>

                <div className='mx-auto my-6 text-center text-white md:hidden'>
                Copyright &copy; 2022, All Right Reserved
                </div>

                    {/* Logo */}
                <div>
                    <img src={logo} alt='' className='h-8' />
                </div>
                {/* Social Links Container */}
                <div className='flex justify-center space-x-4'>
                    <a href=''>
                        <img src={fb} alt='' className='h-8' />
                    </a>
                    <a href=''>
                        <img src={yt} alt='' className='h-8' />
                    </a>
                    <a href=''>
                        <img src={ig} alt='' className='h-8' />
                    </a>
                </div>
            </div>
            <div className='flex justify-around space-x-32'>
                <div className='flex flex-col space-y-3 text-white'>
                    <a href='' className='hover:text-red-400'>Home</a>
                    <a href='' className='hover:text-red-400'>Pricing</a>
                    <a href='' className='hover:text-red-400'>Product</a>
                    <a href='' className='hover:text-red-400'>About</a>
                </div>
                <div className='flex flex-col space-y-3 text-white'>
                    <a href='' className='hover:text-red-400'>Carrier</a>
                    <a href='' className='hover:text-red-400'>Community</a>
                    <a href='' className='hover:text-red-400'>Privacy Policy</a>
                </div>
            </div>

            {/* input container */}
            <div className='flex flex-col justify-between'>
                <form>
                    <div className='flex space-x-3'>
                        <input type='text' className='flex-1 px-4 rounded-full focus:outline-none' placeholder='Updated in your inbox'/>
                        <button className='px-6 py-2 text-white rounded-full bg-red-500 hover:bg-red-300 focus:outline-none'>Go</button>
                    </div>
                </form>
                <div className='hidden text-white md:block'>Copyright &copy; 2022, All Right Reserved</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer