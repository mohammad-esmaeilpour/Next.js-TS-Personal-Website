import React from "react";

const Portfolio = () => {
  return (
    <div className="py-40 text-center bg-gradient-to-b from-gray-50 via-gray-50/50 to-transparent">
      <div className="flex items-baseline justify-center gap-5">
        <h2>Work Highlights</h2>
        <h4>
          A collection of my best work demonstrating my expertise in{" "}
          <b className="text-gray-800"> frontend development</b> and design.
        </h4>
      </div>
      <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto mt-20">
        <div className="col-span-4">
          <div className="card shadow-md bg-white">
            <figure className="p-4">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body gap-0 text-start">
              <h2 className="text-lg flex items-center gap-1">
                Roboxon Dashboard
                <svg
                  aria-hidden="true"
                  height="13"
                  viewBox="0 0 6 6"
                  width="13"
                >
                  <path
                    d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                    fill="black"
                  ></path>
                </svg>
              </h2>
              <div>Dasboard</div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="card shadow-md bg-white">
            <figure className="p-4">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body gap-0 text-start">
              <h2 className="text-lg flex items-center gap-1">
                Roboxon Dashboard
                <svg
                  aria-hidden="true"
                  height="13"
                  viewBox="0 0 6 6"
                  width="13"
                >
                  <path
                    d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                    fill="black"
                  ></path>
                </svg>
              </h2>
              <div>Dasboard</div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="card shadow-md bg-white">
            <figure className="p-4">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body gap-0 text-start">
              <h2 className="text-lg flex items-center gap-1">
                Roboxon Dashboard
                <svg
                  aria-hidden="true"
                  height="13"
                  viewBox="0 0 6 6"
                  width="13"
                >
                  <path
                    d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                    fill="black"
                  ></path>
                </svg>
              </h2>
              <div>Dasboard</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
