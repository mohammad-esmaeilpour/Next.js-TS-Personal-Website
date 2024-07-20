import { faqData } from "@/public/data/home";
import React from "react";
import Collapse from "./Collapse";

const Faq = () => {
  return (
    <div className="mx-10 my-64">
      <div>
        {faqData.map((item, index) => (
          <Collapse key={index} title={item.title} des={item.des} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
