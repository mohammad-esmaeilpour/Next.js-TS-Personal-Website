import { IconProps } from "@/src/types/global";
import React from "react";

const HourglassIcon = ({ size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 36 36">
      <path
        fill="#ffe8b6"
        d="M21 18c0-2.001 3.246-3.369 5-6c2-3 2-10 2-10H8s0 7 2 10c1.754 2.631 5 3.999 5 6s-3.246 3.369-5 6c-2 3-2 10-2 10h20s0-7-2-10c-1.754-2.631-5-3.999-5-6"
      />
      <path
        fill="#ffac33"
        d="M18 2h-8s0 4 1 7c1.304 3.912 6 4.999 6 9s0 13 1 13s1-9 1-13s4.697-5.088 6-9c1-3 1-7 1-7z"
      />
      <path
        fill="#3b88c3"
        d="M30 34a2 2 0 0 1-2 2H8a2 2 0 0 1 0-4h20a2 2 0 0 1 2 2m0-32a2 2 0 0 1-2 2H8a2 2 0 0 1 0-4h20a2 2 0 0 1 2 2"
      />
    </svg>
  );
};

export default HourglassIcon;
