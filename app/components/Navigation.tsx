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
            </Link>
          </li>
        ))}
      </ul>

      <ToggleTheme />
    </nav>
  );
};

export default Navigation;
