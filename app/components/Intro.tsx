"use client";
import { introData } from "@/public/data/home";
import React, { useEffect, useId, useState } from "react";

const Intro = () => {
  return (
    <div className="text-center mt-40 mb-32">
      <h3>{introData.subTitle}</h3>
      <h1 className="text-7xl max-w-5xl mx-auto">{introData.title}</h1>
    </div>
  );
};

export default Intro;
