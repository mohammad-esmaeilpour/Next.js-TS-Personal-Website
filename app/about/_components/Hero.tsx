import { aboutHeadings } from '@/public/data/about'
import Image from 'next/image';
import React from "react";
import { homeData } from '@/public/data/home';
import Skills from './Skills';
import Link from 'next/link';
const Hero = () => {
  return (
    <div className=" max-w-7xl mx-auto relative">
      <div className="text-center overflow-hidden pt-10">
        <div className="flex mx-auto items-end gap-20 relative justify-center bg-gradient-to-b from-transparent via-transparent to-white">
          <Image
            src={homeData.aboutMe.img}
            alt="Photo of Mohammad Esmaeilpour, Front-End Developer"
            width={470}
            height={470}
            className="object-contain -z-10"
          />
        </div>
      </div>
      <div className="mockup-browser bg-white border-base-300 border -translate-y-20 m-3">
        <div className="mockup-browser-toolbar before:text-white">
          <span className="absolute w-3 h-3 bg-red-300 left-6 rounded-full"></span>
          <span className="absolute w-3 h-3 bg-yellow-300 left-11 rounded-full"></span>
          <span className="absolute w-3 h-3 bg-green-300 left-16 rounded-full"></span>
          <div className="input border-base-300 border text-center text-sm content-center">
            <Link className="text-blue-500" href={"/"}>
              https://esmaeilpour.site
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-20 min-h-[350px] justify-between  m-3 mt-1 rounded-xl items-center lg:px-10 py-10">
          <div className="lg:text-center">
            <h1 className="mt-16 mb-5">{aboutHeadings.h1.title}</h1>
            <p>{aboutHeadings.h1.subTitle}</p>
          </div>
          <Skills />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Hero