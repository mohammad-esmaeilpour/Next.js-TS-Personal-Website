import { companyData } from "@/public/data/home";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Company from "./components/Company";
import AboutMe from "./components/AboutMe";
import Faq from "./components/Faq";
import TopSkills from "./components/TopSkills";
import HandShake from "./components/HandShake";

export default function Home() {
  return (
    <>
      {/* Intro */}
      <Intro />
      {/* Skills */}
      <Skills />
      {/* Company */}
      <Company data={companyData} />

      {/* about me */}
      <AboutMe />

      {/* Slider */}
      {/* <Slider data={sliderData} /> */}
      <TopSkills />

      {/* faq */}
      <Faq />

      {/* HandShake */}
      <HandShake />

      {/* Float nav */}
      {/* <FloatNav /> */}
    </>
  );
}
