"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
import { ISlider } from "../interface/home";
import { Mousewheel, Pagination } from "swiper/modules";

interface SliderProps {
  data: ISlider;
}

const Slider: FC<SliderProps> = ({ data }) => {
  return (
    <div className="flex text-center py-10 mx-20">
      <div>
        <h4>{data.subTitle}</h4>
        <h2>{data.title}</h2>
      </div>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper w-96 h-[500px] !mr-0"
      >
        {data.items.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item.img}
              fill
              alt={item.title}
              className="object-cover block rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
