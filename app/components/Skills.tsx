import React, { FC } from "react";
import { ISkills } from "../interface/home";

interface SkillsProps {
  data: ISkills;
}

const Skills: FC<SkillsProps> = ({ data }) => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col items-center max-w-3xl mx-auto">
        <h3 className="mb-5 text-4xl font-semibold">{data.title}</h3>
        <div className="flex justify-center flex-wrap">
          {data.skills.map((item: any, index: React.Key) => (
            <div
              key={index}
              className="flex items-center border border-[rgba(0,0,0,.1)] rounded-[0.3125rem] capitalize h-auto min-h-min py-1 m-1.5 px-3"
            >
              <p className="mr-2">{item.title}</p>
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
