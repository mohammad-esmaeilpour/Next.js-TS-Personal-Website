"use client";
import { introData } from "@/public/data/home";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="text-center mt-48 mb-20">
      <h1 className="max-w-8xl mx-auto">
        {introData.title}
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
              }}
            />
          </div>
        </div>
      </h1>
      <h3 className="mt-10">
        Crafting Exceptional <b className="text-gray-800">Frontend</b>{" "}
        Experiences with modern technologies
      </h3>
      <div className="btn btn-neutral mx-1">View protfolio</div>
      <div className="btn mt-5 mx-1 relative">
        View projects
        <svg aria-hidden="true" viewBox="0 0 6 6" width="10" height="10">
          <path
            d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
            fill="gray"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
