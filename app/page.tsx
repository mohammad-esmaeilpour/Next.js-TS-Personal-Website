import Intro from "./components/Intro";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Faq from "./components/Faq";
import TopSkills from "./components/TopSkills";
import HandShake from "./components/HandShake";
import Aos from "./components/Aos";
import TimeLine from "./components/TimeLine";

export default function Home() {
  return (
    <>
      {/* scroll animation */}
      <Aos />

      {/* Intro */}
      <Intro />

      {/* Skills */}
      <Skills />
      {/* Company */}
      {/* <Company /> */}

      {/* about me */}
      <AboutMe />

      {/* Slider */}
      {/* <Slider data={sliderData} /> */}
      <TopSkills />

      <TimeLine />

      {/* faq */}
      <Faq />

      {/* HandShake */}
      <HandShake />

      {/* Float nav */}
      {/* <FloatNav /> */}
    </>
  );
}
