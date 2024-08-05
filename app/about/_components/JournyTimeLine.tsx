import { aboutData, aboutHeadings } from "@/public/data/about";
import React from "react";

const JournyTimeLine = () => {
  return (
    <section className="pt-40 bg-gradient-to-b from-gray-50 via-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2>{aboutHeadings.h2.journey.title}</h2>
          <p className="mt-2">{aboutHeadings.h2.journey.subTitle}</p>
        </div>

        <ul className="mt-20 ps-9">
          {aboutData.journeyTimeLine.map((item) => (
            <li
              key={item.title}
              className="border-dashed border-l-2 ps-16 relative grid grid-cols-12 gap-20 pb-20 last-of-type:pb-10"
              data-aos="fade"
            >
              <div className="col-span-3">
                <h4 className="text-gradient text-2xl">{item.title}</h4>
                <p className="text-xs mt-2">{item.year}</p>
              </div>
              <div className="col-span-9">
                <p>{item.description}</p>
                <div className="mt-10 flex items-center">
                  <h6 className="text-gray">skill i used:</h6>
                  <div className="ms-7 flex gap-2">
                    <span className="badge badge-outline badge-primary rounded-lg">
                      Typescript
                    </span>
                    <span className="badge badge-outline badge-warning rounded-lg">
                      javascript
                    </span>
                    <span className="badge badge-outline rounded-lg">
                      Next.js
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 -translate-x-1/2 top-0 flex items-center justify-center border rounded-xl w-20 h-20 bg-white">
                <span className="text-gradient text-6xl">{item.symbol}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default JournyTimeLine;
