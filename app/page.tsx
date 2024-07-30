import { Metadata } from "next";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Faq from "./components/Faq";
import Aos from "./components/Aos";
import TimeLine from "./components/TimeLine";
import { Fragment } from "react";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/WorkHighlight";
import { homeSeo } from "@/public/data/home";

export const metadata: Metadata = {
  title: homeSeo.title,
  description: homeSeo.metadescription,
};

export default function Home() {
  return (
    <Fragment>
      <Aos />

      <Hero />

      <Skills />

      <AboutMe />

      <TimeLine />

      <Portfolio />

      <Faq />
    </Fragment>
  );
}
