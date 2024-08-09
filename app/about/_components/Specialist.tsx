import { aboutData, aboutHeadings } from "@/public/data/about";
import React from "react";

const Specialist = () => {
  return (
    <section className="py-20 text-center bg-gradient-to-b from-white via-gray-50/50 to-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2>My Skills</h2>
        <p className="mt-2 line-clamp-1">
          {aboutHeadings.h2.specialist.subTitle}
        </p>
      </div>
      <div className="flex flex-wrap px-10 mt-32 gap-x-10 gap-y-16 justify-center max-w-7xl mx-auto">
        {aboutData.specialistCards.map((item) => (
          <div key={item.title} className="indicator min-w-[350px] text-start">
            <div className="indicator-item indicator-start">{item.icon}</div>
            <div className="card border bg-white w-full">
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialist;
