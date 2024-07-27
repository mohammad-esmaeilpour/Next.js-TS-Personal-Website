import Image from "next/image";
import React from "react";
import mamad from "@/public/img/ui/human-min.svg";
import { homeHeadings } from "@/public/data/home";

const AboutMe = () => {
  return (
    <div className="text-center mt-56 mb-96" data-aos="fade-up">
      <h1 className="max-w-5xl mx-auto">{homeHeadings.h1}</h1>
      <div className="flex max-w-4xl mx-auto relative min-h-[600px] bg-gradient-to-b from-transparent via-transparent to-white">
        <Image
          src={mamad}
          alt="mohammad esmaeilpour"
          fill
          className="object-contain -z-10 -translate-x-40"
        />
        <p
          data-aos="fade-left"
          className="absolute -right-10 top-[85%] border bg-white rounded-2xl max-w-2xl p-7 text-left"
        >
          Hello👋 Im Mohammad Esmaeilpour, a passionate and dedicated frontend
          developer with 25 years of life experience. I specialize in creating
          dynamic, user-friendly web applications using the latest technologies.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
