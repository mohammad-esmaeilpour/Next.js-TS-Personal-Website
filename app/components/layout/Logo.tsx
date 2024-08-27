import Image from "next/image";
import React from "react";
import logo from "@/public/img/ui/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={'/'} className="w-36 h-20 overflow-hidden relative -rotate-90 -translate-x-5 xl:-translate-x-10">
      <Image
        alt="logo"
        src={logo}
        className="object-cover object-left"
        fill 
        sizes="200"
      />
      ;
    </Link>
  );
};

export default Logo;
