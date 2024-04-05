import React from 'react'
import Image from 'next/image'
import normalStar from '../../public/star/normalStart.svg'

const Footer = () => {
  return (
    <div className='py-[40px] bg-white-fefe color-blacker font-Lexend '>
      <div className='flex gap-[40px] p-[20px] justify-between m-auto container'>
        <div className='flex-1 max-w-[250px]'>
          <a className="flex flex-nowrap items-center gap-3 text-logo" href="">
            <Image width={42} height={42} className='rotate-[-10deg] mr-[0.25rem]' src={normalStar} alt={""} />
            Gleam
          </a>
        </div>
        <ul className='flex flex-1 flex-wrap my-[1rem]'>
          <li className='w-[150px] mr-[40px] mb-[20px]'>News</li>
          <li className='w-[150px] mr-[40px] mb-[20px]'>Discord</li>
          <li className='w-[150px] mr-[40px] mb-[20px]'>Code</li>
          <li className='w-[150px] mr-[40px] mb-[20px]'>Sponsor</li>
          <li className='w-[150px] mr-[40px] mb-[20px]'>Cheat sheets</li>
          <li className='w-[150px] mr-[40px] mb-[20px]'>Language tour</li>
          <li className='w-[150px] mr-[40px] mb-[20px]'>Documentation</li>
          <li className='w-[150px] mr-[40px] mb-[20px]'>Packages</li>
        </ul>
        <ul className='flex flex-col text-small my-[1rem]'>
          <li className='mb-[10px] opacity-[0.6]'>© 2024 Louis Pilfold</li>
          <li className='mb-[10px] opacity-[0.6] text-right'><a href="https://github.com/gleam-lang/gleam/blob/main/CODE_OF_CONDUCT.md">Code of conduct</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer