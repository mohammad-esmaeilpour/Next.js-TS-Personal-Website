import { IconProps } from "@/src/types/global";
import React from "react";

const ChevronDown = ({ size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        d="m4 8.417l6.587 6.587a2.013 2.013 0 0 0 2.826 0L20 8.417"
      />
    </svg>
  );
};

export default ChevronDown;
