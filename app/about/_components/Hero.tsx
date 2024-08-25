import { aboutHeadings } from '@/public/data/about'
import Image from "next/image";
import React from "react";
import Skills from './Skills';
import personImage from "@/public/img/ui/mohammad.png";

const Hero = () => {
  return (
    <div className=" max-w-7xl mx-auto relative px-3">
      <div className="text-center overflow-hidden pt-10">
        <div className="flex mx-auto items-end gap-20 relative justify-center bg-gradient-to-b from-transparent via-40% via-transparent to-80% to-white">
          <Image
            src={personImage}
            alt="Photo of Mohammad Esmaeilpour, Front-End Developer"
            width={470}
            height={470}
            className="object-contain -z-10"
          />
        </div>
      </div>
      <div className="flex flex-col gap-20 -translate-y-44">
        <div className='text-center'>
          <h1 className="mt-16 mb-5">{aboutHeadings.h1.title}</h1>
          <p>{aboutHeadings.h1.subTitle}</p>
        </div>
        <Skills />
      </div>
    </div>
  );
}

export default Hero