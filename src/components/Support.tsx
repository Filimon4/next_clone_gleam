import React from 'react'
import Image from 'next/image'

import flyio from '../../public/partners/fly.svg'

const Support = () => {
  return (
    <section className='w-full py-[30px] text-blacker bg-faff-pink'>
      <div className='container flex flex-col m-auto justify-center items-center gap-[30px] p-[20px]'>
        <h2 className='text-[1.9rem]'>Kindly supported by</h2>
        <a href="">
          <Image src={flyio} height={120} alt={''} />
        </a>
      </div>
    </section>
  )
}

export default Support