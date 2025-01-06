import { IconProps } from "@/app/types/global";
import React from "react";

const ArrowOutwardIcon = ({ size, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path
        fill={color || "black"}
        d="M6.189 17.289L5.5 16.6L15.58 6.5H6.289v-1h11v11h-1V7.208z"
      />
    </svg>
  );
};

export default ArrowOutwardIcon;
