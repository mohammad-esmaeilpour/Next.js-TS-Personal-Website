import { Metadata } from "next";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Faq from "./components/Faq";
import TimeLine from "./components/TimeLine";
import { Fragment } from "react";
import AboutMe from "./components/AboutMe";
import WorkHighlight from "./components/WorkHighlight";
import { homeHeadings, homeSeo } from "@/public/data/home";
import Tabs from "./components/Tabs";
import Slider from "./components/global/Slider";

export const metadata: Metadata = {
  title: homeSeo.title,
  description: homeSeo.metadescription,
};

export default function Home() {
  return (
    <Fragment>
      <Hero />

      <Skills />
      {/* <TimeLine /> */}

      <AboutMe />
      <WorkHighlight />
      <Tabs />

      {/* <Faq /> */}
    </Fragment>
  );
}
