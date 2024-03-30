"use client"

import React from "react";
import Image from "next/image";
import noramlStar from "../../public/star/normalStart.svg";
import { motion } from 'framer-motion'

const Hero = () => (
  <div className="pt-hero-nav bg-plastic-yellow">
    <div className="container m-auto flex items-center gap-14">
      <motion.div
        initial={{rotate: ["0deg", "180deg"], scale: [1, 1.3]}}
        whileInView={{rotate: ["180deg","0deg"], scale: [1.3, 1]}}
        viewport={{once: true}}
      >
        <Image
          className="rotate-[-10deg] pb-[30px] pl-[60px] pr-[60px] pt-[10px]"
          src={noramlStar}
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
    {/* <Image src={} alt="" /> */}
  </div>
);

export default Hero;
