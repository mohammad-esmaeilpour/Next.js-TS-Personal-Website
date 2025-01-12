"use client";
import { homeData } from "@/public/data/home";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <main className="text-center hero-custom relative">
      <div className="flex justify-center gap-x-4 flex-wrap">
        <h1>
          <strong>
            <strong className="text-gradient">{homeData.hero.title}</strong>
          </strong>
        </h1>
        <span className="text-gradient">Front-End Developer</span>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex md:flex-1 md:justify-end justify-center text-gradient">
          Specializing in
        </div>

        <div className="flex justify-center md:justify-start md:flex-1">
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
              deleteSpeed: "natural",
              delay: 70,
            }}
          />
        </div>

      </div>

      <h2 className="text-gradient text-xl font-medium mt-16">
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
