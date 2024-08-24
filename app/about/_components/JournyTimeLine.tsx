import ExternalLinkIcon from "@/app/components/icons/ExternalLinkIcon";
import LockIcon from "@/app/components/icons/LockIcon";
import ArrowOutwardIcon from "@/app/components/icons/solid/ArrowOutwardIcon";
import { aboutData, aboutHeadings } from "@/public/data/about";
import Link from "next/link";
import React from "react";

const JournyTimeLine = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto mb-32">
          <h2>{aboutHeadings.h2.journey.title}</h2>
          <p className="mt-4">{aboutHeadings.h2.journey.subTitle}</p>
        </div>
        <ul className="lg:ps-9">
          {aboutData.journeyTimeLine.map((item) => (
            <li
              key={item.title}
              className="border-dashed lg:border-l-2 lg:ps-14 relative xl:grid xl:grid-cols-12 max-lg:space-y-8 lg:gap-10 pb-44 lg:pb-20 last-of-type:pb-10 last-of-type:border-0"
              data-aos="fade-up"
            >
              <div className="lg:col-span-3 mb-5">
                <h4 className="text-gradient text-xl">{item.title}</h4>
                <div className="flex gap-3 item-end mb-0.5 mt-3">
                  <p className="text-sm">{item.time}</p>
                  <p className="text-sm font-medium">( {item.status} )</p>
                </div>
                <p className="text-sm">{item.year}</p>
              </div>
              <div className="lg:col-span-9">
                {item.description}
                <div className="flex flex-wrap items-end justify-between">
                  <div className="mt-10 flex flex-col">
                    <h6 className="text-black font-medium mb-2">
                      My skills used
                    </h6>
                    <div className="flex flex-wrap gap-y-2 gap-x-5">
                      {item.skills?.map((item) => (
                        <div
                          key={item?.title}
                          className="flex items-center gap-2"
                        >
                          {item?.icon}
                          <p> {item?.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5 flex items-baseline gap-5">
                    {item.link ? (
                      <Link
                        href={item.link}
                        target="_blank"
                        className="btn btn-secondary"
                      >
                        Live preview
                        <ArrowOutwardIcon size={15} color="black" />
                      </Link>
                    ) : (
                      <span className="text-green-600 text-sm flex gap-2">
                        <LockIcon size={18} />
                        For internal use
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute lg:left-0 left-6 -translate-x-1/2 -top-28 lg:-top-3 flex items-center justify-center rounded-xl w-20 h-20">
                {item.symbol}
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <Link className="btn btn-primary mt-20" href={"/projects"}>
            See my projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JournyTimeLine;
