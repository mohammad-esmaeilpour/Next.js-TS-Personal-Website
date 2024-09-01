"use client";
import { projectsData } from "@/public/data/projects";
import Image from "next/image";
import React, { createRef, useRef } from "react";
import Modal from "./global/Modal";
import { homeData } from "@/public/data/home";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css/effect-cards";
import Link from "next/link";
import ThreeDotsIcon from "./icons/ThreeDotsIcon";

const WorkHighlight = () => {
  let topProjects = projectsData.projectsInfo.slice(
    Math.max(projectsData.projectsInfo.length - 3, 0)
  ).reverse();

  const modalsRef: any = useRef(
    projectsData.projectsInfo.map(() => createRef())
  );
  const handleModal = (index: any) => {
    modalsRef.current[index].current.showModal();
  };

  return (
    <section
      className="overflow-hidden xl:overflow-visible"
      id="work-highlight"
    >
      <div className="flex flex-col xl:flex-row xl:items-end gap-2 mb-16 lg:mb-28">
        <h2>{homeData.workHighlights.title}</h2>
        <h3 className="text-gradient text-base font-medium">
          {homeData.workHighlights.subTitle}
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex-1 order-2 lg:order-1 mt-10">
          <p>{homeData.workHighlights.description}</p>
          <Link href={homeData.workHighlights.callToAction.link}>
            <strong className="btn btn-primary mt-4">
              {homeData.workHighlights.callToAction.title}
            </strong>
          </Link>
        </div>
        <div className="flex-1 order-1 lg:order-2 flex justify-end relative">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper w-[300px] h-[380px]"
            cardsEffect={{
              perSlideOffset: 50,
              slideShadows: false,
              perSlideRotate: 5,
            }}
          >
            {topProjects.map((item) => (
              <SwiperSlide
                key={item.title}
                className="flex items-center justify-center rounded-lg border bg-white drop-shadow-lg"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="300"
                    className="object-cover object-top"
                  />
                </div>
                <div className="card-body p-4 pb-3 text-start">
                  <h4 className="line-clamp-2 text-base font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-sm font-normal line-clamp-2 mb-1">
                    {item.overview}
                  </p>
                  <div className="flex items-center justify-between w-full mt-3 gap-2">
                    <div className="flex gap-2 flex-1 justify-start">
                      {item.techStack.map((item) => item.icon)}
                    </div>
                    <button
                      onClick={() => handleModal(item.id)}
                      className="btn btn-sm btn-secondary flex-1 justify-between ms-10"
                    >
                      Details
                      <ThreeDotsIcon size={14} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {projectsData.projectsInfo.map((item, index) => (
        <Modal key={index} data={item} modalRef={modalsRef.current[index]} />
      ))}
    </section>
  );
};

export default WorkHighlight;
