import { homeSeo } from "@/public/data/home";
import { Metadata } from "next";
import { Fragment } from "react";
import Expertise from "./components/Expertise";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import WorkHighlight from "./components/WorkHighlight";


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
      <Skills/>
      <Expertise />
      <WorkHighlight />
    </Fragment>
  );
}
