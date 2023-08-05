import { footerLinks } from '@/constants'
import React from 'react'

const Footer = () => {
  return (
    <footer 
      className='flex flex-col py-6 bg-slate-100'
    >
      <div 
        className='flex flex-col md:flex-row justify-between px-4'
      >
        {footerLinks.map((footerLink, footerIndex) => (
          <div 
            className=' md:basis-1/3 items-center flex flex-col p-2'
            key={footerIndex} 
          >
              <h1 className='font-bold mb-2'>{footerLink.title}</h1>
              {footerLink.links.map((link, index) => (
                <a
                  key={index} href={link.link} target='_blank'
                  rel='noopener noreferrer'
                >
                  {link.name}
                </a>
              ))}
          </div>          
        ))}

      </div>

      <div className='mt-4 text-center'>
        2023 Apps. All Rights Reserved.
      </div>
    </footer>
    
  )
}

export default Footer