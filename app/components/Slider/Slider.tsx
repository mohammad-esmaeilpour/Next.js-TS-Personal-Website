"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider.module.css";

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
            <div className="rounded-xl bg-white border border-[#eaeaea] overflow-hidden p-3">
              <div className="slider-items object-cover h-60 relative rounded-xl overflow-hidden shadow">
                <Image
                  src={item.img}
                  fill
                  alt={item.title}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col px-3">
                <p className="py-3">{item.title}</p>
                <Link className="pb-2 flex justify-between" href="/">
                  <p>View Project</p>
                  <div>EAST ICON</div>
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
