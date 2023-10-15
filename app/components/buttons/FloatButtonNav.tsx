"use client";
import { bottomNavData } from "@/public/data/global";
import React, { FC } from "react";

interface FloatButtonNavProps {
  refs: any;
}

const FloatButtonNav: FC<FloatButtonNavProps> = ({ refs }) => {
  const scrollTarget = (index: number) => {
    refs[index]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  return (
    <>
      {bottomNavData.map((item, index) => (
        <div
          className="mx-1 rounded-md border p-3 cursor-pointer transition-all"
          onClick={() => scrollTarget(index)}
          key={index}
        >
          <p>{item.title}</p>
          {item.icon}
        </div>
      ))}
    </>
  );
};

export default FloatButtonNav;
