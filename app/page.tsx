import { sliderData, companyData } from "@/public/data/home";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Slider from "./components/Slider";
import Company from "./components/Company";
import AboutMe from "./components/AboutMe";
import Collapse from "./components/Collapse";
import Faq from "./components/Faq";
import TextMove from "./components/TextMove";

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

      {/* text moving */}
      <TextMove />

      {/* Slider */}
      <Slider data={sliderData} />

      {/* faq */}
      <Faq />

      {/* Float nav */}
      {/* <FloatNav /> */}
    </>
  );
}
