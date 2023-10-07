import React, { FC } from "react";
import { ISkills } from "../interface/home";

interface SkillsProps {
  data: ISkills;
}

const Skills: FC<SkillsProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center max-w-lg mx-auto">
      <h3 className="mb-8">{data.title}</h3>
      <div className="flex justify-center flex-wrap">
        {data.skills.map((item: any, index: React.Key) => (
          <div key={index} className="border p-2 rounded m-3 text-[14px]">
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
