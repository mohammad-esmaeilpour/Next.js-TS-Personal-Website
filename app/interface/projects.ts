// all components types for projects page is here

import { ReactNode } from "react";
import { TitleDesImg } from "./global";

export interface IProjectsCard extends TitleDesImg {
  link: string;
  techIcons: ReactNode[];
  tags: string[];
}

export interface IProjectsFilter {
  title: string;
  icon: ReactNode;
  tag: string;
}
