"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { homeData } from "@/public/data/home";

const Skills = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={7}
      autoplay={{ delay: 1000 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="max-w-xl"
    >
      {homeData.skills.map((item) => (
        <SwiperSlide key={item.title}>{item.icon}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Skills;
