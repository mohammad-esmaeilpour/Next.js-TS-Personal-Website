import { aboutHeadings } from "@/public/data/about";
import { Fragment } from "react";
import ReactIcon from "../components/icons/ReactIcon";
import NextjsIcon from "../components/icons/NextjsIcon";
import TSIcon from "../components/icons/TSIcon";
import JSIcon from "../components/icons/JSIcon";
import TailwindIcon from "../components/icons/TailwindIcon";

const About = () => {
  return (
    <Fragment>
      <div className="text-center my-20">
        <h1>{aboutHeadings.h1.title}</h1>
        <p>{aboutHeadings.h1.subTitle}</p>
      </div>
      <section className="my-20 text-center">
        <div className="max-w-5xl mx-auto">
          <h2>{aboutHeadings.h2.specialist.title}</h2>
          <p className="mt-5 line-clamp-1">
            {aboutHeadings.h2.specialist.subTitle}
          </p>
        </div>
        <div className="flex flex-wrap px-10 mt-32 gap-10 justify-center max-w-7xl mx-auto">
          <div className="indicator col-span-1" data-aos="fade-up">
            <div className="indicator-item indicator-start">
              <button>
                <ReactIcon size={45} />
              </button>
            </div>
            <div className="card border">
              <div className="card-body">
                <h2 className="card-title">Job Title</h2>
                <p>Rerum reiciendis beatae tenetur excepturi</p>
              </div>
            </div>
          </div>
          <div className="indicator col-span-1" data-aos="fade-up">
            <div className="indicator-item indicator-start">
              <button>
                <ReactIcon size={45} />
              </button>
            </div>
            <div className="card border">
              <div className="card-body">
                <h2 className="card-title">Job Title</h2>
                <p>Rerum reiciendis beatae tenetur excepturi</p>
              </div>
            </div>
          </div>
          <div className="indicator col-span-1" data-aos="fade-up">
            <div className="indicator-item indicator-start">
              <button>
                <ReactIcon size={45} />
              </button>
            </div>
            <div className="card border">
              <div className="card-body">
                <h2 className="card-title">Job Title</h2>
                <p>Rerum reiciendis beatae tenetur excepturi</p>
              </div>
            </div>
          </div>
          <div className="indicator col-span-1" data-aos="fade-up">
            <div className="indicator-item indicator-start">
              <button>
                <ReactIcon size={45} />
              </button>
            </div>
            <div className="card border">
              <div className="card-body">
                <h2 className="card-title">Job Title</h2>
                <p>Rerum reiciendis beatae tenetur excepturi</p>
              </div>
            </div>
          </div>
          <div className="indicator col-span-1" data-aos="fade-up">
            <div className="indicator-item indicator-start">
              <button>
                <ReactIcon size={45} />
              </button>
            </div>
            <div className="card border">
              <div className="card-body">
                <h2 className="card-title">Job Title</h2>
                <p>Rerum reiciendis beatae tenetur excepturi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-20">
        <h2>{aboutHeadings.h2.journey.title}</h2>
        <p>{aboutHeadings.h2.journey.subTitle}</p>
      </section>
      <section className="my-20">
        <h2>{aboutHeadings.h2.expertise.title}</h2>
        <p>{aboutHeadings.h2.expertise.subTitle}</p>
      </section>
      <section className="my-20">
        <h2>{aboutHeadings.h2.projects.title}</h2>
        <p>{aboutHeadings.h2.projects.subTitle}</p>
      </section>
      <section className="my-20">
        <h2>{aboutHeadings.h2.whyChoose.title}</h2>
        <p>{aboutHeadings.h2.whyChoose.subTitle}</p>
      </section>
    </Fragment>
  );
};

export default About;
