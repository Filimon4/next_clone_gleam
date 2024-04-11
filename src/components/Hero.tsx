"use client"

import React, { useState } from "react";
import Image from "next/image";
import noramlStar from "../../public/star/normalStart.svg";
import happyStar from '../../public/star/happyStar.svg'
import { motion } from 'framer-motion'
import waves from '../../public/waves/waves1.svg'

const Hero = () => {
  const [starHover, setStarHover] = useState(false)

  return (
    <div className="pt-hero-nav bg-plastic-yellow pb-[var(--waves-height)] relative">
      <div className="container m-auto flex items-center gap-14 pb-[50px] pt-[30px]">
        <motion.div
          initial={"normal"}
          onHoverStart={() => setStarHover(true)}
          onHoverEnd={() => setStarHover(false)}
          whileHover={'rotate'}
          variants={{
            "normal": {
              transform: "rotate(-10deg)"
            },
            "rotate": {
              transform: "rotate(25deg)"
            }
          }}
        >
          <Image
            className="rotate-[-10deg] pb-[30px] pl-[60px] pr-[60px] pt-[10px]"
            src={!starHover ? noramlStar : happyStar}
            width={400}
            height={307}
            alt={""}  
          />
        </motion.div>
        <motion.div
          initial={{opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
        >
          <motion.div
            className="font-Lexend-R block w-[22rem] text-hero"
          >
            <b className="font-Lexend-B">Gleam</b> is a{" "}
            <b className="font-Lexend-B">friendly</b> language for building{" "}
            <b className="font-Lexend-B">type-safe</b> systems that{" "}
            <b className="font-Lexend-B">scale!</b>
          </motion.div>
          <a
            className="bg-brown-pink inline-block text-white-fefe mt-[20px] rounded-[100px] px-[40px] py-[10px] text-hero-button"
            href=""
          >
            Try Gleam
          </a>
        </motion.div>
      </div>
      <Image className={`h-[var(--waves-height)] absolute bottom-[-7px] waves-home`} src={waves} alt="" />
    </div>
  )
};

export default Hero;
