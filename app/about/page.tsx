import { aboutSeo } from "@/public/data/about";
import { Fragment } from "react";
import { Metadata } from "next";
import Hero from "./_components/Hero";
import JournyTimeLine from "./_components/JournyTimeLine";
import TimeLine from "./_components/TimeLine";

export const metadata: Metadata = {
  title: aboutSeo.title,
  description: aboutSeo.metadescription,
  openGraph: {
    description: aboutSeo.metadescription,
    title: aboutSeo.title,
    images: "https://esmaeilpour.site/public/img/ui/logo.png",
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
 