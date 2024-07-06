import { portfoliData } from "@/public/data/portfolio";
import React, { Key } from "react";

const Collapse = () => {
  return (
    <div className="container my-32">
      <div>
        {portfoliData.faq.map((item: any, index: Key) => (
          <div key={index} className="px-0 border-b border-black my-5">
            <div className="flex hover:first-of-type:ml-2 justify-between items-center flex-1 pb-4 cursor-pointer">
              <h3 className="transition">{item.question}</h3>
              <svg
                className="border border-black p-3 rounded-lg"
                xmlns="http://www.w3.org/2000/svg"
                width={55}
                height={55}
                viewBox="0 0 32 25"
                fill="none"
              >
                <path
                  d="M31.68 13.1995C31.7333 13.1454 31.7333 13.0913 31.7333 13.0372C31.7867 12.9831 31.84 12.8749 31.84 12.8208C31.84 12.7667 31.8933 12.7126 31.8933 12.6044C31.8933 12.5503 31.9467 12.4421 31.9467 12.388C31.9467 12.2798 32 12.1716 32 12.0634C32 12.0093 32 12.0093 32 11.9552C32 11.9011 32 11.9011 32 11.847C32 11.7389 32 11.6307 31.9467 11.5225C31.9467 11.4143 31.8933 11.3602 31.8933 11.3061C31.8933 11.252 31.84 11.1979 31.84 11.1438C31.7867 11.0356 31.7333 10.9815 31.68 10.8733C31.68 10.8192 31.6267 10.8192 31.6267 10.7651C31.52 10.6569 31.4667 10.5487 31.36 10.4405L21.7067 0.649153C20.8533 -0.216384 19.52 -0.216384 18.6667 0.649153C17.8133 1.51469 17.8133 2.86709 18.6667 3.73263L24.6933 9.84549H2.13333C0.96 9.84549 0 10.8192 0 12.0093C0 13.1995 0.96 14.1732 2.13333 14.1732H24.6933L18.6667 20.286C17.8133 21.1516 17.8133 22.504 18.6667 23.3695C19.0933 23.8023 19.6267 24.0187 20.16 24.0187C20.6933 24.0187 21.2267 23.8023 21.6533 23.3695L31.36 13.524C31.4667 13.4158 31.5733 13.3076 31.68 13.1995Z"
                  fill="black"
                />
              </svg>
            </div>
            <p className="hidden">
              {item.answer}
              <span className="empty"></span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collapse;
