import Link from "next/link";
import React, { FC } from "react";
import { INav } from "../interface/layout";
import ToggleTheme from "./ToggleTheme";

interface NavigationProps {
  data: INav;
}

const Navigation: FC<NavigationProps> = ({ data }) => {
  return (
    <div className="w-full flex items-center justify-between container mx-auto sticky top-0 z-50 backdrop-blur-sm py-5 px-10">
      {/* Logo */}
      <Link href={"/"}>logo</Link>
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
