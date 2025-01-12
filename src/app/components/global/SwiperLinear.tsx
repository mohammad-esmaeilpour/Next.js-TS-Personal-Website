'use client'
import { aboutHeadings } from "@/public/data/about";
import React from "react";
import 'swiper/css';

const SwiperLinear = () => {
  return (
    <section className="flex flex-col gap-14">
      <div className="flex flex-col gap-2">
        <p className="mt-2 flex-1 line-clamp-1">
          {aboutHeadings.h2.Skills.title}
        </p>
        <h2 className="flex">{aboutHeadings.h2.Skills.title}</h2>
      </div>
      <div className="relative">
        <div className="bg-gradient-to-br from-[#ffdd00] to-[#46f883] blur-3xl absolute right-0 top-0 w-full h-full -z-10 opacity-20 p-10"></div>
        {/* <Swiper
          dir="rtl"
          spaceBetween={32}
          loop={true}
          centeredSlides={true}
          speed={5000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          slidesPerView={3}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {aboutData.skills.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="flex flex-col items-end text-end gap-6 border shadow-[0 0 0 1px #18181b0a] rounded-xl p-10 bg-white">
                {item.icon}
                <div className="gap-2 flex flex-col">
                  <h4 className="text-gradient font-semibold text-2xl">
                    {item.title}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          spaceBetween={32}
          loop={true}
          centeredSlides={true}
          speed={5000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          slidesPerView={3}
          modules={[Autoplay]}
          className="mySwiper mt-8"
        >
          {aboutData.skills.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="flex flex-col gap-6 border shadow-[0 0 0 1px #18181b0a] rounded-xl p-10 bg-white">
                {item.icon}
                <div className="gap-2 flex flex-col">
                  <h4 className="text-gradient font-semibold text-2xl">
                    {item.title}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </section>
  );
};

export default SwiperLinear;
