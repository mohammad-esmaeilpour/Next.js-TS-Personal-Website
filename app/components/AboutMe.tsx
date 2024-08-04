import Image from "next/image";
import React from "react";
import { homeHeadings } from "@/public/data/home";
import mamad from "@/public/img/ui/mohammad.png";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div
      className="text-center mt-56 lg:mb-96 px-3 overflow-hidden"
      data-aos="fade-up"
    >
      <div className="flex max-w-4xl mx-auto relative min-h-[600px] bg-gradient-to-b from-transparent via-transparent to-white">
        <Image
          src={mamad}
          alt="image of mohammad esmaeilpour"
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
      <Link
        href={"/about"}
        className="mt-12 flex items-center justify-center gap-1"
        data-aos="fade-left"
      >
        <h2>{homeHeadings.h2.abouteMe.title}</h2>
        <ExternalLinkIcon size={30} />
      </Link>
    </div>
  );
};

export default AboutMe;
