import { IconProps } from "@/src/types/global";
import React from "react";

const ResponsiveIcon = ({ size }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M4 6v10h5v-4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4h2V6zM0 20v-2h4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h4v2h-6a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm11.5 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m4 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M13 20v1h1v-1zm-2-8v7h5v-7z"
      />
    </svg>
  );
};

export default ResponsiveIcon;