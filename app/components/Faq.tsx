import { faqData } from "@/public/data/home";
import React from "react";
import Collapse from "./Collapse";
import Image from "next/image";

const Faq = () => {
  return (
    <div className="mx-10 my-20 flex gap-14">
      <div className="flex flex-1 flex-col">
        {faqData.map((item, index) => (
          <Collapse key={index} title={item.title} des={item.des} />
        ))}
      </div>
      <div className="flex-1 flex flex-col ">
        <div>
          <h4>Customers</h4>
          <h2>Custom web development for companies as a frontend developer</h2>
          <p>
            After designing the site in Figma, it is necessary to implement this
            plan and I had the oppertunity to work with companies as a Frontend
            developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
