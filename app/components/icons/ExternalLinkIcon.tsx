import { IconProps } from "@/app/types/global";
import React from "react";

const ExternalLinkIcon = ({ size, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke={color || "black"} stroke-width="1.5">
        <path
          stroke-linecap="round"
          stroke-miterlimit="10"
          d="m15.813 8.187l-7.626 7.626"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.111 15.155V8.917a1.028 1.028 0 0 0-1.028-1.028H8.845"
        />
        <rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6" />
      </g>
    </svg>
  );
};

export default ExternalLinkIcon;
