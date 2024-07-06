"use client";
import { ISkills } from "../interface/home";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { skillsData } from "@/public/data/home";
import { Fragment } from "react";

const Skills = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={6}
      autoplay={{ delay: 1000 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="max-w-2xl"
    >
      {skillsData.skills.map((item) => (
        <SwiperSlide key={item.title}>{item.icon}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Skills;
