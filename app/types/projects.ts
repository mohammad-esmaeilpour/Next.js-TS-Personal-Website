import { StaticImageData } from "next/image";
import { ReactElement } from "react";
import { TitleDescription } from "../interface/global";

export type TProjectData = {
  projectsInfo: TProjectsInfo[];
  projectsFilter: TProjectsFilter[];
};

export type TProjectsInfo = {
  id: number;
  title: string;  
  overview: string 
  features: TitleDescription[]
  techStack:{
    title: string
    icon:ReactElement
  }[]
  tags: string[];
  img: StaticImageData;
  previewLink?: string;
  repository?: string;
};

type TProjectsFilter = {
  title: string | ReactElement;
  tag: string;
  icon: ReactElement;
};
