import { Metadata } from "next";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import { Fragment } from "react";
import WorkHighlight from "./components/WorkHighlight";
import { homeSeo } from "@/public/data/home";
import Expertise from "./components/Expertise";

export const metadata: Metadata = {
  title: homeSeo.title,
  description: homeSeo.metadescription,

};

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Skills />
      <Expertise />
      <WorkHighlight />
    </Fragment>
  );
}
