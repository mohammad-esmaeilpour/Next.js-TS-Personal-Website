export interface IIntro {
  intro: string;
  title: string;
}

export type ICompany = {
  imgSrc: string;
  link: string;
  id: number;
};

export interface ISkills {
  title: string;
  skills: {
    title: string;
    icon: any;
  }[];
}

export interface ISlider {
  subTitle: string;
  title: string;
  items: {
    title: string;
    des: string;
    img: any;
    link: string | JSX.Element;
  }[];
}

export interface ISocial {
  title: string;
  socialMedia: {
    link: string;
    icon: any;
    title: string;
  }[];
}
