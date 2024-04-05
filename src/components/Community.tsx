import React from "react";
import Image from "next/image";
import waves from '../../public/waves/waves1.svg'

const Community = () => {
  return (
    <section className="relative pt-[40px] w-full community-grad pb-[var(--waves-height)]">
      <div className="container flex flex-col justify-center items-center m-auto p-[20px] text-center">
        <h2 className="mb-[20px] text-friendly-title">Friendly 💜</h2>
        <p className="text-friendly-text my-[1em]">
          As a community, we want to be friendly too. People from around the
          world, of all backgrounds, genders, and experience levels are welcome
          and respected equally. See our community code of conduct for more.
        </p>
        <p className="text-friendly-text my-[1em]">
          Black lives matter. Trans rights are human rights. No nazi bullsh*t.
        </p>
      </div>
      <Image className={`h-[var(--waves-height)] absolute bottom-[-7px] waves-home`} src={waves} alt="" />
    </section>
  );
};

export default Community;
