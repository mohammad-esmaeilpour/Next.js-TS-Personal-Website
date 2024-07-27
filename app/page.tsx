import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Faq from "./components/Faq";
import Aos from "./components/Aos";
import TimeLine from "./components/TimeLine";
import { Fragment } from "react";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Head from "next/head";
import { homeSeo } from "@/public/data/home";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>{homeSeo.title}</title>
        <meta name="description" content={homeSeo.metadescription} />
      </Head>
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
