"use client";
import Image from "next/image";
import React from "react";
import { homeHeadings } from "@/public/data/home";
import mamad from "@/public/img/ui/mohammad.png";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import Link from "next/link";
import { ScrollToView } from "./global/ScrollToView";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="max-w-7xl mx-auto text-center overflow-hidden py-32 px-3 mt-20"
      data-aos="fade-up"
    >
      <div className="flex max-w-4xl mx-auto relative min-h-[600px] bg-gradient-to-b from-transparent via-transparent to-white">
        <Image
          src={mamad}
          alt="Photo of Mohammad Esmaeilpour, Front-End Developer"
          fill
          className="object-contain -z-10 lg:-translate-x-40"
        />
        <p
          data-aos="fade-left"
          className="absolute lg:-right-10 lg:top-[70%] top-[75%] border bg-white rounded-2xl max-w-2xl p-3 text-base lg:p-7 text-left"
        >
          {homeHeadings.h2.abouteMe.subTitle}
        </p>
      </div>

      <h2 className="mt-12">{homeHeadings.h2.abouteMe.title}</h2>
      <div className="mt-2">
        Learn more about my
        <span
          className="cursor-pointer text-blue-500"
          onClick={() => ScrollToView("expertise")}
        >
          {" "}
          expertise
        </span>{" "}
        or Check out my
        <span
          className="cursor-pointer text-blue-500"
          onClick={() => ScrollToView("work-highlight")}
        >
          {" "}
          highlighted projects
        </span>
      </div>
    </div>
  );
};

export default AboutMe;
