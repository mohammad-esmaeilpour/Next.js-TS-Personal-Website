import { IconProps } from '@/app/types/global';
import React from 'react'

const EyeIcon = ({size}:IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 36 36"
    >
      <path
        fill="#e1e8ed"
        d="M35.059 18c0 3.304-7.642 11-17.067 11S.925 22.249.925 18c0-3.314 34.134-3.314 34.134 0"
      />
      <path
        fill="#292f33"
        d="M35.059 18H.925c0-3.313 7.642-11 17.067-11s17.067 7.686 17.067 11"
      />
      <path
        fill="#f5f8fa"
        d="M33.817 18c0 2.904-7.087 9.667-15.826 9.667S2.166 21.732 2.166 18c0-2.912 7.085-9.666 15.825-9.666C26.73 8.333 33.817 15.088 33.817 18"
      />
      <circle cx="18" cy="18" r="8.458" fill="#8b5e3c" />
      <circle cx="18" cy="18" r="4.708" fill="#292f33" />
      <circle cx="14.983" cy="15" r="2" fill="#f5f8fa" />
    </svg>
  );
}

export default EyeIcon