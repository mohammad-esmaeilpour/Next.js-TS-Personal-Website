import { aboutHeadings, aboutSeo } from "@/public/data/about";
import { Fragment } from "react";
import { Metadata } from "next";
import JournyTimeLine from "./_components/JournyTimeLine";
import Specialist from "./_components/Specialist";

export const metadata: Metadata = {
  title: aboutSeo.title,
  description: aboutSeo.metadescription,
};

const About = () => {
  return (
    <Fragment>
      <div className="text-center my-20">
        <h1>{aboutHeadings.h1.title}</h1>
      </div>

      <Specialist />

      <JournyTimeLine />

      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <div className="bg-white grid place-content-center text-9xl font-black text-blue-800">
            Typescript
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-white grid place-content-center text-9xl font-black text-yellow-500">
            Javascript
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>

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

      <section className="my-20">
        <h2>{aboutHeadings.h2.projects.title}</h2>
        <p>{aboutHeadings.h2.projects.subTitle}</p>
      </section>
      
      <section className="my-20 max-w-6xl mx-auto">
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
