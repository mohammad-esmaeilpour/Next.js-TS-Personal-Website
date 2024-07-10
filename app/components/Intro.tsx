import { introData } from "@/public/data/home";
import React from "react";

const Intro = () => {
  return (
    <div className="text-center mt-40 mb-32">
      <h3>{introData.subTitle}</h3>
      <h1 className="text-8xl max-w-4xl mx-auto">{introData.title}</h1>
    </div>
  );
};

export default Intro;
