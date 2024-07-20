"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useId } from "react";
import { ICompany } from "../interface/home";

interface CompanyProps {
  data: ICompany[];
}

const Company: FC<CompanyProps> = ({ data }) => {
  useEffect(() => {}, []);

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between my-20">
        {data.map((item) => (
          <div
            key={item.id}
            className="hover:animate-pulse relative h-96 w-full rounded-md overflow-hidden mx-2 cursor-pointer border shadow-xl [&:nth-of-type(1)]:ml-[-100px] [&:nth-last-of-type(2)]:top-[50px] [&:nth-of-type(2)]:top-[50px] [&:nth-last-of-type(3)]:top-[90px] [&:nth-of-type(3)]:top-[90px] [&:nth-of-type(4)]:top-[120px] [&:nth-last-of-type(1)]:mr-[-100px]"
          >
            <Link href={item.link} title="Project Image">
              <Image
                className="object-cover object-top"
                src={item.imgSrc}
                fill
                alt=""
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
