import React from "react";
import Image from "next/image";
import noramlStar from "../../public/star/normalStart.svg";

const Hero = () => (
  <div className="pt-[40px]">
    <div className="container m-auto flex items-center gap-14">
      <Image
        className="rotate-[-10deg] pb-[30px] pl-[60px] pr-[60px] pt-[10px]"
        src={noramlStar}
        width={400}
        height={307}
        alt={""}
      />
      <div>
        <div className="font-Lexend-R w-[22rem] text-hero">
          <b className="font-Lexend-B">Gleam</b> is a{" "}
          <b className="font-Lexend-B">friendly</b> language for building{" "}
          <b className="font-Lexend-B">type-safe</b> systems that{" "}
          <b className="font-Lexend-B">scale!</b>
        </div>
        <a
          className="bg-brown-pink mt-[20px] rounded-[100px] px-[40px] py-[10px]"
          href=""
        >
          Try Gleam
        </a>
      </div>
    </div>
    <img src="" alt="" />
  </div>
);

export default Hero;
