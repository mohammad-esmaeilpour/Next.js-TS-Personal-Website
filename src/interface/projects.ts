// all components types for projects page is here

import { ReactNode } from "react";
import { TitleDescriptionImage } from "./global";

export interface IProjectsCard extends TitleDescriptionImage{
  link: string;
  techIcons: ReactNode[];
  tags: string[];
  repo?: string;
}

export interface IProjectsFilter {
  title: string;
  icon: ReactNode;
  tag: string;
}
