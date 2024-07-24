import Image from "next/image";
import React from "react";
import mamad from "@/public/img/ui/human-min.svg";

const AboutMe = () => {
  return (
    <div className="text-center mt-56 mb-96" data-aos="fade-up">
      <div>About Mohammad Esmaeilour</div>
      <h2>Im Mohammad Esmaeilour</h2>
      <div className="flex max-w-4xl mx-auto relative min-h-[600px] bg-gradient-to-b from-transparent via-transparent to-white">
        <Image
          src={mamad}
          alt="mohammad"
          fill
          className="object-contain -z-10 -translate-x-40"
        />
        <div
          data-aos="fade-left"
          className="absolute -right-10 top-[85%] border bg-white rounded-2xl max-w-2xl p-7 text-left"
        >
          Hi 👋, I am Mohammad Esmaeilpour , 25 years old. I am a Frontend
          developer who works as a front-end developer (React). I am responsible
          for the tasks entrusted to me and eager to learn in this field. I have
          experience working in a programming team where I have had good
          experiences and I have a spirit for team work and I am interested in
          group work.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
