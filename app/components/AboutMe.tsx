"use client";
import Image from "next/image";
import React from "react";
import { ScrollToView } from "./global/ScrollToView";
import { homeData } from "@/public/data/home";
import ArrowDownIcon from "./icons/ArrowDownIcon";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="text-center overflow-hidden max-md:mt-16 md:pt-28"
      data-aos="fade-up"
    >
      <div className="flex max-w-4xl mx-auto relative min-h-[600px] bg-gradient-to-b from-transparent via-transparent to-white">
        <Image
          src={homeData.aboutMe.img}
          alt="Photo of Mohammad Esmaeilpour, Front-End Developer"
          fill
          className="object-contain -z-10 lg:-translate-x-40"
        />
        <p
          data-aos="fade-left"
          className="absolute lg:-right-10 lg:top-[70%] top-[75%] border bg-white rounded-2xl max-w-2xl p-3 text-base lg:p-7 text-left"
        >
          {homeData.aboutMe.subTitle}
        </p>
      </div>

      <h2 className="mt-52 sm:mt-20 lg:mt-12">{homeData.aboutMe.title}</h2>
      <div className="mt-5 flex flex-col sm:flex-row justify-center gap-2 sm:gap-0">
        {homeData.aboutMe.intoView.description}
        {homeData.aboutMe.intoView.links.map((item) => (
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
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
