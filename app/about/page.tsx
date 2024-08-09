import { aboutHeadings, aboutSeo } from "@/public/data/about";
import { Fragment } from "react";
import { Metadata } from "next";
import JournyTimeLine from "./_components/JournyTimeLine";
import Specialist from "./_components/Specialist";
import WorkHighlight from "../components/WorkHighlight";
import ReactIcon from "../components/icons/ReactIcon";
import JSIcon from "../components/icons/JSIcon";
import TSIcon from "../components/icons/TSIcon";
import TailwindIcon from "../components/icons/TailwindIcon";
import ReduxIcon from "../components/icons/ReduxIcon";

export const metadata: Metadata = {
  title: aboutSeo.title,
  description: aboutSeo.metadescription,
};

const About = () => {
  return (
    <Fragment>
      <div className="mb-20">
        <div className="bg-white dark:bg-gray-900">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff90be] to-[#c1bdff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
            </div>
            <div className="mx-auto max-w-6xl py-32">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-700/10 hover:ring-gray-900/20 dark:hover:ring-gray-700/20">
                  everything you need to know ! {""}
                  <a
                    href="#"
                    className="font-semibold text-orange-600 dark:text-orange-400"
                  >
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                    ></span>
                    Home page <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h1 className="tracking-tight text-gray-900 dark:text-white">
                  {aboutHeadings.h1.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  {aboutHeadings.h1.subTitle}
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Specialist />

      <JournyTimeLine />

      <section className="my-20 max-w-7xl mx-auto">
        <h2>{aboutHeadings.h2.expertise.title}</h2>
        <p className="mt-2">{aboutHeadings.h2.expertise.subTitle}</p>
        <div role="tablist" className="tabs tabs-lifted mt-20">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Tab 1"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 1
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Tab 2"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 2
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Tab 3"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Tab content 3
          </div>
        </div>
      </section>

      <WorkHighlight />

      <section className="my-20 max-w-7xl mx-auto">
        <h2 className="flex items-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100px"
            height="100px"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M13 3C9.23 3 6.19 5.95 6 9.66l-1.92 2.53c-.24.31 0 .81.42.81H6v3c0 1.11.89 2 2 2h1v3h7v-4.69c2.37-1.12 4-3.51 4-6.31c0-3.86-3.12-7-7-7m1 11h-2v-2h2zm1.75-5.19c-.29.4-.66.69-1.11.93c-.25.16-.42.33-.51.52c-.09.18-.13.43-.13.74h-2c0-.5.11-.92.31-1.18c.19-.27.54-.57 1.05-.91c.26-.16.47-.36.61-.59c.16-.23.23-.5.23-.82c0-.3-.08-.56-.26-.75c-.18-.18-.44-.28-.75-.28a1 1 0 0 0-.66.23c-.18.16-.27.39-.28.69h-1.93l-.01-.03c-.01-.79.25-1.36.77-1.77c.54-.39 1.24-.59 2.11-.59c.93 0 1.66.23 2.19.68c.54.45.81 1.06.81 1.82c0 .5-.15.91-.44 1.31"
            />
          </svg>
          {aboutHeadings.h2.whyChoose.title}{" "}
        </h2>
        <p className="mt-5">{aboutHeadings.h2.whyChoose.subTitle}</p>
      </section>
    </Fragment>
  );
};

export default About;
