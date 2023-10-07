"use client";
import React from "react";
import { BottomNavData } from "@/public/data/global";

interface BottomNavProps {
  refs: any; // Array of refs
}

const FloatNav = React.forwardRef<HTMLDivElement, BottomNavProps>(
  ({ refs }) => {
    const scrollTarget = (index: number) => {
      refs[index]?.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    };

    return (
      <div className="z-10 p-[4px] rounded-[12px] fixed bottom-[5%] left-[50%] translate-x-[50%] backdrop-blur-sm">
        <div className="container py-2 rounded-[8px] items-center">
          {BottomNavData.map((item, index) => (
            <div
              className="mx-1 rounded-md border p-3 cursor-pointer transition-all"
              onClick={() => scrollTarget(index)}
              key={index}
            >
              <p>{item.title}</p>
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    );
  }
);

FloatNav.displayName = "FloatNav";

export default FloatNav;
