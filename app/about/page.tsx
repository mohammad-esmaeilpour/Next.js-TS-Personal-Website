import { aboutSeo } from "@/public/data/about";
import { Fragment } from "react";
import { Metadata } from "next";
import Hero from "./_components/Hero";
import JournyTimeLine from "./_components/JournyTimeLine";
import TimeLine from "./_components/TimeLine";

export const metadata: Metadata = {
  title: aboutSeo.title,
  description: aboutSeo.metadescription,
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
 