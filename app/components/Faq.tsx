import React from "react";
import Collapse from "./Collapse";
import { homeData } from "@/public/data/home";

const Faq = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-gray-50/50 to-transparent lg:px-20 pt-10 pe-4 ps-0">
      <div className="container mx-auto">
        <div>
          {homeData.faq.map((item, index) => (
            <Collapse key={index} title={item.title} des={item.des} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
