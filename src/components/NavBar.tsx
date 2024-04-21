"use client"

import React, { useState } from "react";
import Image from "next/image";
import framerMotionLogo from "../../public/framerLogo/framer-motion.svg"
import { motion } from 'framer-motion'
import Logo from "./utils/Logo";

const NavBar = () => {
  return (
    <div className="z-50 navbar-blur fixed m-auto flex w-full max-w-full items-center justify-center bg-plastic-yellow bg-opacity-[0.25] shadow-md">
      <nav className="container flex items-center justify-between p-5 font-Lexend">
        <div>
          <Logo />
        </div>
        <div>
          <NavLink text={"News"} />
          <NavLink text={"Community"}/>
          <NavLink text={"Sponsor"}/>
        </div>
        <div>
          <NavLink text={"Packages"} />
          <NavLink text={"Docs"} />
          <NavLink text={"Code"} />
        </div>
      </nav>
    </div>
  );
};

const NavLink = ({text}: {text: string}) => {
  return (
    <motion.a 
    className="relative ml-5 text-normal" href=""
    initial={"free"}
    whileHover={"hover"}
    >
      {text}
      <motion.span 
        className={`absolute w-full bottom-0 h-[2px] left-0 bg-black`}
        variants={{
          "free": {
            width: "0%",
          },
          "hover": {
            width: "100%",
          }
        }}
      />
    </motion.a>
  )
}

export default NavBar;
