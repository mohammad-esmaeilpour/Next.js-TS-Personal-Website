import { IconProps } from "@/app/types/global";
import React from "react";

const ArrowDownIcon = ({ size, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke={color || "black"}
        strokeLinecap="round"
        stroke-width="1"
      >
        <path stroke-miterlimit="10" d="M12 20V4" />
        <path
          stroke-linejoin="round"
          d="m4.34 12.968l6.572 6.572a1.531 1.531 0 0 0 2.176 0l6.573-6.572"
        />
      </g>
    </svg>
  );
};

export default ArrowDownIcon;
