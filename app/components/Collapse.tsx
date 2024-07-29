import React from "react";

interface ICollapse {
  title: string;
  des: string;
}

const Collapse = ({ title, des }: ICollapse) => {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow border bg-white border-[#eaeaea] m-2"
    >
      <h4 className="collapse-title font-semibold text-xl leading-8 text-[#000] tracking-[-0.04em]">
        {title}
      </h4>
      <div className="collapse-content">
        <p className="text-base">{des}</p>
      </div>
    </div>
  );
};

export default Collapse;
