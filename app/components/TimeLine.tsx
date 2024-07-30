import { homeData } from "@/public/data/home";
import React from "react";

const TimeLine = () => {
  return (
    <div className="mt-44 overflow-hidden px-3">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex-1 flex flex-col">
          <p>Specializing in Next.js, React, TypeScript, Tailwind, and MUI</p>
          <h2>Crafting Exceptional Frontend Experiences</h2>
        </div>
        <div className="flex justify-center flex-wrap gap-4 mt-10">
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
      <ul className="md:timeline timeline-vertical lg:px-32 mt-20">
        {homeData.timeline.map((item) => (
          <li key={item.title} className="my-4">
            <div
              className={`timeline-${item.timelineDir}  timeline-box flex flex-col gap-5 py-5 text-xl font-semibold leading-8 text-[#000] tracking-[-0.04em] relative`}
              data-aos={item.dataAos}
            >
              {item.timelineDir === "start" && item.dataAos !== "fade-down" && (
                <div className="absolute left-full top-1/2 bg-transparent border-r border-t rounded-tr-xl w-56 h-full"></div>
              )}
              {item.timelineDir === "end" && (
                <div className="absolute right-full top-1/2 bg-transparent border-l border-t rounded-tl-xl w-56 h-full"></div>
              )}
              <h3>{item.title}</h3>
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
