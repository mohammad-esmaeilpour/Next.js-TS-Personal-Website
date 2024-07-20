import React from "react";

interface ICollapse {
  title: string;
  des: string;
}

const Collapse = ({ title, des }: ICollapse) => {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow border-b rounded-none my-5"
    >
      <h3 className="collapse-title text-2xl font-bold tracking-wider">
        {title}
      </h3>
      <div className="collapse-content">
        <p>{des}</p>
      </div>
    </div>
  );
};

export default Collapse;
