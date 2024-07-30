import Image from "next/image";
import React from "react";
import { homeHeadings } from "@/public/data/home";
import mamad from "@/public/img/ui/mohammad.png";

const AboutMe = () => {
  return (
    <div className="text-center mt-56 lg:mb-96 px-3 overflow-hidden" data-aos="fade-up">
      <h2 className="max-w-5xl mx-auto">{homeHeadings.h2.first}</h2>
      <div className="flex max-w-4xl mx-auto relative min-h-[600px] bg-gradient-to-b from-transparent via-transparent to-white">
        <Image
          src={mamad}
          alt="mohammad esmaeilpour"
          fill
          className="object-contain -z-10 lg:-translate-x-40"
        />
        <p
          data-aos="fade-left"
          className="absolute lg:-right-10 lg:top-[85%] top-[75%] border bg-white rounded-2xl max-w-2xl p-3 text-sm lg:p-7 text-left"
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
