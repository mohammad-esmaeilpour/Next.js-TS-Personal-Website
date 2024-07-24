import { faqData } from "@/public/data/home";
import React from "react";
import Collapse from "./Collapse";

const Faq = () => {
  return (
    <div className="mx-10 mt-64 mb-20">
      <div>
        {faqData.map((item, index) => (
          <Collapse key={index} title={item.title} des={item.des} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
