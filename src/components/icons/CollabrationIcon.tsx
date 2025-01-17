import { IconProps } from "@/app/types/global";
import React from "react";

const CollabrationIcon = ({ size }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
    >
      <path
        fill="#1565c0"
        d="M25 22h13l6 6V11c0-2.2-1.8-4-4-4H25c-2.2 0-4 1.8-4 4v7c0 2.2 1.8 4 4 4"
      />
      <path
        fill="#2196f3"
        d="M23 19H10l-6 6V8c0-2.2 1.8-4 4-4h15c2.2 0 4 1.8 4 4v7c0 2.2-1.8 4-4 4"
      />
      <g fill="#ffa726">
        <circle cx="12" cy="31" r="5" />
        <circle cx="36" cy="31" r="5" />
      </g>
      <path
        fill="#607d8b"
        d="M20 42s-2.2-4-8-4s-8 4-8 4v2h16zm24 0s-2.2-4-8-4s-8 4-8 4v2h16z"
      />
    </svg>
  );
};

export default CollabrationIcon;
