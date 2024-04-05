import React, { useEffect } from "react";
import Image from "next/image";
import pers1 from "../../../public/people/pers1.jpg";
import pers2 from "../../../public/people/pers2.jpg";
import pers3 from "../../../public/people/pers3.jpg";
const people = [pers1, pers2, pers3]

const Developers = () => {
  const peopleCount: React.ReactNode[] = []
  for (let i = 0; i < 239; i++) {
    peopleCount.push(<Dev id={i%3} />)
  }
  
  return (
    <>
      {...peopleCount}
    </>
  );
};

const Dev = ({id} : {id: number}) => {
  return (
    <li>
      <a href="">
        <Image
          className="rounded-[100%]"
          width={50}
          height={50}
          src={people[id]}
          alt={""}
        />
      </a>
    </li>
  )
}

export default Developers;
