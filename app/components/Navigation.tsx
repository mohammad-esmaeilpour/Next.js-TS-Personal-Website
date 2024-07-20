import Link from "next/link";
import React, { FC } from "react";
import { INav } from "../interface/layout";
import ToggleTheme from "./ToggleTheme";
import Image from "next/image";
import Logo from "./Logo";
import { TitleDes, TitleDesSubImg } from "../interface/global";

type NavigationProps = {
  data: INav;
};

const Navigation: FC<NavigationProps> = ({ data }) => {
  return (
    <div className="container mx-auto w-full flex justify-between px-10 rounded-2xl max-w-6xl">
      {/* Logo */}
      <Link href={"/"}>
        <Logo />
      </Link>
      <nav className="flex gap-5 items-center">
        {/* Nav */}
        <ul className="flex items-center">
          {data.links.map((item) => (
            <li key={item.id} className="mx-2">
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <ToggleTheme />
      </nav>
    </div>
  );
};

export default Navigation;
