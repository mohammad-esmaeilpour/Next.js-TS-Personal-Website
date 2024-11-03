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
    <div className="px-3 mt-10 ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        centeredSlidesBounds={true}
        breakpoints={{
          320: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          994: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
        }}
        autoplay={{ delay: 1000 }}
        className="sm:max-w-md lg:max-w-xl mx-auto"
      >
        {homeData.skills.map((item) => (
          <SwiperSlide
            className="justify-center !flex hover:scale-105 transition-all"
            key={item.id}
          >
            {item.icon}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Skills;
