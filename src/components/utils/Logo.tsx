import React from 'react'
import Image from 'next/image'
import framerMotionLogo from '../../../public/framerLogo/framer-motion.svg'

const Logo = () => {
  return (
    <a className="flex flex-nowrap items-center gap-3 text-logo" href="">
        <Image width={32} height={32} src={framerMotionLogo} alt={""} />
        Framer
    </a>
  )
}

export default Logo
