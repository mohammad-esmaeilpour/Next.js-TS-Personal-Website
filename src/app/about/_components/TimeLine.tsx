import { aboutData, aboutHeadings } from "@/public/data/about";
import React from "react";

const TimeLine = () => {
  return (
    <div className="mt-44 overflow-hidden px-3">
      <ul className="md:timeline timeline-vertical lg:px-32 mt-20">
        {aboutData.timeline.map((item) => (
          <li key={item.title} className="my-4">
            <div
              className={`timeline-${item.timelineDir}  timeline-box flex flex-col gap-5 py-5 text-xl font-semibold leading-8 text-[#000] tracking-[-0.04em] relative`}
            >
              {item.timelineDir === "start" &&  (
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
