'use client'
import { aboutData} from "@/public/data/about";
import React from "react";
import 'swiper/css';

const Skills = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-center">
        Skills & Expertise
      </h2>
      <div className="flex flex-wrap justify-center gap-x-3">
        {aboutData.skills.map((item) => (
          <div key={item.title} className="flex flex-col py-5 items-center gap-2 bg-white px-2 rounded-lg min-w-[90px]">
            {item.icon}
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
