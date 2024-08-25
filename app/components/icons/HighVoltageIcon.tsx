import { IconProps } from "@/app/types/global";
import React from "react";

const HighVoltageIcon = ({ size }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 72 72"
    >
      <path
        fill="#fcea2b"
        d="M48.143 3.726L16.316 37.851c-.603.646-.114 1.659.801 1.659h19.107L19.15 67.048c-.166.268.215.537.443.312l36.063-35.704c.643-.638.162-1.689-.773-1.689h-18.5z"
      />
      <path
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
        d="m48.163 4.44l-31.84 33.342c-.618.646-.117 1.659.82 1.659h19.082L17.921 68.274l37.727-36.479c.66-.637.167-1.688-.79-1.688H36.384z"
      />
    </svg>
  );
};

export default HighVoltageIcon;
