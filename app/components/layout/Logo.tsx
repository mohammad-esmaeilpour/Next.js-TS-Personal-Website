import Image from "next/image";
import React from "react";
import logo from "@/public/img/ui/1.png";

const Logo = () => {
  return <Image alt="logo" src={logo} width={100} height={120} />;
};

export default Logo;
