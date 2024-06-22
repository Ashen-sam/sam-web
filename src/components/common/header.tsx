'use client'
import Link from 'next/link';
import { useState } from 'react';
import Button from './_components/button';
import Image from 'next/image';
import logo from '../../../public/images/LOGO.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sideBarOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className=' w-full p-3 bg-headercolor text-white fixed'>
      <div className='flex items-center justify-between container'>
        <div className='relative z-10'>
          <Link href={'./'}><Image  className='bg-white inset-0 p-2 rounded'  width={40} alt='logo' src={logo}/></Link>
        </div>
        <div className='sm:flex gap-8 hidden font-semibold'>
          <Link href='/about'>About</Link>
          <Link href='/'>Pricing</Link>
          <Link href='/contact-us'>Contact</Link>
          <Link href='/contact-us'>Services</Link>
          <Link href='/contact-us'>Blog</Link>

        </div>
        <Button
          isOpen={isOpen}
          sideBarOpen={sideBarOpen} />
        <button className="bg-white sm:flex hidden p-2 text-sm rounded border-none font-semibold  text-headercolor cursor-pointer hover:bg-slate-200">Social</button>
      </div>
    </div>
  )
}

export default Header
