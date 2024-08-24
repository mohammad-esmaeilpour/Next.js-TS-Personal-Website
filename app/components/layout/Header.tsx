"use client";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import { navData } from "@/public/data/layout";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/router";

const Header = () => {
  const navItem = usePathname();

  return (
    <header>
      <nav className="max-w-7xl ps-10 mx-auto flex py-4 z-50">
        <ul className="flex items-center z-50">
          {navData.links.map((item) => (
            <li key={item.id} className="mx-2.5">
              <Link
                href={item.link}
                className={`relative ${
                  navItem === item.link && "text-black"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
