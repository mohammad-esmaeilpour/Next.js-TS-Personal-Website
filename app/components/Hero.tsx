"use client";
import { homeData } from "@/public/data/home";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <main className="text-center hero-custom">
      <h1 className="text-gradient">
        <strong>
          <strong>Mohammad Esmaeilpour</strong> {""}
          Front-End Developer
        </strong>
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
      </h1>
      <h2 className="text-gradient text-base font-medium mt-16">
        {homeData.hero.subTitle}
      </h2>
      <div className="flex w-full justify-center items-center mt-5 gap-2">
        {homeData.hero.callToAction.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className={`btn btn-${item.btn}`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Hero;
