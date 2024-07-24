import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Faq from "./components/Faq";
import Aos from "./components/Aos";
import TimeLine from "./components/TimeLine";
import { Fragment } from "react";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

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

      <Footer />
    </Fragment>
  );
}
