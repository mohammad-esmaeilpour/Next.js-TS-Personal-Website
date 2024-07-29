import Link from "next/link";
import React, { Fragment } from "react";
import { navData } from "@/public/data/layout";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="container mx-auto flex py-4 max-w-6xl">
        <ul className="flex items-center">
          {navData.links.map((item) => (
            <li key={item.id} className="mx-2.5">
              <Link href={item.link} className="relative">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navigation;
