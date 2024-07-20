import React from "react";
import HandImg from "@/public/img/ui/handshake.svg";
import Image from "next/image";

const HandShake = () => {
  return (
    <div className="flex max-w-7xl mt-80 mb-52">
      <div className="flex flex-1 items-center justify-center">
        <Image src={HandImg} alt="handshake" />
      </div>
      <div className="flex-1">
        <h4>customers</h4>
        <h2>Custom web development for companies as a frontend developer</h2>
        <p>
          After designing the site in Figma, it is necessary to implement this
          plan and I had the oppertunity to work with companies as a Frontend
          developer.
        </p>
      </div>
    </div>
  );
};

export default HandShake;
