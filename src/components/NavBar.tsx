import React from "react";
import Image from "next/image";
import normalStar from "../../public/star/normalStart.svg";

const NavBar = () => {
  return (
    <div className="m-auto flex w-full max-w-full items-center justify-center fixed z-10 navbar-blur">
      <nav className="container flex items-center justify-between p-5 font-Lexend">
        <div>
          <a className="flex flex-nowrap items-center gap-3 text-logo" href="">
            <Image width={42} height={42} src={normalStar} alt={""} />
            Gleam
          </a>
        </div>
        <div>
          <a className="ml-5 text-normal" href="">
            News
          </a>
          <a className="ml-5 text-normal" href="">
            Community
          </a>
          <a className="ml-5 text-normal" href="">
            Sponsor
          </a>
        </div>
        <div>
          <a className="ml-5 text-normal" href="">
            Packages
          </a>
          <a className="ml-5 text-normal" href="">
            Docs
          </a>
          <a className="ml-5 text-normal" href="">
            Code
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
