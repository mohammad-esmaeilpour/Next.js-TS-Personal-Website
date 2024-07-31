import { StaticImageData } from "next/image";
import { ReactElement } from "react";

export type TProjectData = {
  projectsInfo: TProjectsInfo[];
  projectsFilter: TProjectsFilter[];
};

export type TProjectsInfo = {
  id: number;
  title: string;
  overview: string;
  introductionList: {
    key: string;
    value: string;
  }[];
  features: string[];
  technologies: string[];
  tags: string[];
  img: StaticImageData;
  link: string;
  techIcons: ReactElement[];
  packages?: string[];
  repository?: string;
};

type TProjectsFilter = {
  title: string;
  tag: string;
  icon: ReactElement;
};
