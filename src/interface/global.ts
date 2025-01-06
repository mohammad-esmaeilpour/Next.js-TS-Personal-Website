import { StaticImageData } from "next/image";
import { ReactElement } from "react";

// single type's
type Title = {
  title: string | JSX.Element;
};

type SubTitle = {
  subTitle: string | JSX.Element;
};

type Description = {
  description: string | ReactElement
};

type Image = {
  img: string | StaticImageData;
};

type Icon = {
  icon: JSX.Element;
};

// extended Interface's
export interface TitleDescription extends Title, Description {}

export interface TitleSubTitle extends Title, SubTitle {}

export interface TitleSubTitleDescription
  extends Title,
    SubTitle,
    Description {}

export interface TitleDescriptionImage extends Title, Description, Image {}

export interface TitleSubTitleImage extends Title, SubTitle, Image {}

export interface TitleDescriptionIcon extends Title, Description, Icon {}

export interface TitleSubtitleDescriptionImage
  extends Title,
    SubTitle,
    Description,
    Image {}
