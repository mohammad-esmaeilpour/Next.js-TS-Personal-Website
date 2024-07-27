import React from "react";
import Collapse from "./Collapse";
import { homeData } from "@/public/data/home";

const Faq = () => {
  return (
    <div className="mx-20 mt-20 mb-20">
      <div>
        {homeData.faq.map((item, index) => (
          <Collapse key={index} title={item.title} des={item.des} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
