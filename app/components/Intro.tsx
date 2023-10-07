import React, { FC } from "react";
import { IIntro } from "../interface/home";

interface IntroProps {
  data: IIntro;
}

const Intro: FC<IntroProps> = ({ data }) => {
  return (
    <>
      <h4>{data.intro}</h4>
      <h1>{data.title}</h1>
    </>
  );
};

export default Intro;
