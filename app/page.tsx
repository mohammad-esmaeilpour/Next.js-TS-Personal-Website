import {
  CompanyData,
  IntroData,
  SliderData,
  skillsData,
  socialData,
} from "@/public/data/home";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Slider from "./components/Slider/Slider";
import Company from "./components/Company";
import Social from "./components/Social";

export default function Home() {
  return (
    <main>
      {/* Intro */}
      <Intro data={IntroData} />

      {/* Skills */}
      <Skills data={skillsData} />

      {/* Slider */}
      <Slider data={SliderData} />

      {/* Company */}
      <Company data={CompanyData} />

      {/* Socail */}
      <Social data={socialData} />
    </main>
  );
}
