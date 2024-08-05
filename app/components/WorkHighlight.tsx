"use client";
import { projectsData } from "@/public/data/projects";
import Image from "next/image";
import Link from "next/link";
import React, { createRef, useId, useRef } from "react";
import Modal from "./global/Modal";
import GithubIcon from "./icons/GithubIcon";
import { homeData, homeHeadings } from "@/public/data/home";

const WorkHighlight = () => {
  const modalsRef: any = useRef(
    projectsData.projectsInfo.map(() => createRef())
  );
  const handleModal = (index: any) => {
    modalsRef.current[index].current.showModal();
  };

  return (
    <div
      className="py-44 px-3 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-50"
      id="work-highlight"
    >
      <div className="text-center mb-20">
        <h2>{homeHeadings.h2.workHighlights.title}</h2>
        <p>{homeHeadings.h2.workHighlights.subTitle}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {projectsData.projectsInfo.map((item, index) => (
          <div
            onClick={() => handleModal(index)}
            key={item.title}
            className="col-span-1"
          >
            <div className="card cursor-pointer rounded-lg overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all">
              <div className="h-56 relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="300"
                  className="object-cover object-top"
                />
              </div>
              <div className="card-body p-4 pb-3 text-start">
                <h3 className="line-clamp-1">{item.title}</h3>
                <p className="text-sm line-clamp-2 mt-2">{item.overview}</p>
                <div className="flex items-baseline justify-between pb-1">
                  <div className="flex mt-3.5 items-center gap-2">
                    {item.techIcons.map((icon) => (
                      <span key={icon.key} className="flex items-center gap-1">
                        {icon}
                      </span>
                    ))}
                  </div>

                  {item.repository && (
                    <Link
                      href={item.repository}
                      className="tooltip tooltip-left"
                      data-tip="Github"
                      target="_blank"
                    >
                      <GithubIcon size={20} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full justify-center mt-10">
        <Link href={"/projects"} className="btn btn-neutral">
          See all project
        </Link>
      </div>

      {projectsData.projectsInfo.map((item, index) => (
        <Modal key={index} data={item} modalRef={modalsRef.current[index]} />
      ))}
    </div>
  );
};

export default WorkHighlight;
