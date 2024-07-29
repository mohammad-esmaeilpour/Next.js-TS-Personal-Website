"use client";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="container mx-auto text-center mt-48 mb-20">
      <h1 className="text-gradient">Experiences Frontend developer</h1>
      <div className="flex gap-3 justify-center flex-wrap">
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
      <p className="mt-10">
        Crafting Exceptional <b className="text-gray-800">Frontend</b>{" "}
        Experiences with modern technologies
      </p>
      <Link href={"/"} className="btn btn-neutral mx-1">
        View protfolio
      </Link>
      <Link href={"/"} className="btn mt-5 mx-1 relative">
        View projects
      </Link>
    </div>
  );
};

export default Hero;
