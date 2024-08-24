"use client";
import Image from "next/image";
import React from "react";
import { homeData } from "@/public/data/home";
import { aboutHeadings } from "@/public/data/about";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="text-center overflow-hidden pt-24"
      data-aos="fade-up"
    >
      <div className="flex mx-auto items-end gap-20 relative justify-center bg-gradient-to-b from-transparent via-transparent to-white">
        <Image
          src={homeData.aboutMe.img}
          alt="Photo of Mohammad Esmaeilpour, Front-End Developer"
          width={500}
          height={500}
          className="object-contain -z-10"
        />
        {/* <div className="flex">
          <h1>{aboutHeadings.h1.title}</h1>
          {aboutHeadings.h1.subTitle}
        </div> */}
        {/* <p
          data-aos="fade-left"
          className="absolute lg:-right-10 lg:top-[70%] top-[75%] border bg-white rounded-2xl max-w-2xl p-3 text-base lg:p-7 text-left"
        >
          {homeData.aboutMe.subTitle}
        </p> */}
      </div>

      {/* <h2 className="mt-52 sm:mt-20 lg:mt-12">{aboutHeadings.h1.title}</h2> */}
      {/* <div className="mt-5"> */}
      {/* {aboutHeadings.h1.subTitle} */}
      {/* {homeData.aboutMe.intoView.links.map((item) => (
          <div
            key={item.title}
            className="cursor-pointer text-blue-500 flex justify-center ms-2 items-center gap-1"
            onClick={() => ScrollToView(item.target)}
          >
            {item.title}
            <span className="animate-bounce">
              <ArrowDownIcon size={12} />
            </span>
          </div>
        ))} */}
      {/* </div> */}
    </div>
  );
};

export default AboutMe;
