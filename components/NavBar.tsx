'use client'

import Image from 'next/image'
import { logo } from '@/assets'
import { navLinks } from '@/constants'
import { useState } from 'react'

const NavBar = () => {

const [toggle, setToggle] = useState(false)

  return (
    <nav className='
      flex flex-row justify-between p-4 items-center
      w-full '
    >
      <span className='mr-2'>A logo</span> 
      <Image src={logo} alt='logo' 
        className='w-1/12 h-1/12 md:w-[32px] md:h-[32px]'/>

      <ul className='list-none hidden
        sm:flex justify-end items-center flex-1'>
          {navLinks.map((link, index) => (
          <li key={link.id} 
            className={`font-normal cursor-pointer
            ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
              <a href={`#`}>{link.title}</a>
          </li>
          ))}
      </ul>  

      <div className='
        sm:hidden flex flex-1 justify-end 
        items-center'
        onClick={() => setToggle((prevToggle) => !prevToggle)}
      >
       
        {!toggle? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className="w-6 h-6 stroke-blue-900">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className="w-6 h-6 stroke-blue-900">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div> 

      <div 
        className={`${toggle ? 'flex' : 'hidden'}
          bg-gradient-to-r from-gray-900 to-gray-800
          absolute w-full left-0 p-6 sidebar 
          rounded top-14`}
      >
        <ul className='list-none flex flex-col justify-end 
              items-center flex-1 text-slate-100'
        >
          {navLinks.map((link, index) => (
            <li 
              key={link.id} 
              className={`font-normal cursor-pointer`}
            >
              <a href={`#`}>{link.title}</a>
            </li>
          ))}
        </ul> 
      </div>
    </nav>
  )
}

export default NavBar

