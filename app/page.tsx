import { SliderData, companyData, introData, skillsData, socialData } from "@/public/data/home";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Slider from "./components/slider/Slider";
import Company from "./components/Company";
import Social from "./components/Social";
import FloatNav from "./components/FloatNav";

export default function Home() {
  return (
    <main>
      {/* Intro */}
      <Intro data={introData} />
      {/* Skills */}
      <Skills data={skillsData} />
      {/* Slider */}
      <Slider data={SliderData} />
      {/* Company */}
      <Company data={companyData} />
      {/* Socail */}
      <Social data={socialData} />
      {/* Float nav */}
      {/* <FloatNav /> */}
    </main>
  );
}
