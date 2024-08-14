"use client";
import { homeData } from "@/public/data/home";
import React, { useState } from "react";

const Expertise = () => {
  const [activeTab, setActiveTab] = useState(homeData.expertise.tabs[0].label);

  return (
    <section id="expertise">
      <h2>{homeData.expertise.title}</h2>
      <p className="mt-2">{homeData.expertise.subTitle}</p>
      <div className="mt-16">
        <div className="flex flex-wrap gap-x-3 gap-y-2">
          {homeData.expertise.tabs.map((item) => (
            <h3
              onClick={() => setActiveTab(item.label)}
              className={`text-sm font-medium p-3 text-start transition-transform cursor-pointer ${
                activeTab === item.label
                  ? "bg-[hsla(0,0%,9%,1)] text-[#fff] rounded-lg"
                  : ""
              }`}
              key={item.label}
            >
              {item.label}
            </h3>
          ))}
        </div>

        <div className="mt-12">
          {homeData.expertise.tabs.map(
            (item) =>
              item.label === activeTab && (
                <div key={item.label} data-aos="fade">
                  {/* impact */}
                  <div className="flex flex-col md:flex-row gap-5 mb-8">
                    {item.impact.map((item) => (
                      <div
                        key={item.description}
                        className="border flex flex-col justify-between gap-3 p-3 md:p-5 rounded-xl text-sm"
                      >
                        <div className="flex justify-between gap-2">
                          <p className="text-black font-semibold">
                            {item.title}
                          </p>
                          {item.icon}
                        </div>
                        {item.description}
                      </div>
                    ))}
                  </div>

                  {/* key strengths */}
                  <ul className="mb-6 space-y-5 ps-1">
                    {item.keyStrengths.map((item) => (
                      <li key={item.description}>
                        <h4 className="font-semibold text-black">
                          {item.title}
                        </h4>
                        <p className="text-sm mt-1">{item.description}</p>
                      </li>
                    ))}
                  </ul>

                  {/* description */}
                  <p className="ps-1">{item.description}</p>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
