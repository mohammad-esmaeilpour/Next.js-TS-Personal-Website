import Link from "next/link";
import React, { FC } from "react";
import { ISocial } from "../interface/home";

interface SocialProps {
  data: ISocial;
}

const Social: FC<SocialProps> = ({ data }) => {
  return (
    <div className="conatiner mx-auto text-center py-10 mt-20">
      <p className="pb-10">{data.title}</p>
      <div className="flex justify-center items-center">
        {data.socialMedia.map((item, index) => (
          <Link
            target="_blank"
            className="flex flex-col items-center mx-2"
            href={item.link}
            key={index}
          >
            {item.icon}
            <div className="mt-1">{item.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Social;
