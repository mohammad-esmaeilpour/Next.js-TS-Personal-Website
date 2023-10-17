import Link from "next/link";
import React, { FC } from "react";
import { INav } from "../interface/layout";

interface NavigationProps {
  data: INav;
}

const Navigation: FC<NavigationProps> = ({ data }) => {
  return (
    <div className="container flex items-center justify-between absolute left-1/2 -translate-x-1/2 px-5 py-3 z-50 border-b border-[rgba(0,0,0,.1)] bg-white">
      {/* Left Section */}
      <nav className="flex gap-5 items-center">
        {/* Logo */}
        <Link href={"/"}>logo</Link>
        {/* Nav */}
        <ul className="flex items-center">
          {data.links.map((item) => (
            <li key={item.id} className="mx-2">
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Right Section */}
      <div className="flex items-center">
        <div className="flex items-center border-r border-[rgba(0,0,0,.1)] mr-5 pr-5">
          <input type="checkbox" className="toggle toggle-success" />
        </div>
        <a
          href={data.gmailBtn.link}
          className="btn btn-sm text-white rounded-[0.3125rem] capitalize h-auto min-h-min py-1.5"
        >
          {data.gmailBtn.text}
        </a>
      </div>
    </div>
  );
};

export default Navigation;
