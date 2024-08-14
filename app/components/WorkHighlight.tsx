"use client";
import { projectsData } from "@/public/data/projects";
import Image from "next/image";
import React, { createRef, useId, useRef } from "react";
import Modal from "./global/Modal";
import { homeData } from "@/public/data/home";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css/effect-cards";
import Link from "next/link";
import ThreeDotsIcon from "./icons/ThreeDotsIcon";
import ArrowOutwardIcon from "./icons/solid/ArrowOutwardIcon";

const WorkHighlight = () => {
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
          <Link
            className="btn btn-primary mt-10"
            href={homeData.workHighlights.callToAction.link}
          >
            {homeData.workHighlights.callToAction.title}
          </Link>
        </div>
        <div className="flex-1 order-1 lg:order-2 flex justify-end relative">
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
            {homeData.workHighlights.cards.map((item) => (
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
                    <Link
                      href={item.link}
                      target="_blank"
                      className="btn btn-sm btn-primary !text-xs flex-1 justify-between"
                    >
                      Preview
                      <ArrowOutwardIcon size={16} color="white" />
                    </Link>
                    <button
                      onClick={() => handleModal(item.id)}
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

      {homeData.workHighlights.cards.map((item, index) => (
        <Modal key={index} data={item} modalRef={modalsRef.current[index]} />
      ))}
    </section>
  );
};

export default WorkHighlight;
