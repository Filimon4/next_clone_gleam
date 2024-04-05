"use client"

import React, { useEffect, useRef, useState } from "react";
import Developers from "./utils/Developers";
import {motion, useAnimate} from 'framer-motion'

const People = () => {
  const [expanded, setExpanded] = useState(false)
  const [expScope, expAnimate] = useAnimate() 

  useEffect(() => {
    if (expanded) {
      expAnimate('div', {height: "100%"})
    }
  }, [expanded])

  return (
    <motion.section ref={expScope} className="transition-all">
      <motion.div className={`overflow-hidden m-auto w-full pb-[20px] relative h-[var(--minify-people)]`}>
        <div className="container text-white-fefe m-auto px-[20px] text-center">
          <h2 className="text-sponsore-title">Lovely people</h2>
          <p className="mt-[30px] mb-[50px]">
            If you enjoy Gleam consider
            <a href="https://github.com/sponsors/lpil">becoming a sponsor</a>
            (or tell your boss to)
          </p>
        </div>
        <div className="overflow-hidden ">
          <ul className="flex justify-center items-center flex-wrap px-[20px] gap-[10px] m-0">
            <Developers />
          </ul>
          {!expanded &&
            <a href="/" 
            onClick={(e)=>{
              e.preventDefault()
              setExpanded(true)
            }} 
            className="h-[50px] absolute bottom-0 w-full three-dots three-dots-bg-grad"
            >
            </a>
          }
        </div>
      </motion.div>
    </motion.section>
  );
};

export default People;
