"use client";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="container mx-auto text-center mt-16 lg:mt-48 mb-20 px-3">
      <h1 className="text-gradient">Experiences Frontend developer</h1>
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
      <p className="mt-10 text-base">
        Crafting Exceptional <b className="text-gray-800">Frontend</b>{" "}
        Experiences with modern technologies
      </p>
      <div className="flex w-full justify-between sm:justify-center items-center mt-5 gap-2">
        <Link href={"/"} className="btn btn-neutral flex-1 sm:flex-none">
          View protfolio
        </Link>
        <Link href={"/"} className="btn relative flex-1 sm:flex-none">
          View projects
        </Link>
      </div>
    </div>
  );
};

export default Hero;
