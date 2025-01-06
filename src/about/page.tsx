import { aboutSeo } from "@/public/data/about";
import { Fragment } from "react";
import { Metadata } from "next";
import Hero from "../components/Hero";
import JournyTimeLine from "./_components/JournyTimeLine";

export const metadata: Metadata = {
  title: aboutSeo.title,
  description: aboutSeo.metadescription,
  openGraph: {
    description: aboutSeo.metadescription,
    title: aboutSeo.title,
    images: "https://esmaeilpour.site/img/ui/logo.png",
    type: "website",
    url: "https://esmaeilpour.site/about",
    siteName: "Mohammad Esmaeilpour portfolio",
  },
};

const About = () => {
  return (
    <Fragment>
      <Hero />
      <JournyTimeLine />
    </Fragment>
  );
};

export default About;
 