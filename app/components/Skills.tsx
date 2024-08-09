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
    <div className="px-3">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        centeredSlidesBounds={true}
        spaceBetween={10}
        breakpoints={{
          320: {
            slidesPerView: 5,
          },
          480: {
            slidesPerView: 6,
          },
          994: {
            slidesPerView: 7,
          },
        }}
        autoplay={{ delay: 1000 }}
        className="sm:max-w-md lg:max-w-xl mx-auto"
      >
        {homeData.skills.map((item) => (
          <SwiperSlide className="justify-center !flex" key={item.title}>{item.icon}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Skills;
