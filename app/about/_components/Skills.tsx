'use client'
import { aboutData} from "@/public/data/about";
import React from "react";
import 'swiper/css';

const Skills = () => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="lg:text-center font-medium">Tech Stack</h3>
      <div className="flex flex-wrap lg:justify-center gap-3">
        {aboutData.skills.map((item) => (
          <div className="flex items-center gap-2 border bg-white px-2 py-1 rounded-lg">
            {item.icon}
            <span className="text-sm">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
