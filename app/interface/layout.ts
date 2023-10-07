import { IButtonCustome } from "./global";

export interface INav {
  links: INavbarLinks[];
  btn: IButtonCustome[];
}

export interface INavbarLinks {
  title: string;
  link: string;
  id: number;
}
