import { IconProps } from "@/src/types/global";
import React from "react";

const MouseIcon = ({ size, color }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <g fill="none" stroke={color ? color : "currentColor"} stroke-width="1.5">
        <path d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0z" />
        <path stroke-linecap="round" d="M12 5v3" />
      </g>
    </svg>
  );
};

export default MouseIcon;
