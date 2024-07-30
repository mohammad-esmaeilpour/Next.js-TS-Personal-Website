import { homeHeadings } from "@/public/data/home";
import { projectsData } from "@/public/data/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <div className="py-40 text-center bg-gradient-to-b from-transparent via-gray-50/50 to-gray-50">
      <div className="flex items-baseline justify-center gap-5">
        <h2>{homeHeadings.h2.third}</h2>
        <p>
          A collection of my best work demonstrating my expertise in{" "}
          <b> frontend development</b> and design.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto mt-20">
        {projectsData.projectsInfo.map((item) => (
          <div key={item.title} className="col-span-4">
            <div className="card cursor-pointer rounded-md overflow-hidden bg-white border hover:shadow-2xl transition-all">
              <div className="h-44 relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="card-body p-4 text-start">
                <h3 className="line-clamp-1">{item.title}</h3>
                <div className="text-sm font-light line-clamp-4">
                  {item.overview}
                </div>
                <div className="flex items-baseline justify-between pb-1">
                  <div className="flex mt-4 items-center gap-2">
                    {item.techIcons.map((icon, index) => (
                      <span key={index} className="flex items-center gap-1">
                        {icon}
                      </span>
                    ))}
                  </div>
                  <Link href={item.link}>
                    <svg
                      data-testid="geist-icon"
                      fill="none"
                      height="20"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="20"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14L21 3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href={"/projects"} className="btn btn-neutral mx-1 mt-10">
        View projects
      </Link>
    </div>
  );
};

export default Portfolio;
