import {
  sliderData,
  companyData,
  introData,
  skillsData,
  socialData,
} from "@/public/data/home";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Slider from "./components/Slider";
import Company from "./components/Company";
import Social from "./components/Social";
import FloatNav from "./components/FloatNav";

export default function Home() {
  return (
    <>
      {/* Intro */}
      <Intro data={introData} />
      {/* Skills */}
      <Skills />
      {/* Company */}
      <Company data={companyData} />
      {/* Slider */}
      <Slider data={sliderData} />

      {/* Float nav */}
      {/* <FloatNav /> */}
    </>
  );
}
