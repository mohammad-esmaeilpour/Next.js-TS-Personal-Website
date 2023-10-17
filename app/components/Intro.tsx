import React, { FC } from "react";
import { IIntro } from "../interface/home";

interface IntroProps {
  data: IIntro;
}

const Intro: FC<IntroProps> = ({ data }) => {
  return (
    <div className="container mx-auto text-center py-10">
      <h1 className="text-7xl py-4 font-bold">{data.title}</h1>
      <h4 className="text-xl">{data.intro}</h4>
    </div>
  );
};

export default Intro;
