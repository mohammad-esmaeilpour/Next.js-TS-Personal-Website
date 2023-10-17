import { IButtonCustome } from "./global";

export interface INav {
  links: INavbarLinks[];
  gmailBtn: IButtonCustome;
}

export interface INavbarLinks {
  title: string;
  link: string;
  id: number;
}
