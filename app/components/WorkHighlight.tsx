"use client";
import { projectsData } from "@/public/data/projects";
import Image from "next/image";
import React, { createRef, useId, useRef } from "react";
import Modal from "./global/Modal";
import { homeData, homeHeadings } from "@/public/data/home";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css/effect-cards";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import Link from "next/link";
import ThreeDotsBorderedIcon from "./icons/ThreeDotsBorderedIcon";
import ThreeDotsIcon from "./icons/ThreeDotsIcon";

const WorkHighlight = () => {
  const modalsRef: any = useRef(
    projectsData.projectsInfo.map(() => createRef())
  );
  const handleModal = (index: any) => {
    modalsRef.current[index].current.showModal();
  };

  return (
    <div className="max-w-7xl mx-auto py-32 px-3" id="work-highlight">
      <div className="flex gap-2 items-end">
        <h2>{homeHeadings.h2.workHighlights.title}</h2>
        <h3 className="text-gradient text-base font-medium">
          {homeHeadings.h2.workHighlights.subTitle}
        </h3>
      </div>

      <div className="flex justify-between gap-10 mt-28">
        <div className="flex-1">
          <p>
            This project involved developing a fast, scalable web application using Next.js, React, and Tailwind CSS. The Apps
            performance improved by 30%, leading to a significant increase in
            user engagement and sales.
          </p>
          <Link className="btn btn-primary mt-10" href={"/projects"}>
            Mohammad Esmaeilpour projects
          </Link>
        </div>
        <div className="flex-1 flex justify-end relative">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper w-[283px] h-[355px]"
            cardsEffect={{
              perSlideOffset: 50,
              slideShadows: false,
              perSlideRotate: 5,
            }}
          >
            {homeData.portfolio.map((item, index) => (
              <SwiperSlide
                key={item.id}
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
                  <h3 className="line-clamp-1 text-sm">{item.title}</h3>
                  <p className="text-xs !font-light line-clamp-3 mb-1">
                    {item.overview}
                  </p>
                  <div className="flex w-full mt-3 gap-2">
                    <button className="btn btn-sm btn-secondary !text-xs flex-1 justify-between">
                      Preview
                      <ExternalLinkIcon size={14} />
                    </button>
                    <button
                      onClick={() => handleModal(index)}
                      className="btn btn-sm btn-secondary !text-xs flex-1 justify-between"
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
    </div>
  );
};

export default WorkHighlight;
