import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { ICompany } from "../interface/home";

interface CompanyProps {
  data: ICompany[];
}

const Company: FC<CompanyProps> = ({ data }) => {
  return (
    <div className="container mx-auto py-10">
      <h4 className="text-4xl font-semibold">Cooperation with companies</h4>
      <h2 className="mt-3">Cooperation with companies</h2>
      <div className="flex justify-between my-20">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative h-96 w-full rounded-md overflow-hidden mx-1 cursor-pointer shadow-md [&:nth-of-type(1)]:ml-[-100px] [&:nth-last-of-type(2)]:top-[50px] [&:nth-of-type(2)]:top-[50px] [&:nth-last-of-type(3)]:top-[90px] [&:nth-of-type(3)]:top-[90px] [&:nth-of-type(4)]:top-[120px] [&:nth-last-of-type(1)]:mr-[-100px]"
          >
            <div className="hover:opacity-10 visible w-full h-full absolute left-0 top-0 hidden opacity-0 transition-[300ms]" />
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
