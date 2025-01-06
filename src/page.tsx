import { Metadata } from "next";
import Hero from "./components/Hero";
import { Fragment } from "react";
import WorkHighlight from "./components/WorkHighlight";
import { homeSeo } from "@/public/data/home";
import Expertise from "./components/Expertise";
import Skills from "./about/_components/Skills";

export const metadata: Metadata = {
  title: homeSeo.title,
  description: homeSeo.metadescription,
  openGraph: {
    description: homeSeo.metadescription,
    title: homeSeo.title,
    images: "https://esmaeilpour.site/img/ui/logo.png",
    type: "website",
    url: "https://esmaeilpour.site",
    siteName: "Mohammad Esmaeilpour portfolio",
  },
};

export default function Home() {
  return (
    <Fragment>
      <Hero />
      {/* <Skills /> */}
      <Skills/>
      <Expertise />
      <WorkHighlight />
    </Fragment>
  );
}
