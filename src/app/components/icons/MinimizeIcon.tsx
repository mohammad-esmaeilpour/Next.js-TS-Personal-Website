import { IconProps } from "@/src/types/global";
import React from "react";

const MinimizeIcon = ({ size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 50 50">
      <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path
          stroke="#344054"
          d="M43.75 6.25L31.854 18.146M18.146 31.854L6.25 43.75zm0-13.708L6.25 6.25zM43.75 43.75L31.854 31.854z"
        />
        <path
          stroke="#306cfe"
          d="M8.333 31.25h8.334a2.083 2.083 0 0 1 2.083 2.083v8.334m0-33.334v8.334a2.083 2.083 0 0 1-2.083 2.083H8.333M31.25 41.667v-8.334a2.083 2.083 0 0 1 2.083-2.083h8.334m0-12.5h-8.334a2.083 2.083 0 0 1-2.083-2.083V8.333"
        />
      </g>
    </svg>
  );
};

export default MinimizeIcon;
