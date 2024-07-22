"use client";
import { aboutMeData } from "@/public/data/home";
import React from "react";

const AboutMe = () => {
  return (
    <div className="max-w-2xl mx-auto my-60" data-aos="fade-up">
      <h4>{aboutMeData.subTitle}</h4>
      <h2>{aboutMeData.title}</h2>
      <p>{aboutMeData.des}</p>
    </div>
  );
};

export default AboutMe;
