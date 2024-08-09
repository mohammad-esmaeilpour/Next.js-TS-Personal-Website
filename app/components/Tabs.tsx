"use client";
import { homeData, homeHeadings } from "@/public/data/home";
import React, { Fragment, useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(homeData.expertise[0].label);

  return (
    <section className="my-20 max-w-7xl mx-auto px-3">
      <h2>{homeHeadings.h2.expertise.title}</h2>
      <p className="mt-2">{homeHeadings.h2.expertise.subTitle}</p>
      <div className="mt-16">
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {homeData.expertise.map((item) => (
            <button
              onClick={() => setActiveTab(item.label)}
              className={`text-sm p-3 text-start rounded-lg transition-transform ${
                activeTab === item.label ? "bg-[#000] text-white" : ""
              }`}
              key={item.label}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-12">
          {homeData.expertise.map(
            (item) =>
              item.label === activeTab && (
                <div key={item.label} data-aos="fade-up">
                  {/* impact */}
                  <div className="flex flex-col md:flex-row gap-5 mb-8">
                    {item.impact.map((item) => (
                      <div
                        key={item.title}
                        className="border flex flex-col justify-between gap-3 p-5 rounded-xl text-sm"
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
                      <li key={item.title}>
                        <h5 className="font-semibold text-black">
                          {item.title}
                        </h5>
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

export default Tabs;
