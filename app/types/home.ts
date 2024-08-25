import { StaticImageData } from "next/image";
import {
  TitleDescription,
  TitleDescriptionIcon,
  TitleSubTitle,
  TitleSubTitleDescription,
  TitleSubTitleImage,
} from "../interface/global";

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
    description: string | JSX.Element;
    keyStrengths: TitleDescription[];
    impact: TitleDescriptionIcon[];
  }[];
}

type TCard = {
  id: number;
  title: string;
  overview: string;
  features: string[];
  technologies: string[];
  introductionList: {
    key: string;
    value: string;
  }[];
  img: StaticImageData;
  tags: string[];
  link: string;
  repository?: string;
  techIcons: JSX.Element[];
};

interface IWorkhighlights extends TitleSubTitleDescription {
  callToAction: {
    title: JSX.Element;
    link: string;
  };
  cards: TCard[];
}

export type THomeData = {
  hero: IHero;
  skills: TSkills;
  expertise: IExpertise;
  workHighlights: IWorkhighlights;
};
