import { StaticImageData } from "next/image";

// this is global interface using for every interface has Title and Description
export interface TitleDes {
  title: string;
  des: string;
}

// this is global interface using for every interface has Title and Description and Image
export interface TitleDesImg extends TitleDes {
  img: string | StaticImageData;
}

// this is global interface using for every interface has Title and Description and subTitle
export interface TitleDesSub extends TitleDes {
  subTitle: string;
}

// this is global interface using for every interface has Title and Description and subTitle and Image
export interface TitleDesSubImg extends TitleDes {
  subTitle: string;
  img: string;
}


