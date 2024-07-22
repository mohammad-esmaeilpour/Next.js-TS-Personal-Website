"use client";
import { introData } from "@/public/data/home";
import React, { useEffect, useId, useState } from "react";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <div className="text-center min-h-[300px] mt-32">
      <h3>{introData.subTitle}</h3>
      <h1 className="text-7xl max-w-5xl mx-auto">
        {introData.title}
        <div className="flex gap-3 justify-center flex-wrap">
          <div className="flex flex-1 justify-end font-customeBold">
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
                wrapperClassName:
                  "font-customeBold bg-gradient-to-r from-blue-600 to-indigo-300 inline-block text-transparent bg-clip-text",
              }}
            />
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Intro;
