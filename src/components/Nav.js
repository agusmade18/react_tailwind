import React from 'react'
import Logo from '../assets/logo.png'
import './components.css'
import { useState } from 'react'

function Nav() {
  const [menuBtn, setMenuBtn] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav className='relative container  mx-auto p-6'>
       {/* Flex Container */}
        <div className='flex items-center justify-between'>
            {/* Logo */}
            <div className='pt-2'>
                <img src={Logo} alt='' className='logo' />
            </div>
            {/* Menu Items */}
            <div className='hidden md:flex space-x-6'>
                <a href='#' className="hover:text-gray-500">Produk</a>
                <a href='#' className="hover:text-gray-500">Cara Pesan</a>
                <a href='#' className="hover:text-gray-500">Tentang Kami</a>
                <a href='#' className="hover:text-gray-500">Kontak</a>
            </div>
            {/* Button */}
            <a href='#' className='hidden md:block p-3 px-6 pt-2 text-white bg-red-600 rounded-full self-baseline hover:bg-red-500'>
                Get Started
            </a>

            {/* Hamburger */}
            <button id='menu-btn' onClick={() => {setMenuBtn(!menuBtn)}} className={`${menuBtn && 'open'} block hamburger md:hidden focus:outline-none`}>
                <span className='hamburger-top'></span>
                <span className='hamburger-middle'></span>
                <span className='hamburger-bottom'></span>
            </button>
        </div>

        {/* Mobile Menu */}
        {
            (menuBtn && (
                <div className='md:hidden'>
                    <div id='menu' className='absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'>
                        <a href='#'>Pricing</a>
                        <a href='#'>Product</a>
                        <a href='#'>About Us</a>
                        <a href='#'>Carrer</a>
                        <a href='#'>Community</a>
                    </div>
                </div>
            ))
        }
        
    </nav>
  )
}

export default Nav