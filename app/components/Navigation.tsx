import Link from "next/link";
import React, { FC } from "react";
import { INav } from "../interface/layout";
import ToggleTheme from "./ToggleTheme";
import Image from "next/image";
import Logo from "./Logo";
import { TitleDes, TitleDesSubImg } from "../interface/global";
import { navData } from "@/public/data/layout";

const Navigation = () => {
  return (
    <nav className="container mx-auto w-full flex justify-between px-40 rounded-2xl py-5">
      {/* Logo */}
      {/* <Link href={"/"}>
        <Logo />
      </Link> */}

      {/* Nav */}
      <ul className="flex items-center">
        {navData.links.map((item) => (
          <li key={item.id} className="mx-2.5">
            <Link href={item.link} className="relative">
              {item.title}
              {item.external && (
                <svg
                  aria-hidden="true"
                  className="absolute -top-0.5 -right-2.5"
                  height="7"
                  viewBox="0 0 6 6"
                  width="7"
                >
                  <path
                    d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                    fill="gray"
                  ></path>
                </svg>
              )}
            </Link>
          </li>
        ))}
      </ul>

      <ToggleTheme />
    </nav>
  );
};

export default Navigation;
