import { aboutData, aboutHeadings } from "@/public/data/about";
import Link from "next/link";
import React from "react";
import LockIcon from "../../components/icons/LockIcon";

const JournyTimeLine = () => {
  return (
    <section className="mt-20">
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
            >
              <div className="lg:col-span-3 mb-5">
                <h4 className="text-gradient text-3xl font-bold mb-3">
                  {item.title}
                </h4>
                <div className="flex gap-3 item-end mb-1.5 mt-3">
                  <div>{item.time}</div>
                  <div>({item.status})</div>
                </div>
                <div>{item.year}</div>
              </div>
              <div className="lg:col-span-9">
                <div className="text-xl mb-1 font-semibold">Overview</div>
                <div className="font-normal mb-5">{item.overview}</div>
                <div className="text-xl mb-1 font-semibold">About</div>
                <div className="font-normal mb-5">{item.about}</div>
                <div className="text-xl mb-1 font-semibold">
                  Role and Responsibilities
                </div>
                <div className="font-normal mb-5">{item.role}</div>
                <div className="flex flex-wrap items-end gap-5 justify-between">
                  <div className="mt-10 flex flex-col">
                    <div className="text-black font-medium mb-2">
                      Skills & Tools
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.skills?.map((item) => (
                        <div
                          key={item?.title}
                          className="text-sm bg-gray-200 rounded-full px-3 py-1"
                        >
                          {item?.title}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* <div className="mt-5 flex items-baseline gap-5">
                    {item.link ? (
                      <Link
                        href={item.link}
                        target="_blank"
                        className="btn btn-secondary"
                      >
                        Live preview
                        <ArrowOutwardIcon size={15} color="black" />
                      </Link>
                    ) : ( */}
                      <span className="text-green-600 text-sm flex gap-2">
                        <LockIcon size={18} />
                        For internal use
                      </span>
                    {/* )}
                  </div> */}
                </div>
              </div>
              <div className="absolute lg:left-0 left-0 max-lg:justify-start lg:-translate-x-1/2 -top-28 lg:-top-3 flex items-center justify-center rounded-xl w-20 h-20">
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
