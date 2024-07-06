import React, { FC } from "react";
import { IIntro } from "../interface/home";

interface IntroProps {
  data: IIntro;
}

const Intro: FC<IntroProps> = ({ data }) => {
  return (
    <div className="container mx-auto text-center py-10">
      <h4>{data.intro}</h4>
      <h1>{data.title}</h1>
    </div>
  );
};

export default Intro;
