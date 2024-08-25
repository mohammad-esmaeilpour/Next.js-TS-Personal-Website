import { StaticImageData } from "next/image";
import {
  TitleDescription,
  TitleDescriptionIcon,
  TitleSubTitle,
  TitleSubTitleDescription,
  TitleSubTitleImage,
} from "../interface/global";
import { ReactElement } from "react";

interface IHero extends TitleSubTitle {
  callToAction: {
    title: string;
    link: string;
    btn: string;
  }[];
}

type TSkill = {
  icon: JSX.Element;
  id: number;
};

type TSkills = TSkill[];

interface IAboutMe extends TitleSubTitleImage {
  intoView: {
    description: string;
    links: {
      title: string;
      target: string;
    }[];
  };
}

interface IExpertise extends TitleSubTitle {
  tabs: {
    label: string;
    icon:ReactElement,
    description: string | JSX.Element;
    keyStrengths: TitleDescription[];
    impact: TitleDescriptionIcon[];
  }[];
}

interface IWorkhighlights extends TitleSubTitleDescription {
  callToAction: {
    title:string 
    link: string;
  };
}

export type THomeData = {
  hero: IHero;
  skills: TSkills;
  expertise: IExpertise;
  workHighlights: IWorkhighlights;
};
