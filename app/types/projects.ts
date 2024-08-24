import { StaticImageData } from "next/image";
import { ReactElement } from "react";

export type TProjectData = {
  projectsInfo: TProjectsInfo[];
  projectsFilter: TProjectsFilter[];
};

export type TProjectsInfo = {
  id: number;
  title: string | ReactElement;
  overview: string | ReactElement;
  introductionList: {
    key: string; 
    value: string| ReactElement;
  }[];
  features: string[]|ReactElement[]
  technologies: string[]|ReactElement[];
  tags: string[];
  img: StaticImageData;
  link: string;
  techIcons: ReactElement[];
  packages?: string[];
  repository?: string;
};

type TProjectsFilter = {
  title: string | ReactElement;
  tag: string;
  icon: ReactElement;
};
