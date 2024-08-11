"use client";
import { homeHeadings } from "@/public/data/home";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import { ScrollToView } from "./global/ScrollToView";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto text-center mt-16 lg:mt-40 mb-20 px-3">
      <h1 className="text-gradient">Experienced Frontend Developer</h1>
      <div className="flex flex-col lg:flex-row items-center gap-3 justify-center flex-wrap">
        <div className="flex flex-1 justify-end text-gradient">
          Specializing in
        </div>
        <div className="flex flex-1">
          <Typewriter
            options={{
              strings: [
                "Typescript",
                "Javascript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Material UI",
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: "text-gradient",
              cursor: "",
            }}
          />
        </div>
      </div>
      <h2 className="text-gradient text-base font-medium mt-16">
        {homeHeadings.h1.subTitle}
      </h2>
      <div className="flex w-full justify-between sm:justify-center items-center mt-5 gap-2">
        <Link
          href={"/projects"}
          className="btn btn-primary flex-1 sm:flex-none"
        >
          View My Projects
        </Link>
        <button
          onClick={()=> ScrollToView('about-me')}
          className="btn btn-secondary flex-1 sm:flex-none"
        >
          Get to know me
        </button>
      </div>
    </div>
  );
};

export default Hero;
