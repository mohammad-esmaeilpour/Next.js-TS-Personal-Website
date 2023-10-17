"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./slider.module.css";

import Link from "next/link";
import Image from "next/image";
import { ISlider } from "../../interface/home";
import { Navigation, Pagination } from "swiper/modules";

interface SliderProps {
  data: ISlider;
}

const Slider: FC<SliderProps> = ({ data }) => {
  return (
    <div className="container md:mx-auto mx-2 py-10">
      <h4 className="text-4xl font-semibold">{data.subTitle}</h4>
      <h2 className="mt-3">{data.title}</h2>
      <Swiper
        className="my-10"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={"auto"}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-2xl bg-[#f6f5f4] overflow-hidden p-4">
              <div className="slider-items object-cover h-60 border  relative rounded-md overflow-hidden">
                <Image
                  src={item.img}
                  fill
                  alt={item.title}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col px-3">
                <p className="py-3">{item.title}</p>
                <Link
                  className="pb-2 border-b-2 border-gray-100 flex justify-between"
                  href="/"
                >
                  <p>View Project</p>
                  <div>EAST ICON</div>
                </Link>
              </div>
              <div className="px-3">
                <Link
                  className="border-gray-100 text-gray-500 py-3 flex"
                  href="/"
                >
                  <div>GITHUB ICON</div>
                  <p className="font-thin ml-2 flex items-center">Repository</p>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
