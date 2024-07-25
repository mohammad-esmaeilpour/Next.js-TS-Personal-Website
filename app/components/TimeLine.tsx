import { timelineData } from "@/public/data/home";
import { aboutMeData } from "@/public/data/home";
import Image from "next/image";
import React from "react";
import mamad from "@/public/img/ui/43698.jpg";

const TimeLine = () => {
  return (
    <div className="mt-44 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex-1 flex flex-col">
          <h4>Specializing in Next.js, React, TypeScript, Tailwind, and MUI</h4>
          <h2>Crafting Exceptional Frontend Experiences</h2>
        </div>
        <div className="flex justify-center gap-4 mt-10">
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            Typescript
          </span>
          <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">
            Javascript
          </span>
          <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            Next js
          </span>
          <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
            React
          </span>
          <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
            Redux
          </span>
          <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
            Tailwind CSS
          </span>
          <span className="inline-flex items-center rounded-md bg-sky-50 px-2 py-1 text-xs font-medium text-sky-700 ring-1 ring-inset ring-indigo-700/10">
            Material UI
          </span>
        </div>
      </div>
      <ul className="timeline timeline-vertical px-32 mt-20">
        {timelineData.map((item) => (
          <li key={item.title} className="my-4">
            <div
              className={`timeline-${item.timelineDir} timeline-box flex flex-col gap-5 py-5 text-xl font-semibold leading-8 text-[#000] tracking-[-0.04em] relative`}
              data-aos={item.dataAos}
            >
              {item.timelineDir === "start" && item.dataAos !== "fade-down" && (
                <div className="absolute left-full top-1/2 bg-transparent border-r border-t rounded-tr-xl w-56 h-full"></div>
              )}
              {item.timelineDir === "end" && (
                <div className="absolute right-full top-1/2 bg-transparent border-l border-t rounded-tl-xl w-56 h-full"></div>
              )}
              {item.title}
              <p className="leading-[1.5] text-base tracking-[-0.01em]">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeLine;